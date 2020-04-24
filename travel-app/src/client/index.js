// import js functions
import { performAction } from './js/app'
import { getWeather } from './js/app'
import { postData } from './js/app'
import { updateUI } from './js/app'


// import sass styles sheets
import './styles/style.scss'

document.getElementById('generate').addEventListener('click', performAction);

export { 
    performAction,
    // getWeather,
    // postData,
    // updateUI
}