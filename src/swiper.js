// Swiper Class
var Swiper = require('swiper');

import Swiper from './components/core/core-class';

// Core Modules
import Resize from './modules/resize/resize';
import Observer from './modules/observer/observer';

//IMPORT_COMPONENTS

const components = [
  Resize,
  Observer,
  //INSTALL_COMPONENTS
];

Swiper.use(components);

//EXPORT

// core version + navigation, pagination modules:
import Swiper, { Navigaion, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigaion, Pagination]);

// init Swiper:
const swiper = new Swiper(...);