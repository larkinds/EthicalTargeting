const urlMetadata = require('url-metadata');
var keyword_extractor = require("keyword-extractor");
// Input: url (String)
// Output: Map, containing keywords as keys and their occurence number as values
function findMetaTags(url){
    let keywordsDict = {};
    urlMetadata(url).then(
        function (metadata) { 
        // success handler
        for (prop in metadata){
            var new_words = (keyword_extractor.extract(metadata[prop],{
                language:"english",
                remove_digits: true,
                return_changed_case:true,
                remove_duplicates: false,
                return_chained_words: true
           }));
           for (index in new_words) {
                let word = new_words[index].toString().toLowerCase()
                if  (word.includes("://") && word.includes("http")) continue; // if word is a URL, skip
                if (word.length> 100) continue; // If the word has more than 200chars, its probably irrelevant
                keywordsDict[word] = keywordsDict[word] ? keywordsDict[word]+1 : 1 // If the word already exists in the dict, increment its value
                                                                        // else, adds the word to the dict with an initial value of 1.
           }
        }
        return keywordsDict;
    },
    function (error) { 
        // failure handler
        console.log(error)
    })
}

findMetaTags("https://www.npmjs.com/package/url-metadata")