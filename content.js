console.log("YouTube Clean Copy script loaded!");

document.body.addEventListener('click', (event) => {
  
  const clickedButton = event.target.closest('button');

  if (!clickedButton) {
    return;
  }

  const ariaLabel = clickedButton.getAttribute('aria-label');
  if (ariaLabel && ariaLabel.toLowerCase() === 'copy') {
    
    console.log('YouTube "Copy" button detected!');

    event.preventDefault();
    event.stopImmediatePropagation();

    const shareUrlInput = document.getElementById('share-url');
    
    if (shareUrlInput) {
      let shareUrl = shareUrlInput.value;
      
      if (shareUrl.includes('?')) {
        shareUrl = shareUrl.split('?')[0];
      }

      navigator.clipboard.writeText(shareUrl)
        .then(() => {
          console.log('Extension copied CLEAN URL to clipboard:', shareUrl);
          
          chrome.runtime.sendMessage({ 
            type: "youtube-copy-clicked",
            url: shareUrl 
          });
        })
        .catch(err => {
          console.error('Extension failed to copy URL:', err);
        });
        
    } else {
      console.warn('Could not find share-url input field.');
    }
  }

}, true);