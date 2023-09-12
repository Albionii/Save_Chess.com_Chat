// content.js
let chatSave;
function createButton() {
  const button = document.createElement('button');
  button.innerText = 'Download Chat';
  button.id = 'chatButton';
  button.style.position = 'fixed';
  button.style.top = '20px';
  button.style.right = '20px';
  document.body.appendChild(button);


  button.addEventListener('click', () => {
    
    let chatDiv = document.getElementsByClassName('chat-scroll-area-component');
    for (var i = 0; i < chatDiv.length; i++) {
      var plainText = chatDiv[i].innerText;
      chatSave = plainText;
    }
    

    if (chatSave || localStorage.getItem('chat_history')){
      var textToSave;
      if (chatSave){
        textToSave = chatSave;
      } 
      else {
        textToSave = localStorage.getItem('chat_history');
      }
      var blob = new Blob([textToSave], { type: 'text/plain' }); 
      var a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'textFile.txt';
      a.click();
      window.URL.revokeObjectURL(a.href);
      chatSave = '';
      localStorage.setItem('chat_history', '');
    }
    else {
      alert("There is no chat room. Play a game with someone!");
    }
  });
}


function saveChatToLocalStorage(){
  let chatDiv = document.getElementsByClassName('chat-scroll-area-component');
  for (var i = 0; i < chatDiv.length; i++) {
    var plainText = chatDiv[i].innerText;
  }
  if (plainText){
    localStorage.setItem('chat_history', plainText);
  }
}


if (window.location.href.startsWith("https://www.chess.com/")) {
  createButton();
}
window.addEventListener('beforeunload', saveChatToLocalStorage);
