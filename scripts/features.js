// handle copy to clipboard 
const copyButton = document.getElementById('copy-btn');


copyButton.addEventListener('click', () => {

    let textToCopy = preview.innerText;

    navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log("Copied the text: " + textToCopy);
      createNotification('success', 'Text coopied to clipboard successfully')
    })
    .catch(err => {
      createNotification('error', 'Failed to copy text. Check yout browser permissions.')
    });

})