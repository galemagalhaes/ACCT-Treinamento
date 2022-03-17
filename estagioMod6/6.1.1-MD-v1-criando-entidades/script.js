const form = document.querySelector('.form-example');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let data = {
        Produto: document.querySelector('.form-sku').value,
        Cliente: document.querySelector('.form-usuario').value,
        Data: document.querySelector('.form-data').value,
        Nota: document.querySelector('.form-nota').value,
        Comentario: document.querySelector('.form-comentario').value
    }

    fetch('/api/dataentities/AV/documents', {
        method: 'POST',
        headers: {
            "content-type": 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log('sucess', response)
        })
})