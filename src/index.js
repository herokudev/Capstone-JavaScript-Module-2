import _, { get } from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import statusCheck from './modules/status';
import appdata from './modules/appData';

document.addEventListener('DOMContentLoaded', async () => {
  appdata.displayShows();
  //appdata.loadImages();
  //statusCheck.loadlikes();
});

