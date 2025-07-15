const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navber')

if (bar) {
	bar.addEventListener('click', () => {
		nav.classList.add('active')
	})
}

if (close) {
	close.addEventListener('click', () => {
		nav.classList.remove('active')
	})
}




function imageCall(){
    
    let MainImg = document.getElementById("MainImg");
    let images = document.querySelectorAll('.small-img')
    images.forEach((image)=>{
        image.addEventListener("click",()=>{
            MainImg.src = image.src
        })
    })
}
imageCall()



