const sideLinks = Array.from(document.querySelectorAll('.side-link a'))
const sidebar = document.getElementById('side-bar')
const navBtn = document.getElementById('nav-btn')
const closeBtn = document.getElementById('close-btn')
console.log(sideLinks)

navBtn.addEventListener('click', (e)=>{
    
    if(navBtn.classList.contains('close-btn')){
        navBtn.classList.replace('close-btn', 'nav-btn')
        navBtn.innerHTML = `<i class="fa-solid fa-bars">`
        sidebar.classList.remove('show-side')
    }else if(navBtn.classList.contains('nav-btn')){
        navBtn.classList.replace('nav-btn', 'close-btn')
        navBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        sidebar.classList.add('show-side')
        sidebar.classList.add('show-side')
    }
})

sideLinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
        navBtn.classList.replace('close-btn', 'nav-btn')
        navBtn.innerHTML = `<i class="fa-solid fa-bars">`
        sidebar.classList.remove('show-side')
    })
})

