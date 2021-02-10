const sections = document.querySelectorAll("section");


const options = {
    root: null,
    threshold: 0.15,
    rootMargin: ""
};

const observer = new IntersectionObserver(function(entries, observer ){
entries.forEach(entry =>{
    // console.log(entry)
    entry.target.classList.toggle('vertical-scroll')
})
}, options)

sections.forEach( section => {
    observer.observe(section)
})

