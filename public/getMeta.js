var metas = document.getElementsByTagName('meta'); 
var keywordsDict = {};
var common_words = ["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your", "ain't", "aren't", "can't", "could've", "couldn't", "didn't", "doesn't", "don't", "hasn't", "he'd", "he'll", "he's", "how'd", "how'll", "how's", "i'd", "i'll", "i'm", "i've", "isn't", "it's", "might've", "mightn't", "must've", "mustn't", "shan't", "she'd", "she'll", "she's", "should've", "shouldn't", "that'll", "that's", "there's", "they'd", "they'll", "they're", "they've", "wasn't", "we'd", "we'll", "we're", "weren't", "what'd", "what's", "when'd", "when'll", "when's", "where'd", "where'll", "where's", "who'd", "who'll", "who's", "why'd", "why'll", "why's", "won't", "would've", "wouldn't", "you'd", "you'll", "you're", "you've"]

chrome.storage.sync.get(function(userInfo) {
    keywordsDict = userInfo['interests']
    for (var i=0; i<metas.length; i++) {
        if(metas[i].getAttribute("content") == null) continue
        let sentence = metas[i].getAttribute("content").toLowerCase().replace(/[^a-zA-Z ]/g, " ").split(' ')
        sentence = sentence.filter(function(el){return (el!=='' && el!==null && el!==undefined)})
        chrome.runtime.sendMessage(sentence)
        for(let index in sentence){     
            let word = sentence[index];                                         // If it contains a special char, removes it. Convert the entire string to lower case. 
            if (!isNaN(word)) continue;                                         // If it's a number, skip
            if (common_words.includes(word)) continue;                          // If it's a common word, skip
            if (word.length > 50) continue;                                     // If the word has more than 200chars, its probably irrelevant, skip
            if(word.length < 2) continue;                                // If the word has only 1 character, its probably irrelevant, skip
            if (keywordsDict.hasOwnProperty(word)) {
                keywordsDict[word]++; // If the word already exists in the dict, increment its value
            }
            else {
                keywordsDict[word] = 1;         // else, adds the word to the dict with an initial value of 1.
            }                                  
        }
    }

    // If the dict became too big, delete the keywords that have less than 4 occurences
    if (keywordsDict.length>10000) {
        let elem;
        for (elem in keywordsDict){
            if (keywordsDict[elem]<4) delete keywordsDict[elem];
        }
    }
    userInfo['interests'] = keywordsDict

    // This is not storing the keywords Dict correctly I think :/ 
    // TODO FIX THIS
    chrome.storage.sync.clear();
    chrome.storage.sync.set(userInfo); 

    //this function is defined in the background.js function
    //correction : use updateSte fuctions
    //updateState('interests', keywordsDict);

});



