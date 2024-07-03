document.addEventListener('DOMContentLoaded', function() {
  let apiKeyUrl = document.querySelector('.getAPIKey').addEventListener('click', (event) => {
    event.preventDefault();
    chrome.tabs.create({ url: 'https://aistudio.google.com/app/apikey' });
  });
    let saveButton = document.getElementById('saveButton');
    
    saveButton.addEventListener('click', function() {
      let apiKeyInput = document.getElementById('apiKeyInput').value;
      saveApiKey(apiKeyInput);
    });
  });
  
  function saveApiKey(apiKey) {

    chrome.storage.local.set({ geminiExtaintionApiKey: apiKey }, function() {
      if (chrome.runtime.lastError) {
        console.error('Error setting geminiExtaintionApiKey: ' + chrome.runtime.lastError.message);
      } else {
        console.log('geminiExtaintionApiKey set successfully');

        alert(`geminiExtaintionApiKey set successfully and api key is ${apiKey}`);
      }
    });
  }
  
  