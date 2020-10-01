const URL = "https://api.myidea.fr/v1/"

export function getNotes () {
    return new Promise((resolve, reject) => {
        window.fetch('https://api.myidea.fr/v1/notes')
        .then(response => response.json())
        .then(result => {
            console.log('Réponse API getNotes', result)
            resolve(result)
        })
        .catch(error => {
            window.alert(error)
            reject(error)
        })
    })
}

export function createNote (note) {
    return new Promise((resolve, reject) => {
        if (note.title && note.description){

            var body = {
                title: note.title,
                description: note.description
            }
    
            var params = { method: 'POST',
                            headers: {
                                'Content-Type': 'application/json; charset=UTF-8'
                            },
                            cache: 'default',
                            body: JSON.stringify(body)
                        };
            
            fetch(URL + 'notes', params)
            .then(response => {
                console.log(response)
                resolve()
            })
            .catch(error => reject(error))
        } else {
            reject('Informations manquantes')
        }
    })
}

export function updateNote (id) {
    return new Promise((resolve, reject) => {
        
    })
}

export function deleteNote (id) {
    return new Promise((resolve, reject) => {
        fetch(URL + 'notes/' + id, {method: 'DELETE'})
        .then(response => {
            console.log(response)
            resolve()
        })
        .catch(error => reject(error))
    })
}