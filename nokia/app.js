const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnFont = $('.font')
const btnConvert = $('.convert')
const btnClear = $('.clear')

const numE = $('.number')
const charE = $('.char')
const tt = $$('textarea')
numE.focus()

const char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const number = ['2', '22', '222', '3', '33', '333', '4', '44', '444', '5', '55', '555', '6', '66', '666', '7', '77', '777', '7777', '8', '88', '888', '9', '99', '999', '9999']

const fonts = [
    `'Alegreya Sans SC', sans-serif`,
    `'Dongle', sans-serif`,
    `'Open Sans', sans-serif`,
    `'Oswald', sans-serif`,
    `'Poppins', sans-serif`,
    `'Raleway', sans-serif`,
    `'Saira', sans-serif`
]
btnConvert.onclick = function() {
    convert()
}
btnClear.onclick = function() {
    tt.forEach(function(t) {
        t.value = ''
    })
}
btnFont.onclick = function() {
    const ran = Math.floor(Math.random() * fonts.length);
    $$('.f').forEach(function(t) {
        t.style.fontFamily = fonts[ran]
    })
}

function convert() {
    if (numE.value != '') {
        var newText = ''
        var myArray = numE.value.split(" ");
        myArray.forEach(function(a) {
            for (i = 0; i < number.length; i++) {
                if (number[i] == a) {
                    newText += char[i]
                }
            }
        })
        charE.innerText = newText
    }

}