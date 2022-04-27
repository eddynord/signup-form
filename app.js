        const firstName = document.getElementById('firstname')
        const lastName = document.getElementById('lastname')
        const email = document.getElementById('email')
        const password = document.getElementById('password')
        const form = document.getElementById('form-input')
        const submit = document.getElementById('submit')


        form.addEventListener('submit', (e) => {
            let message = []
            if(firstName.value === '' && lastName.value === '' && email.value === '' && password.value === '') {
                message.push('Welcome to the site')
            }
            e.preventDefault()
            alert('WELCOME TO THE SITE')
            })

