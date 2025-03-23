'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const prom1 = new Promise(
  (resolve) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    // resolve(body.appendChild(div));

    logo.addEventListener('click', () => {
      prom1.resolve(body.appendChild(div));
    });
  },
  { once: true },
);

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.classList.add('error-message');
    div.textContent = 'Promise was rejected!';

    body.appendChild(div);

    reject(new Error('Promise was rejected!'));
  }, 3000);
});

prom2.catch((e) => {});
