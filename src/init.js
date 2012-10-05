/**
 * @param {Object} info
 * @param {Object} tab
 */
function onClickHandler (info, tab) {
  console.log(info, tab);
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    'title': 'Animate this element'
    ,'id': 'init'
  });
});
