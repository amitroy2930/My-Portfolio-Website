// https://github.com/jamiewilson/form-to-google-sheets

const scriptURL = 'https://script.google.com/macros/s/AKfycbwZgQi1gOaoVSx9HBWs8WAYyugArmijGpXQE0QRovNZu_xbDIRWW7TAvbySS0mm0gzF9w/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })