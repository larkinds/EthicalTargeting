let dataCollectionAutorizedBool;

//When loading the popup, ask the backgroundCrawler.js script for the value of dataCollectionAutorizedBool and 
//Initialize the value of the switch according to it.
window.addEventListener("load", (e)=>{
    console.log("onload!")
    chrome.runtime.sendMessage({message: "get_dataCollectionAutorizedBool"}, (response) => {
        dataCollectionAutorizedBool = response.message
        var input = document.getElementsByTagName('input')[0];
        input.checked = dataCollectionAutorizedBool
      });
      
});

//If the switch's state was changed, inform our backgroundCrawler by messaging him the new state (on or off)
document.getElementsByClassName('switch')[0].addEventListener('change', (e) => {
    this.checkboxValue = e.target.checked ? 'on' : 'off';
    if(this.checkboxValue){
        chrome.runtime.sendMessage({message: this.checkboxValue});
    }
})
