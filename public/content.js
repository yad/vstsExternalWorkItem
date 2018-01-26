(function() {
    $(function() {
        const url = window.location.href;
        const vstsPattern = ".visualstudio.com";
        if (url.includes(vstsPattern)) {
            console.log("[vsts-external-workitem-extension] Current page is a .visualstudio.com page.");
            function injectScript(file, node) {
                var th = document.getElementsByTagName(node)[0];
                var s = document.createElement('script');
                s.setAttribute('type', 'text/javascript');
                s.setAttribute('src', file);
                th.appendChild(s);
            }
            injectScript( chrome.extension.getURL('inject.js'), 'body');

            const interval = 1000;

            const getState = () => {
                var state = localStorage.getItem(formSaveKey);
                return state ? JSON.parse(state) : {enabled: true};
            }

            const run = () => {
                internalRun(getState);
                setInterval(() => internalRun(getState), interval);
            };

            const internalRun = (getState) => {
                const state = getState();
                console.log(locateElement("body"));
                if (!state.enabled) {
                    return;
                }
                            
                if (!url.includes(state.vsts || "")) {
                    return;
                }
            
                const description = locateElement("div.vc-pullrequest-activity-feed-description");
                const missingWorkItemLink = !description.text().includes(state.externalWorkItem);
            
                const complete = locateElement("button#pull-request-complete-button");
                const listPolicies = locateElement("div.vc-pullrequest-merge-policy-status-list div.ms-List-surface");
            
                refreshExternalWorkItemPolicy(listPolicies, complete, missingWorkItemLink);
            }
            
            const locateElement = (selector) => {
                const element = $(selector);
                if (!element) {
                    throw new Error(`VSTS not found: ${selector}`);
                }
            
                return element;
            }
            
            const externalWorkItemHook = "external-workitem-hook";
            const refreshExternalWorkItemPolicy = (listPolicies, complete, error) => {
                const label = error ? "Missing workitem reference" : "Workitem added";
                const errorOrSuccessClass = `bowtie-${error ? "math-multiply" : "check"}`;
            
                if (error) {
                    complete.hide();
                } else {
                    complete.show();
                }       
            
                const alreadyExists =$(`div#${externalWorkItemHook}`);
                if (!alreadyExists) {
                    listPolicies.append(makePolicy(errorOrSuccessClass, label));
                } else if(!alreadyExists.is(`[${errorOrSuccessClass}]`)) {
                    alreadyExists.remove();
                    listPolicies.append(makePolicy(errorOrSuccessClass, label));
                } else {
                    // freeze !
                }
            };
            
            const makePolicy = (errorOrSuccessClass, label) => 
                $(`<div id="${externalWorkItemHook}" ${errorOrSuccessClass} role="presentation" class="ms-List-cell" data-list-index="0" data-automationid="ListCell">` +
                    '<div role="listitem" class="vc-pullrequest-merge-policy-status-item">' +
                        `<i class="bowtie-icon ${errorOrSuccessClass}" aria-label="${label}"></i>` +
                        `<span class="statusText">${label}</span>` +
                    '</div>' +
                '</div>');            

        }
    });
    let width = 200;
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if(request.type === "start") {
            $(function() {
                run();
            });
        }
    });
})();