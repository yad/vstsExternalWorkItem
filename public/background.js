chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            const getState = () => {
                var state = localStorage.getItem("formState");
                return state ? JSON.parse(state) : {enabled: true};
            }

            chrome.tabs.sendMessage(tabs[0].id, { type: "refresh", value: getState() });
        });
    }
});