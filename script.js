

//functions
function scrollToForm() {
    const scrollDestination = document.querySelector('.form-page');
    console.log('scroll');
    scrollDestination.scrollIntoView({ behavior: 'smooth', block: 'start' })
}