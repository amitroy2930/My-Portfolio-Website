// https://github.com/jamiewilson/form-to-google-sheets

const msg = document.getElementById("msg")
const scriptURL = 'https://script.google.com/macros/s/AKfycbwZgQi1gOaoVSx9HBWs8WAYyugArmijGpXQE0QRovNZu_xbDIRWW7TAvbySS0mm0gzF9w/exec'
const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Your Message Has Been Successfully Sent."
        setTimeout(() => {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })