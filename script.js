const name_ = document.querySelector('#name')
const password = document.querySelector('#password')
const form = document.querySelector('#form')
const errorElement = document.querySelector('#error')

form.addEventListener('submit', (e) => {
  const messages = []

  if (name_.value === '' || name_.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length < 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length > 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value = 'password') {
    messages.push('Choose another password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})