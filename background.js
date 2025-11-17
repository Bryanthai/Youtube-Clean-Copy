chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "youtube-copy-clicked") {
    
    let notificationMessage = 'YouTube "Copy" button was clicked.';
    let logMessage = "Copy Link button was clicked!";

    if (message.url) {
      logMessage = `Clean link copied: ${message.url}`;

      notificationMessage = `Clean link copied: ${message.url}`;
    }

    console.log(logMessage);

    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon48.png',
      title: 'Link Cleaned!',
      message: notificationMessage
    });
  }
});