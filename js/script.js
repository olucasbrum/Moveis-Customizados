const changeTheme = document.querySelector('#change-theme')
const lightMode = document.querySelector('.light-mode')
const darkMode = document.querySelector('.dark-mode')

function theme() {
  document.body.classList.toggle('dark')
}

// load light or dark mode
// when the user enters the page again, their theme definitions will be loaded.
function loadTheme() {
  const darkMode = localStorage.getItem('dark')
  if (darkMode) {
    theme() ? dark() : light()
  }
}

loadTheme()

changeTheme.addEventListener('change', function () {
  theme()

  // save or remove dark mode |
  localStorage.removeItem('dark')

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('dark', 1)
  }
})

// save icons
function light() {
  lightMode.classList.add('hide')
  darkMode.classList.remove('hide')
}

function dark() {
  darkMode.classList.add('hide')
  lightMode.classList.remove('hide')
}

lightMode.addEventListener('click', function () {
  light()
})
darkMode.addEventListener('click', function () {
  dark()
})
