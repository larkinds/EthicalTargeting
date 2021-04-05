
chrome.runtime.onInstalled.addListener((details) => {
  const reason = details.reason;
  if (reason === "install"){
    chrome.storage.sync.set({Interest: {}});     
  }
})

chrome.tabs.onUpdated.addListener(function
    (tabId, changeInfo, tab) {
      //if the user visits a new page
      if (changeInfo.url) {
        let keywordsDict = {};
        let script = {file: `getMeta.js`};
        let metaData = chrome.tabs.executeScript(tabId, script)
        
        //THIS IS FOR TESTING PURPOSES: Writing the keywords dict each time it gets updated
        chrome.storage.sync.get(function(result){console.log(result)})
      }
      
    }
);


chrome.runtime.onMessage.addListener(function(response, sendResponse) {
    console.log(response)
})