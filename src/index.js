import './SCSS/index.scss';
import photoImg from './assets/photo-1542273917363-3b1817f69a2d.avif';
import test from './page';

// console.log('hi2');
const btn = document.querySelector('#btn');
const num = document.querySelector('#num>p');
let btnHandler = e => {
  let a = parseInt(num.innerText, 10);
  num.innerText = a + 1;
};
btn.addEventListener('click', btnHandler);

//-------------
class Test {
  #a = 1;
}

const tt = new Test();

console.log('tt.a', tt.a);

console.log(12);

//-------

const imgJs = document.querySelector('#ImgSrc');
imgJs.src = photoImg;

//-----------
const jokeBtn = document.querySelector('.jokeBtn');
jokeBtn.addEventListener('click', test);
test();
