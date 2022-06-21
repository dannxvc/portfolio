// Can also be included with a regular script tag
import './assets/css/styles.css';
import AOS from'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    offset: 90,  
    duration: 1000, 
     once:true,
});
//typing
import Typed from 'typed.js/src/typed.js';
var options = {
    strings: ["hi! i'm", 'danna.'],
    typeSpeed: 100
  };
  
var typed = new Typed('.element', options);
