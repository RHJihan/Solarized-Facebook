chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({ url: "https://rhjihan.github.io/Solarized-Facebook/assets/help.html" }, function (tab) {
        console.log("New tab launched");
    });
});