const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
  const isMobile = e.matches
  console.log(isMobile)
  if(isMobile){
    navbar.setAttribute('inert', '')
  }
  else{
    // desktop device
    navbar.removeAttribute('inert')
  }
}

function openSidebar(){
  navbar.classList.add('show')
  openButton.setAttribute('aria-expanded', 'true')
  navbar.removeAttribute('inert')
  document.body.classList.add('nav-open')
}

function closeSidebar(){
  navbar.classList.remove('show')
  openButton.setAttribute('aria-expanded', 'false')
  navbar.setAttribute('inert', '')
  dropdown.classList.remove('open')
  document.body.classList.remove('nav-open')
}

updateNavbar(media)

const dropbtn = document.querySelector('.dropdown .dropbtn')
const dropdown = document.querySelector('.dropdown')

dropbtn.addEventListener('click', (e) => {
  if (media.matches) {           // only intercept on mobile widths
    e.preventDefault()
    dropdown.classList.toggle('open')
  }
})