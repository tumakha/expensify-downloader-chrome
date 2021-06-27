const delay = ms => new Promise(res => setTimeout(res, ms));

async function downloadPdf() {
    waitThenClick('button.report-details-button')
    waitThenClick('button.expensicons-download')

    while (!document.querySelector('div.pdf_message a.btn')) {
        await delay(1000)
    }

    await delay(4000)
    window.close();
}

async function waitThenClick(selector) {
    while (!document.querySelector(selector)) {
        await delay(1000)
    }
    document.querySelector(selector).click();
}

downloadPdf();
