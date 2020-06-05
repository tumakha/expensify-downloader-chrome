function collectReportLinks() {
    let reportLinks = Array.from(document.querySelectorAll('td.reportName a')).map(l => l.href);
    chrome.runtime.sendMessage({reportLinks: reportLinks});
}
