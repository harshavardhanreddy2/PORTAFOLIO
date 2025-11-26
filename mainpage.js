function send(){
    const send1 = document.querySelector('.sent');

     if(send1.innerText === 'send'){
        send1.innerHTML='sented';
        send1.classList.add('is-send')
    }else{
        send1.innerHTML='send'
        send1.classList.remove('is-send')
        }        
}