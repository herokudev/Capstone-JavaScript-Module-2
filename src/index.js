//import 'bootstrap/dist/css/bootstrap.min.css';
//import '@fortawesome/fontawesome-free/js/fontawesome.js';
//import '@fortawesome/fontawesome-free/js/solid.js';
//import '@fortawesome/fontawesome-free/js/regular.js';
//import '@fortawesome/fontawesome-free/js/brands.js';
import statusCheck from './modules/status';
import appdata from './modules/appData';
import _, { get } from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
  
    return element;
  }
  
  document.body.appendChild(component());

  document.addEventListener('DOMContentLoaded', () => {
    appdata.loadImages();
    console.log('finish loading...');
  });
  
