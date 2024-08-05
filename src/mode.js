function modeSwtich (){
    const modeBTN = document.querySelectorAll('.toggle-mode')

    const theme = localStorage.getItem('theme')

    theme && document.body.classList.add('light-mode')

    const toggleTheme = () =>{
        document.body.classList.toggle('light-mode')
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode')
        } else {
            localStorage.removeItem('theme')
        }
    }

    modeBTN.forEach((btn)=>{
        btn.addEventListener('click', toggleTheme)
    })
}

export default modeSwtich;