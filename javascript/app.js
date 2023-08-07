const sideLinks = Array.from(document.querySelectorAll('.side-link a'))
const sidebar = document.getElementById('side-bar')
const navBtn = document.getElementById('nav-btn')
const closeBtn = document.getElementById('close-btn')
console.log(sideLinks)

navBtn.addEventListener('click', (e)=>{
    sidebar.classList.toggle('show-side')
})

closeBtn.addEventListener('click', (e)=>{
    sidebar.classList.toggle('show-side')
})
sideLinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
        sidebar.classList.toggle('show-side')
    })
})

