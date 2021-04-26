const countdown = document.querySelector('.countdown')

const launch = new Date('Dec 22, 2021 11:25:00').getTime();

const intvl = setInterval(() => {
    const now = new Date().getTime();
    const distance = launch - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60 ));
    const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${min}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;

    if(distance < 0){
        clearInterval(intvl);
        countdown.getElementsByClassName.color = '#17a2b8';
        countdown.innerHTML = "Launched!";
    }
}, 1000);