const btn = document.querySelector('.btn-danger')
const names = document.querySelectorAll('p')
console.log(names);

btn.addEventListener('click', e =>{
    e.preventDefault();

    const namesAll = [];
    for(let i = 0; i < names;i++){
        namesAll += names[i]
    }

    
    const random = Math.random(names)
    console.log(random);


})


const cardBody = document.querySelector('.card-body')
window.addEventListener('load', () =>{
    const newPeople = localStorage.getItem('people')
    const names = JSON.parse(localStorage.getItem('namesOne'))
    for(let i = 0; i < newPeople; i++){
        
    }
})


