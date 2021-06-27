const delay = ms => new Promise(res => setTimeout(res, ms));

async function downloadPdf() {
    await waitThenClick('button.report-details-button')
    await waitThenClick('button.expensicons-download')
    await waitFor('div.pdf_message a.btn')

    await delay(4000)
    window.close();
}

async function waitFor(selector) {
    while (!document.querySelector(selector)) {
        await delay(1000)
    }
}

async function waitThenClick(selector) {
    while (!document.querySelector(selector)) {
        await delay(1000)
    }
    document.querySelector(selector).click();
}

downloadPdf();
