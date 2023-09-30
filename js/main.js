const intialValue = 1000000;
const countText = document.getElementById('count');
const eggImg = document.getElementById('egg-img');
const tapSound = document.getElementById('tap-sound');
let count = localStorage.getItem('tapCount');
let chick = localStorage.getItem('chickCount');

if (!localStorage.getItem('tapCount')) {
    count = intialValue;
}
countText.textContent = count;
eggImg.onclick = function() {
    count--;
    localStorage.setItem('tapCount', count);

    if (count <= 0) {
        if (count == 0) {
            if (Math.floor(Math.random()*10)==1) {
                countText.textContent = 'ワレチャッタネ、ザンネン';
                this.src = 'img/hiyoko_baby.png';
                chick++
                localStorage.setItem('chickCount', chick);
                
            } else {
                countText.textContent = 'ワレルトオモウナヨ';
                this.src = 'img/cracked-egg.png';
            }
        }
        localStorage.removeItem('tapCount');
        return;
    }


    countText.textContent = count;
    tapSound.currentTime = 0;
    tapSound.play();
    this.classList.add('egg-tap');
    setTimeout(function() {
        eggImg.classList.remove('egg-tap');
    }, 200);
};
setInterval(() => {
    if (chick) {
        for (let index = 0; index < chick; index++) {
            eggImg.onclick()    
            
        }
            
    }
    
}, 600);
alert("この卵を割ってみて下さい")