//when a tab get initialized/ URL gets accessed



//when a tab gets activated
chrome.tabs.onActivated.addListener((tab) => {

    chrome.tabs.get(tab.tabId, (current_tab_info) => {
        console.log(current_tab_info);
        saveState(current_tab_info);
        getState();
    });

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
