'use strict'

const btnSave = document.querySelector('.btn_save')
const input = document.querySelectorAll('input')
const text = document.querySelectorAll('text')

const showText = function () {
    text.textContent = localStorage.getItem('text')
}

btnSave.addEventListener('click', function () {
    localStorage.setItem('text', input.value)
})

showText()

console.log(localStorage);