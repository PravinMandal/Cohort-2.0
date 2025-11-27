let para = document.querySelector("p") 
const charac = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerText

let isAnimating = false;

para.addEventListener("mouseenter", () => {
    if(isAnimating) return;
    isAnimating = true;

    let i = 0
    const ran = setInterval(() => {
        const str = text.split("").map((char, index) => {
            if(index < i) {
                return char
            }
            return charac.split("")[Math.floor(Math.random() * 53)]
        }).join("")
        para.innerText = str
        i += 0.25
        if( i > text.length) {
            clearInterval(ran);
            para.innerHTML = text;
            isAnimating = false;
        }
    }, 30)

})