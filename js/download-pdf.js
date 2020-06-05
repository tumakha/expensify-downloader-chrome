const delay = ms => new Promise(res => setTimeout(res, ms));

async function downloadPdf() {
    while (!document.querySelector('.js_downloadPDF a')) {
        await delay(1000)
    }
    document.querySelector('.js_downloadPDF a').click();

    while (!document.querySelector('div.pdf_message a.btn')) {
        await delay(1000)
    }
    await delay(4000)

    window.close();
}

downloadPdf();
