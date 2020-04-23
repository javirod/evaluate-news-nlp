function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    console.log("::: Form Submitted :::", formText)
    var expression = /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/
    var regex = new RegExp(expression)
    console.log(regex.test(formText))
    if (regex.test(formText)) {
      console.log('Url valid')
    } else {
      alert('Url not valid')
    }

    fetch('http://localhost:8081/aylienApi', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header
        body: JSON.stringify({text: formText}),
      })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = `<br>Polarity: ${res.polarity}<br>Subjectivity: ${res.subjectivity}<br>Text: ${res.text}`
    })
}

export { handleSubmit }
