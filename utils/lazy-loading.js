const lazyLoad =() =>{

    const imgLazy = document.querySelectorAll('.lazy')
    const observer = new IntersectionObserver((entries, observer)=>{
       entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                // console.log(entry.target);
                let img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading')
                img.classList.add('loaded')
                observer.unobserve(img)

                 
            } else {
                
            }
       })        
    
    },{
        root: null,
        rootMargin: '0px',
        threshold : 0
    });
    
    imgLazy.forEach((img)=>{
        observer.observe(img)
        // img.remove = 

        // observer.unobserve(img)
    })
}

export default lazyLoad;

