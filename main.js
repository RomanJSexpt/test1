const div = document.querySelector("input[name=summ]")
const btn = document.querySelector('input[type=button]')


//console.log(div.value)

btn.addEventListener("click", send)

function send() {

    let array = div.value.split("+")
    console.log(array)
    array = array.map(el => +el)
    let a = array.reduce(function (a, b) {
        return a + b

    }, 0)
    console.log(a)
}