const cardBody = document.querySelector('.card-body')
window.addEventListener('load', () =>{
    const newPeople = localStorage.getItem('people')
    const namesPeople = [];

    for(let i = 0; i < newPeople; i++){
        const input = document.createElement('input')
        input.classList.add('form-control')
        input.classList.add('mb-3')
        input.classList.add('pt-3')
        input.classList.add('pb-3')
        
        cardBody.appendChild(input);
        
        namesPeople[i] = [
            {
                names: input
            }
        ]
        localStorage.setItem('namesOne', JSON.stringify(input))
    }
})

const btn = document.querySelector('.btn-success')
btn.addEventListener('click' , e =>{
    e.preventDefault();
    



    const newInput = localStorage.getItem('namesOne')
    console.log(newInput);
    if(newInput === ''){
        alert('Поля не должны быть пустыми')
    }else if(newInput !== ''){
        window.open('win.html' , '_self')
        localStorage.setItem('namesOne', JSON.stringify(newInput))
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