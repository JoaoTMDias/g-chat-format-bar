/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.browserAction.onClicked.addListener(function (tab) {
    // Send a message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        console.log(activeTab);
        chrome.tabs.sendMessage(activeTab.id, {
            message: 'clicked_browser_action',
        });
    });
});

/******/ })()
;
//# sourceMappingURL=background.js.map