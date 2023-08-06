const sideLinks = Array.from(document.querySelectorAll('.side-link a'))
const sidebar = document.getElementById('side-bar')
const navBtn = document.getElementById('nav-btn')
console.log(sideLinks)

navBtn.addEventListener('click', (e)=>{
    sidebar.classList.toggle('show-side')
})
sideLinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
        sidebar.classList.toggle('show-side')
    })
})

