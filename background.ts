let activeTabId: number | null = null;

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'INTERVIEW_STARTED') {
    activeTabId = sender.tab?.id || null;
  } else if (message.type === 'INTERVIEW_ENDED') {
    activeTabId = null;
  }
  return true;
});

// Handle installation
chrome.runtime.onInstalled.addListener(() => {
  console.log('Interview Helper Extension installed');
});

