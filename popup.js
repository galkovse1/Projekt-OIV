chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const currentTab = tabs[0];
  const currentDomain = new URL(currentTab.url).hostname;

  chrome.storage.local.get("trackingData", (data) => {
    const tracking = data.trackingData || {};
    const trackers = tracking[currentDomain] || [];

    const info = document.getElementById("info");
    info.textContent = `Na tej strani je bilo zaznanih ${trackers.length} povezav do zunanjih domen.`;

    drawGraph(currentDomain, trackers);
  });
});