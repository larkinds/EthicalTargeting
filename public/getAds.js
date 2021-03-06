async function getAdByRelevance()
{   //TODO change this with the actual profile of the user
    let user_profile = {}

    chrome.storage.sync.get(function(result){user_profile = result})


    let publicUrl = 'https://gf3q7-kyaaa-aaaab-aa6aq-cai.ic0.app/'
    let rawAds = await fetch(publicUrl);
    let ads = await rawAds.json();

    // calculate the score of each ad to decide which ad to display
    let adsRelevanceScore = {} //stores the relevance score of each ad

    //Calculate the score based on the interests
    out_loop:
    for(let index in ads){
        //init score of ad at 0
        adsRelevanceScore[index] = 0

        //go through the profile and attribute a relevance score to each ad
        let profile = ads[index]["profile"]
        if( !(profile["interests"]["all"] === undefined))
        {   for(let elem in profile["interests"]["all"]){
                //if necessary interest is not found, give this ad a negative score and go to the next ad
                //(same if a keyword is in the user's dislikes)
                if ( ! user_profile['interests'].hasOwnProperty(profile["interests"]["all"][elem]) || user_profile['dislikes'].includes(profile["interests"]["all"][elem]) ){
                    adsRelevanceScore[index] = -1;
                    continue out_loop;
                }
                else{
                    let bonus = Math.min(user_profile['interests'][profile["interests"]["all"][elem]]["weight"], 20)
                    adsRelevanceScore[index] += bonus
                }
            }
        }
        
        if( !(profile["interests"]["none"] === undefined) )
        {   for(let elem in profile["interests"]["none"]){
                if ( !user_profile['interests'].hasOwnProperty(profile["interests"]["none"][elem]) ){
                    adsRelevanceScore[index] = -1;
                    continue out_loop;
                }
            }
        }
    
        if( !(profile["interests"]["some"] === undefined) )
        {   for(let elem in profile["interests"]["some"]){
                //if keyword is in the user's dislikes, give a neg score to the ad and go to next ad
                if(user_profile['dislikes'].hasOwnProperty(profile["interests"]["some"][elem])){
                    adsRelevanceScore[index] = -1;
                    continue out_loop;
                }
                //if optional keyword is found, increment the ad's relevance score
                else if (user_profile['interests'].hasOwnProperty(profile["interests"]["some"][elem])){
                    let bonus = Math.min(user_profile['interests'][profile["interests"]["some"][elem]]["weight"], 10)
                    adsRelevanceScore[index] += bonus
                }
            }
        }

    }

    //calculate the score based on other factors (age, gender) and combine it with the interests based score
    for(let index in ads){

        //go through the profile and attribute a relevance score to each ad
        let profile = ads[index]["profile"]

        //Checks the age criteria
        if( !(profile["age"] === null))
        {    if(profile["age"].hasOwnProperty("all"))
             if(!(profile["age"]["all"].includes(user_profile["age"])) && profile["age"]["all"].length>0){
                adsRelevanceScore[index] = -1;
                continue;
            }
            if(profile["age"].hasOwnProperty("none"))
            if(profile["age"]["none"].includes(user_profile["age"])){
                adsRelevanceScore[index] = -1;
                continue;
            }
            if(profile["age"].hasOwnProperty("some"))
            if (profile["age"]["some"].includes(user_profile["age"]) || profile["age"]["all"].includes(user_profile["age"])){
                    adsRelevanceScore[index]+=3
            }
    
        }
        
        //Checks the gender criteria
        if( !(profile["gender"] === null))
        {   if(profile["gender"].hasOwnProperty("all"))
            if(!(profile["gender"]["all"].includes(user_profile["gender"])) && profile["gender"]["all"].length>0){
                adsRelevanceScore[index] = -1;
                continue;
            }
            if(profile["gender"].hasOwnProperty("none"))
            if(profile["gender"]["none"].includes(user_profile["gender"])){
                adsRelevanceScore[index] = -1;
                continue;
            }
            if(profile["gender"].hasOwnProperty("some"))
            if (profile["gender"]["some"].includes(user_profile["gender"]) || profile["gender"]["all"].includes(user_profile["gender"])){
                    adsRelevanceScore[index]+=2
            }
        }

        //checks occupation/job criteria
        if( !(profile["occupation"] === null))
        {   if(profile["occupation"].hasOwnProperty("all"))
            if(!(profile["occupation"]["all"].includes(user_profile["occupation"])) && profile["occupation"]["all"].length>0){
            adsRelevanceScore[index] = -1;
            continue;
            }
            
            if(profile["occupation"].hasOwnProperty("none"))
            if(profile["occupation"]["none"].includes(user_profile["occupation"])){
                adsRelevanceScore[index] = -1;
                continue;
            }
            
            if(profile["occupation"].hasOwnProperty("some"))
            if (profile["occupation"]["some"].includes(user_profile["occupation"]) || profile["occupation"]["all"].includes(user_profile["occupation"])){
                    adsRelevanceScore[index]+=5
            }
        }

    }
    if (adsRelevanceScore[Object.keys(adsRelevanceScore).reduce((a, b) => adsRelevanceScore[a] > adsRelevanceScore[b] ? a : b)] < 0 ) return null //if no ad found, return null
    let adToDisplay = ads[Object.keys(adsRelevanceScore).reduce((a, b) => adsRelevanceScore[a] > adsRelevanceScore[b] ? a : b)]["image"]
    return adToDisplay
}

//display ad in chrome tab
async function displayAd(){
        let adToDisplay = await getAdByRelevance()
        //if no relevant ad was found, don't display anything
        if (adToDisplay == null) return;
        var dialog = document.createElement("dialog")
        var image = document.createElement("img")
        image.src = adToDisplay["url"]
        dialog.appendChild(image)
        image.style.width = adToDisplay["width"] + "px"
        image.style.height = adToDisplay["height"] + "px"
        var close = document.createElement("button")
        close.textContent = "Close"
        close.addEventListener("click", function() {
        dialog.close()
        })
        dialog.appendChild(close)
        document.body.appendChild(dialog)
        dialog.showModal()
}

displayAd()
