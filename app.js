const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025', '#689195', '#b99555', '#ffc897', '#75c9a3', '#75233d', '#660022'];

const btn = document.querySelector('#btn');
const color = document.querySelector('.span-color')

btn.addEventListener('click', function(){
   
    const randmNumber = getRandomNumber()
    const mainColor = document.querySelector('#main-color').style.backgroundColor = colors[randmNumber]
    color.textContent= colors[randmNumber]

})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
};