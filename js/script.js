const button = document.querySelector('.btn')

button.addEventListener('click' , e =>{
    e.preventDefault();

    const askPeople = +prompt('How you are wanna add people?')


    

    if(askPeople > 2){
        window.open('second.html' , '_self')
        localStorage.setItem('okno','true')
        localStorage.setItem('people' , askPeople)
    }else if(askPeople <= 2){
        alert('Нужна больше чем 2 участников!')
    }else{
        localStorage.setItem('okno', 'false')
    }
})


window.addEventListener('load' , () =>{
    const okno = localStorage.getItem('okno');
    if(!okno){
        return   
    }else if(okno === 'true'){
        window.open('index.html','_self')
    }
})
