document.addEventListener("DOMContentLoaded", function () {
  let startButton = document.getElementById("startButton");
  let pauseButton = document.getElementById("pauseButton");
  let stopButton = document.getElementById("stopButton");

  // Initialize state from storage
  chrome.storage.local.get(["running", "paused"], function (data) {
    if (data.running) {
      startButton.style.display = "none";
      pauseButton.style.display = "inline";
      stopButton.style.display = "inline";
      pauseButton.innerText = data.paused ? "Resume" : "Pause";
    } else {
      startButton.style.display = "inline";
      pauseButton.style.display = "none";
      stopButton.style.display = "none";
    }
  });

  // Start button click handler
  startButton.addEventListener("click", function () {
    chrome.storage.local.set({ running: true, paused: false });
    chrome.runtime.sendMessage({ action: "startClicking" });

    startButton.style.display = "none";
    pauseButton.style.display = "inline";
    stopButton.style.display = "inline";
  });

  // Pause button click handler
  pauseButton.addEventListener("click", function () {
    chrome.storage.local.get("paused", function (data) {
      let newPausedState = !data.paused;
      chrome.storage.local.set({ paused: newPausedState });
      chrome.runtime.sendMessage({ action: newPausedState ? "pauseClicking" : "resumeClicking" });

      pauseButton.innerText = newPausedState ? "Resume" : "Pause";
    });
  });

  // Stop button click handler
  stopButton.addEventListener("click", function () {
    chrome.storage.local.set({ running: false, paused: false });
    chrome.runtime.sendMessage({ action: "stopClicking" });

    startButton.style.display = "inline";
    pauseButton.style.display = "none";
    stopButton.style.display = "none";
  });
});
