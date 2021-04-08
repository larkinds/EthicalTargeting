//at installation
chrome.runtime.onInstalled.addListener((details) => {
    const reason = details.reason;
    console.log(reason);
    if (reason === "install" ||reason === "update" ){
      //NOTE: need to update this with the user's info
      chrome.storage.sync.set(
        {"userInfo": {
                      'name':'Prabal',
                      'age':'21',
                      'gender':'Male',
                      'occupation':'Student',
                      'region':'United States',
                      'interests':{'Pokemon':1, 'Adventure':2, 'colours':3},
                      'dislikes':['Soccer','Serious People']
                      }}
        );
    }
  })
  
  const tabListener = function(tabId, tab){
    //update interests of the user:
    let keywordsDict = {};
    let script = {file: `getMeta.js`};
    chrome.tabs.executeScript(tabId, script)
    
    //THIS IS FOR TESTING PURPOSES: Writing the keywords dict each time it gets updated
    chrome.storage.sync.get('userInfo', function(result){console.log("resultat de l'update-28:" + JSON.stringify(result))})
  }
  
  //at new tab creation, with an exception to the "new tab" page
  chrome.tabs.onCreated.addListener((tab)=>{
    tabListener(tab.id, tab)
    console.log("onCreated called")
  });
  
  
  //When a updates a certain tab
  chrome.tabs.onUpdated.addListener(function
      (tabId, changeInfo, tab) {
        //if the user visits a new page
        if (changeInfo.url) {
          tabListener(tabId, tab)
          console.log("onUpdate called")
        }
      }
  );
  
  function saveState(state) {
    // Get a value saved in a form.
    // Check that there's some code there.
    if (!state) {
      console.log('Error: No value specified');
      return;
    }
    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({'userInfo': state.userInfo}, function() {
      // Notify that we saved.
      console.log('Settings saved');
    });
  }
  
  async function getState() {
      let result = chrome.storage.sync.get(['userInfo'], function(result){
        console.log(result);
      });
  }
  
  function removeState(){
    chrome.storage.sync.remove(['userInfo'], (err)=>{
      console.log(err);
    })
  }
  
  async function updateStringInfo(key, value)
  {
    //get the state
    chrome.storage.sync.get(['userInfo'], function(result){
      chrome.storage.sync.remove(['userInfo'], (err)=>{
        
        result.userInfo.name = value
        console.log(result)
  
        saveState(result);
      })
    });
  }
  
  //for the userInfo
  //key contains the key of the data, value has the updated value for the data
  function updateState(key, value){
    if(key==='name'||key==='age'||key==='gender'||key==='occupation')
    {
      updateStringInfo(key, value);
    }
    else
    {
      updateListInfo(key, value);
    }
  }
  
  chrome.runtime.onMessage.addListener(function(response, sendResponse) {
      console.log(response)
  })
  
  //Add the ad triger, show 1 ad each n minutes
  chrome.alarms.create("adTriger", {
    delayInMinutes: 1,
    periodInMinutes: 1
  });
  
  chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name === "adTriger") {
      chrome.tabs.executeScript({ file: "getAds.js" })
    }
  });
  /*
  //note that the function below can be used to send updated data to dfinity
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
  */
