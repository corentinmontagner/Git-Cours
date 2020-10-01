const URL = "https://api.myidea.fr/v1/"

const globalParams = {
    cache: 'default',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
}

export function login (credentials) {
    return new Promise((resolve,reject) => {
        if (credentials.email && credentials.password) {
            var body = {
                email: credentials.email,
                password: credentials.password
            }

            var params = {
                ...globalParams,
                method: 'POST',
                body: JSON.stringify(body)
            }
            
            fetch(URL + 'auth/login', params)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                resolve(response)
            })
            .catch(error => reject(error))
        } else {
            reject('Informations manquantes')
        }
    })
}

export function register (user) {
    console.log(user)
    return new Promise((resolve, reject) => {
        if (user.username && user.email && user.password){
            var body = {
                name: user.username,
                email: user.email,
                password : user.password
            }
    
            var params = {
                ...globalParams,
                method: 'POST',
                body: JSON.stringify(body)
            }
            
            fetch(URL + 'auth/register', params)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                resolve(response)
            })
            .catch(error => reject(error))
        } else {
            reject('Informations manquantes')
        }
    })
}

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

export function updateNote (note) {
    return new Promise((resolve, reject) => {
        if (note) {
            var noteId = note.id
            delete note.id

            var body = {
                isFavorite: note.isFavorite,
                title: note.title,
                description: note.description
            }

            var params = {
                ...globalParams,
                method: 'PATCH',
                body: JSON.stringify(body)
            }
    
            fetch(URL + 'notes/' + noteId, params)
            .then(response => {
                console.log(response)
                resolve()
            })
            .catch(error => reject(error))
            
        } else {
            reject('Note manquante')
        }
    })
}

export function deleteNote (noteId) {
    return new Promise((resolve, reject) => {
        if (noteId) {
            var params = {
                ...globalParams,
                method: 'DELETE',
            }
    
            fetch(URL + 'notes/' + noteId, params)
            .then(response => {
                console.log(response)
                resolve()
            })
            .catch(error => reject(error))
            
        } else {
            reject('ID manquant')
        }
    })
}