// Background script

// Function to create context menu item
chrome.contextMenus.create({
    id: "learnAI1",
    title: "Ask AI",
    contexts: ["selection"]
  });
  
  // Add listener for when the context menu item is clicked
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "learnAI1" && info.selectionText) {
      console.log("Selected text:", info.selectionText);
      let prompt = `highlight the write anser only ${info.selectionText}`;
      fetch("http://localhost:3000/submit", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: prompt })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.message);
          chrome.notifications.create({
            type: "basic",
            title: "the write anwer is",
            iconUrl: "./1827504.png",
            message: data.message
          });
          // Send message to popup.js with the received data
          
        })
        .catch(error => console.error('Error:', error));
    } else {
      console.log("No text selected or invalid menu item clicked.");
    }
  });
  
