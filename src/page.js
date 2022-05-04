import axios from 'axios';
const joke = document.querySelector('.joke');

let test = () => {
  // console.log('hi');
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  axios.get('https://icanhazdadjoke.com', config).then(res => {
    joke.innerHTML = res.data.joke;
  });
};

export default test;
