let countEl = document.getElementById("count-el")
let count = 0 
let msgEl = document.getElementById("msg-el")
let msg = "EVERYTHING REMINDS ME OF "
function increment() {
    count += 1
    countEl.innerText = count
    msgEl.textContent += msg
}
console.log(count)