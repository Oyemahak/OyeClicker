// OyeClicker Script by Mahak Patel. All rights reserved.
let oyeClickerInterval;
let isClicking = false;

// Function to start auto-clicking
function startOyeClicking(selector, interval = 1000) {
    if (isClicking) return;
    isClicking = true;

    oyeClickerInterval = setInterval(() => {
        const element = document.querySelector(selector);
        if (element) {
            element.click();
            console.log("Clicked:", element);
        } else {
            console.warn("Element not found:", selector);
        }
    }, interval);
}

// Function to stop auto-clicking
function stopOyeClicking() {
    clearInterval(oyeClickerInterval);
    isClicking = false;
    console.log("OyeClicker stopped.");
}

// Usage Example (Run in Browser Console)
// startOyeClicking('a[href*="ontariovirtualschool.ca"]', 2000);  // Click every 2 seconds
// stopOyeClicking(); // To stop clicking
