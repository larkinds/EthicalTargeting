/* eslint-disable no-undef */

let dataCollectionAutorizedBool = true; // Set to true if the user authorizes the data collection

// at installation, initialize the user profile 
chrome.runtime.onInstalled.addListener((details) => {
    const reason = details.reason;
    if (reason === "install"){
      //NOTE: need to update this with the user's info
      var userInfo = {
        'profileName':'N/A',
        'age':'N/A',
        'gender':'N/A',
        'occupation':'N/A',
        'region':'N/A',
        'interests':{},
        'dislikes':{}
        }
      chrome.storage.sync.set(userInfo);
    }
  })
  
  const tabListener = function(tabId, tab){
    //update interests of the user:
    let script = {file: `getMeta.js`};
    chrome.tabs.executeScript(tabId, script)
  }
  
  //When accessing a new website, collects the metatags and update the user's profile
  chrome.tabs.onUpdated.addListener(function
      (tabId, changeInfo, tab) {
        //if the user visits a new page
        if (changeInfo.url && dataCollectionAutorizedBool) {
          tabListener(tabId, tab)
        }
      }
  );
  
  
  chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
      switch (response.message){
        case "get_dataCollectionAutorizedBool": //If the popup UI asks for the value of dataCollectionAutorizedBool, return it
          sendResponse({message: dataCollectionAutorizedBool});
          break;
        case "on":  //If the user enabled data Collection
          dataCollectionAutorizedBool = true;
          break;
        case "off": //If the user disabled data Collection
          dataCollectionAutorizedBool = false;
          break;
        default:
          break;
      }
  })
  
  //Add the ad triger, show 1 ad each 120 minutes(2hours). 
  //FIXME make this customizable by the user in future updates.
  chrome.alarms.create("adTriger", {
    delayInMinutes: 120,
    periodInMinutes: 120
  });
  
  chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name === "adTriger") {
      chrome.tabs.executeScript({ file: "getAds.js" })
    }
  });

  chrome.storage.onChanged.addListener(function(changes, namespace) {
    for (var key in changes) {
      var storageChange = changes[key];
      console.log('Storage key "%s" in namespace "%s" changed. ' +
                  'Old value was "%s", new value is "%s".',
                  key,
                  namespace,
                  storageChange.oldValue,
                  storageChange.newValue);
    }
  });
  
