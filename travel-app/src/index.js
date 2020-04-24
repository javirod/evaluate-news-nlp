// import js functions
import { performAction } from './client/js/app'

// import sass styles sheets
import './styles/style.scss'

document.getElementById('generate').addEventListener('click', performAction);

export { 
    performAction,
}