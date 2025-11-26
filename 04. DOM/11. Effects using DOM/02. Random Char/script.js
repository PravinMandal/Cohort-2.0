let para = document.querySelector("p") 
const charac = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerText

para.addEventListener("mouseenter", () => {
    const ran = setInterval(() => {
        const str = text.split("").map(() => {
            return charac.split("")[Math.floor(Math.random() * 53)]
        }).join("")
        para.innerText = str
    }, 50)

    setTimeout(() => {
        clearInterval(ran)
    }, 3000);
})