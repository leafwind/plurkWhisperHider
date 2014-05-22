function onRequest(request, sender, sendResponse) {
    if (request.method == 'none') {
        sendResponse({});
    }

    // Return nothing to let the connection be cleaned up.
    sendResponse({});
};

// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(onRequest);


function promptNewVersion(details) {
    if (details.reason == "install" || details.reason == "update") {
        chrome.tabs.create({url: "options.html"});
    }
}

chrome.runtime.onInstalled.addListener( promptNewVersion );
