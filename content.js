// content.js
function createButton() {
  const button = document.createElement('button');
  button.innerText = 'Download Chat';
  button.id = 'chatButton';
  button.style.position = 'fixed';
  button.style.top = '20px';
  button.style.right = '20px';
  document.body.appendChild(button);

  let chatSave;


  button.addEventListener('click', () => {
    let chatDiv = document.getElementsByClassName('chat-scroll-area-component');
    for (var i = 0; i < chatDiv.length; i++) {
      var plainText = chatDiv[i].innerText;
      chatSave = plainText;
      console.log(plainText);
    }

    if (chatSave){
      var textToSave = chatSave;
      // Create a Blob with the text
      var blob = new Blob([textToSave], { type: 'text/plain' });
  
      // Create an anchor element for downloading
      var a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'textFile.txt';
  
      // Trigger a click event on the anchor element to initiate the download
      a.click();
  
      // Clean up resources
      window.URL.revokeObjectURL(a.href);
    }
    else {
      alert("There is no chat room. Play a game!");
    }
  });
}



// Check if the current page is a PDF
if (window.location.href.startsWith("https://www.chess.com/")) {
  createButton();
}
