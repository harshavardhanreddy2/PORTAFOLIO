function  toggleSend() {
    const send1 = document.querySelector('.sent');

    if (send1.textContent === 'send') {
        send1.textContent = 'sent';
        send1.classList.add('is-send');
    } else {
        send1.textContent = 'send';
        send1.classList.remove('is-send');
    }
}
