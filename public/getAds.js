const { stringify } = require("postcss")

function getAdByRelevance()
{   //TODO change this with the actual profile of the user
    let user_profile = {
        'name':'Prabal',
        'age':'',
        'gender':'Male',
        'occupation':'Student',
        'region':'United States',
        'interests':{'google':5,"pinterest":3,"pictures":3},
        'dislikes':['soccer','Serious People']
        }

    // TODO ads = get_json()
    // TODO REMOVE the below line and replace it with ads = get_json_from_James_url()
    let ads = [{
        "id": "0",
        "owner": "jkmartindale",
        "image": {
            "url": "https://newsroom.pinterest.com/sites/pinnews/files/post_main_content_image/2019-07/Screen%20Shot%202019-07-25%20at%208.59.19%20AM.png",
            "width": 1156,
            "height": 632
        },
        "link": "https://newsroom.pinterest.com/en/post/ads-on-the-go",
        "start": "50000000",
        "end": "5000000",
        "profile": {
            "age": {
                "all": [],
                "some": [],
                "none": []
            },
            "gender": {
                "all": ["Male"],
                "some": [],
                "none": []
            },
            "occupation": {
                "all": [],
                "some": [],
                "none": []
            },
            "industry": {
                "all": [],
                "some": [],
                "none": []
            },
            "interests": {
                "all": ["pinterest"],
                "some": ["tutorials","pictures","ads","promote"],
                "none": []
            },
            "dislikes": null
        }
    },
    {
        "id": "1",
        "owner": "jkmartindale",
        "image": {
            "url": "https://www.google.com/search?q=GOOGLE+IMAGE&sxsrf=ALeKk01xkywtXnqD9px0U6udg6J5-Ad6Ew:1617868954599&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjCr9PCl-7vAhUIzqQKHWqcCNkQ_AUoAXoECAEQAw&biw=1920&bih=941#imgrc=7fEVakcJUgrsmM",
            "width": 1200,
            "height": 412
        },
        "link": "https://www.google.com/",
        "start": "50000000",
        "end": "5000000",
        "profile": {
            "age": {
                "all": [],
                "some": [],
                "none": []
            },
            "gender": {
                "all": [],
                "some": [],
                "none": []
            },
            "occupation": {
                "all": [],
                "some": [],
                "none": []
            },
            "industry": {
                "all": [],
                "some": [],
                "none": []
            },
            "interests": {
                "all": [],
                "some": ["google","research","find","query","search","engine","internet","chrome","browser","brave","safari","IE","edge"],
                "none": []
            },
            "dislikes": null
        }
    }]

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
                    let bonus = Math.min(user_profile['interests'][profile["interests"]["all"][elem]], 10)
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
                if(user_profile['dislikes'].includes(profile["interests"]["some"][elem])){
                    adsRelevanceScore[index] = -1;
                    continue out_loop;
                }
                //if optional keyword is found, increment the ad's relevance score
                else if (user_profile['interests'].hasOwnProperty(profile["interests"]["some"][elem])){
                    let bonus = Math.min(user_profile['interests'][profile["interests"]["some"][elem]], 5)
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
        if(!(profile["age"]["all"].includes(user_profile["age"])) && profile["age"]["all"].length>0){
            adsRelevanceScore[index] = -1;
            continue;
        }
        if(profile["age"]["none"].includes(user_profile["age"])){
            adsRelevanceScore[index] = -1;
            continue;
        }

        if (profile["age"]["some"].includes(user_profile["age"]) || profile["age"]["all"].includes(user_profile["age"])){
                adsRelevanceScore[index]+=3
        }

        //Checks the gender criteria
        if(!(profile["gender"]["all"].includes(user_profile["gender"])) && profile["gender"]["all"].length>0){
            adsRelevanceScore[index] = -1;
            continue;
        }
        if(profile["gender"]["none"].includes(user_profile["gender"])){
            adsRelevanceScore[index] = -1;
            continue;
        }

        if (profile["gender"]["some"].includes(user_profile["gender"]) || profile["gender"]["all"].includes(user_profile["gender"])){
                adsRelevanceScore[index]+=2
        }

        //checks occupation/job criteria
        if(!(profile["occupation"]["all"].includes(user_profile["occupation"])) && profile["occupation"]["all"].length>0){
            adsRelevanceScore[index] = -1;
            continue;
        }
        if(profile["occupation"]["none"].includes(user_profile["occupation"])){
            adsRelevanceScore[index] = -1;
            continue;
        }

        if (profile["occupation"]["some"].includes(user_profile["occupation"]) || profile["occupation"]["all"].includes(user_profile["occupation"])){
                adsRelevanceScore[index]+=5
        }

        }

    let adToDisplay = ads[Object.keys(adsRelevanceScore).reduce((a, b) => adsRelevanceScore[a] > adsRelevanceScore[b] ? a : b)][["image"]]
    return adToDisplay

}

getAdByRelevance();