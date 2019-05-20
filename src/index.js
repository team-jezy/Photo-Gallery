import template from './pic-template.js';
import htmlToDOM from '../src/html-to-DOM.js';
import images from './images.js';
import templateHeader from './template-header.js';

const pictures = document.getElementById('pictures');
const header = document.getElementById('horny-creatures');

images.forEach(picture => {
    const html = template(picture);
    const dom = htmlToDOM(html);
    pictures.appendChild(dom);

});

const htmlHeader = templateHeader();
const domHeader = htmlToDOM(htmlHeader);
header.appendChild(domHeader);