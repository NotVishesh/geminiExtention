// Background script

// Function to create context menu item
chrome.contextMenus.create({
  id: "learnAI1",
  title: "Ask AI",
  contexts: ["selection"]
});


chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "learnAI1" && info.selectionText) {
    console.log("Selected text:", info.selectionText);

    // Retrieve API key from Chrome storage
    chrome.storage.local.get('geminiExtaintionApiKey', function(result) {
      if (chrome.runtime.lastError) {
        console.error('Error retrieving geminiExtaintionApiKey:', chrome.runtime.lastError.message);
      } else {
        const apiKey = result.geminiExtaintionApiKey;

        // Check if API key is available
        if (!apiKey) {
          console.error('API key not found in Chrome storage.');
          return;
        }

        console.log(apiKey);
        let prompt = `highlight the write answer only ${info.selectionText}`;
        fetch("http://localhost:3000/submit", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}` // Include API key in the headers
          },
          body: JSON.stringify({ message: prompt, apiKey : apiKey })
        })
        .then(response => response.json())
        .then(data => {
          console.log(data.message);
          chrome.notifications.create({
            type: "basic",
            title: "the write answer is",
            iconUrl: "./1827504.png",
            message: data.message
          });
        })
        .catch(error => console.error('Error:', error));
      }
    });
  } else {
    console.log("No text selected or invalid menu item clicked.");
  }
});
