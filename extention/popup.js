document.addEventListener('DOMContentLoaded', function() {
    var saveButton = document.getElementById('saveButton');
    
    saveButton.addEventListener('click', function() {
      var apiKeyInput = document.getElementById('apiKeyInput').value;
      saveApiKey(apiKeyInput);
    });
  });
  
  function saveApiKey(apiKey) {
    // Set the variable geminiExtaintionApiKey in Chrome storage
    chrome.storage.local.set({ geminiExtaintionApiKey: apiKey }, function() {
      if (chrome.runtime.lastError) {
        console.error('Error setting geminiExtaintionApiKey: ' + chrome.runtime.lastError.message);
      } else {
        console.log('geminiExtaintionApiKey set successfully');
        // Optionally, notify the user that the API key has been saved
        alert(apiKey);
      }
    });
  }
  