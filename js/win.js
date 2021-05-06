const btn = document.querySelector('.btn-danger')


btn.addEventListener('click', e =>{
    e.preventDefault();

    const random = Math.floor(Math.random() * col)
    console.log(random);


})