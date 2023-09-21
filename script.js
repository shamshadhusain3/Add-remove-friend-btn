let btn = document.querySelector('#add');
// let remove = document.querySelector('#remove');
let check =0

let istatus=document.querySelector('h5')

btn.addEventListener('click',function(e) {
    if (check==0) {
        istatus.innerText = 'Friend'
    istatus.style.color='green'
    btn.innerText='Remove'
    btn.style.backgroundColor='red'
     

    // add.style.display='none'btn
    check=1
    }else{
        istatus.innerText = 'Stranger'
    istatus.style.color='red'
    btn.innerText='Add Friend'
    btn.style.backgroundColor='cornflowerblue'

    check=0
    
    // add.style.display='inline-block'
    }
})

remove.addEventListener('click',function(e) {
    istatus.innerText = 'Strangers'
    istatus.style.color='red'
    add.style.display='inline-block'


})
