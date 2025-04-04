let trackingData = {};

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    chrome.tabs.get(details.tabId, (tab) => {
      if (!tab || !tab.url) return;

      const pageUrl = new URL(tab.url);
      const pageDomain = pageUrl.hostname;
      const requestUrl = new URL(details.url);
      const requestDomain = requestUrl.hostname;

      if (pageDomain !== requestDomain) {
        if (!trackingData[pageDomain]) {
          trackingData[pageDomain] = new Set();
        }
        trackingData[pageDomain].add(requestDomain);
        chrome.storage.local.set({ trackingData: serializeTrackingData() });
      }
    });
  },
  { urls: ["<all_urls>"] },
  []
);

function serializeTrackingData() {
  const serialized = {};
  for (let domain in trackingData) {
    serialized[domain] = Array.from(trackingData[domain]);
  }
  return serialized;
}