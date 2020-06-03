chrome.browserAction.setBadgeText({text: ""});

document.body.style.border = "1px solid red";

chrome.browserAction.onClicked.addListener(function() {
    var badge = chrome.browserAction.getBadgeText()
    if (badge === "") {
        badge = "ON";
    }
    chrome.browserAction.setBadgeText({text: badge});
});