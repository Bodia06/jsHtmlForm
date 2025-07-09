import { inputHandler } from '../inputsRegExp.js'
import { renderInfo } from '../renderForm.js'

const inputs = document.querySelectorAll('form input')
inputs.forEach((element) => element.addEventListener('input', inputHandler))

const btnSend = document.querySelector('.contact-form__btn-submit')
btnSend.addEventListener('click', renderInfo)
