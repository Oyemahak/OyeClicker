// OyeClicker Background Script by Mahak Patel. All rights reserved.
// The background script manages the extension's state, handling the start, pause, and stop functionality

let running = false;
let paused = false;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "startClicking" && !running) {
    running = true;
    paused = false;
    chrome.storage.local.set({ running: true, paused: false });
    runOyeClicker();
  } else if (message.action === "pauseClicking") {
    paused = true;
    chrome.storage.local.set({ paused: true });
  } else if (message.action === "resumeClicking") {
    paused = false;
    chrome.storage.local.set({ paused: false });
    runOyeClicker();
  } else if (message.action === "stopClicking") {
    running = false;
    paused = false;
    chrome.storage.local.set({ running: false, paused: false });
  }
});

function runOyeClicker() {
  if (!running || paused) return;

  // Open a new tab with the search URL
  chrome.tabs.create({ url: "https://www.google.com/search?q=Online+courses+in+blth+academy" }, (tab) => {
    // Wait for the search results to load and then click the first visible link
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: clickFirstResult
      }, () => {
        // After clicking, we will close the tab
        setTimeout(() => {
          chrome.tabs.remove(tab.id);  // Close the tab after the click action
        }, 2000);  // Wait for 2 seconds before closing the tab (you can adjust this)
      });
    }, 2000);  // Reduced wait time to 2 seconds for faster page load

    // Wait for 5 seconds before opening the next tab and repeating the process
    setTimeout(() => {
      runOyeClicker();  // Open a new tab and start the next cycle
    }, 5000);  // Wait for 5 seconds before creating a new tab
  });
}

function clickFirstResult() {
  // Select the first organic search result (not sponsored)
  const firstResult = document.querySelector("h3");
  if (firstResult) {
    const firstLink = firstResult.parentNode;
    if (firstLink && firstLink.tagName === "A") {
      firstLink.click();  // Click on the first result link
    }
  }
}
