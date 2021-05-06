const cardBody = document.querySelector('.card-body')
window.addEventListener('load', () =>{
    const newPeople = localStorage.getItem('people')

    for(let i = 0; i < newPeople; i++){
        const input = document.createElement('input')
        input.classList.add('form-control')
        input.classList.add('mb-3')
        input.classList.add('pt-3')
        input.classList.add('pb-3')
        cardBody.appendChild(input);
        localStorage.setItem('namesOne', JSON.stringify(input))
    }
})

const btn = document.querySelector('.btn-success')
btn.addEventListener('click' , e =>{
    e.preventDefault();
    
    const onthe = JSON.parse(localStorage.getItem('namesOne'))
    // const newNames = [];
    console.log(onthe);

    if(onthe === ''){
        alert('Поля не должны быть пустыми!')
    }else if(onthe !== ''){
        window.open('win.html' , '_self')
    }
})








// window.addEventListener('load' , () => {
//     const okno = localStorage.getItem('okno');
//     if(okno === 'true'){
//         return;
//     }else{
//         window.open('index.html' , '_self');
//     }
// });

// window.addEventListener('load' , () =>{
//     const okno = localStorage.getItem('okno');
//     if(!okno){
//         return;
//     }else if(okno === 'true'){
//         window.open('second.html','_self')
//     }
// })