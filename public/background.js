//when a tab get initialized/ URL gets accessed



//when a tab gets activated
chrome.tabs.onActivated.addListener((tab) => {

    chrome.tabs.get(tab.tabId, (current_tab_info) => {
        console.log(current_tab_info);
        saveState(current_tab_info);
        getState();
    });

  });

function saveState(state) {
  // Get a value saved in a form.
  // Check that there's some code there.
  if (!state) {
    console.log('Error: No value specified');
    return;
  }
  // Save it using the Chrome extension storage API.
  chrome.storage.sync.set({'userInterests': state}, function() {
    // Notify that we saved.
    console.log('Settings saved'+state.url);
  });
}

function getState() {

  chrome.storage.local.get(['userInterests'], function(result) {
    console.log('Value currently is ');
    console.log(result)
    
    //return here

  });
}

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
