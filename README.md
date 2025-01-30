# Oye Clicker

## Overview
**Oye Clicker** is an automated browser extension designed to simulate clicks on web pages. The extension allows users to automate the clicking of elements on specific web pages, such as search results or buttons. It is especially useful for performing repetitive tasks such as raising SEO visibility or clicking links for data scraping purposes. This extension is customizable, with options to start, pause, resume, and stop the auto-clicking process.

Developed by Mahak Patel. All rights reserved.

## Features
- **Auto-clicking:** Automatically clicks on specified elements (such as search results) at a set interval.
- **Start, Pause, and Resume:** Users can control the auto-clicker by starting, pausing, or resuming the process.
- **Tab Management:** Open new tabs for the clicks and close them after the task is complete.
- **Customizable Interval:** Set the interval for clicks, allowing for faster or slower automation.
- **Lightweight and Easy to Use:** The extension runs in the background and is simple to control via the popup interface.

## Installation

1. Download the extension files.
2. Open Chrome browser and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the folder containing the extension files.
5. The extension will be added to your browser, and you can use it from the extensions toolbar.

## Usage

- Once installed, click on the **Oye Clicker** icon in the browser toolbar.
- You will see buttons for **Start**, **Pause**, and **Stop** in the popup.
- **Start**: Begins the auto-clicking process.
- **Pause**: Pauses the auto-clicking process (you can resume later).
- **Stop**: Stops the auto-clicking process entirely.

### Example Use Case:
You can set the auto-clicker to click on search results for specific queries every 2 seconds, such as:
```javascript
startAutoClicking('a[href*="ontariovirtualschool.ca"]', 2000);  // Click every 2 seconds
