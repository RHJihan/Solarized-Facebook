chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({ url: "../assets/help.html" }, function (tab) {
        console.log("New tab launched");
    });
});