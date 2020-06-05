const reportsUrl = "https://www.expensify.com/reports";

const delay = ms => new Promise(res => setTimeout(res, ms));

function collectLinks() {
    chrome.browserAction.setBadgeText({text: 'ON'});
    chrome.tabs.executeScript({code: 'collectReportLinks()'});
}

async function downloadAll(reportLinks) {
    for (let i = 0; i < reportLinks.length; i++) {
        chrome.tabs.create({url: reportLinks[i]}, function (tab) {
            chrome.tabs.executeScript({file: "js/download-pdf.js"});
        });

        await delay(8000);
    }

    chrome.browserAction.setBadgeText({text: ""});
}

chrome.browserAction.onClicked.addListener(function (tab) {
    if (tab.url.startsWith(reportsUrl)) {
        collectLinks();
    } else {
        chrome.tabs.create({url: reportsUrl});
    }
});

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.reportLinks) {
        const count = msg.reportLinks.length
        const title = count > 0 ? 'Download Reports' : 'No Reports';
        const message = count > 0 ? 'Downloading ' + count + ' reports...' : 'Specify filter to find reports';

        chrome.notifications.create(null, {
            type: 'basic',
            iconUrl: 'icons/icon1024.png',
            title: title,
            message: message
        });

        downloadAll(msg.reportLinks);
    }
});
