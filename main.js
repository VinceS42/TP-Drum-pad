// // On va chercher ici a récpérer toutes mes touches du clavier et les lier a notre HTML //



// let A = document.querySelector('[data-key="65"]');
// let Z = document.querySelector('[data-key="90"]');
// let E = document.querySelector('[data-key="69"]');
// let Q = document.querySelector('[data-key="81"]');
// let S = document.querySelector('[data-key="83"]');
// let D = document.querySelector('[data-key="68"]');
// let W = document.querySelector('[data-key="87"]');
// let X = document.querySelector('[data-key="88"]');
// let C = document.querySelector('[data-key="67"]');



// // ICI a récpérer toutes les sons lié a chacunes des touches //


// let audio_A = document.querySelector('audio[data-key="65"]')
// let audio_Z = document.querySelector('audio[data-key="90"]')
// let audio_E = document.querySelector('audio[data-key="69"]')
// let audio_Q = document.querySelector('audio[data-key="81"]')
// let audio_S = document.querySelector('audio[data-key="83"]')
// let audio_D = document.querySelector('audio[data-key="68"]')
// let audio_W = document.querySelector('audio[data-key="87"]')
// let audio_X = document.querySelector('audio[data-key="88"]')
// let audio_C = document.querySelector('audio[data-key="67"]')

// console.log(audio_A)



// function playSound(event) {
//     console.log(event);
//     if (event.keyCode === 65) {
//         keyCode.classList.add('playing');
//         A.querySelector('.sound').classList.add('playing');
//         audio_A.currentTime = 0;
//         audio_A.play();
//     } else if
//         (event.keyCode === 90) {
//         Z.classList.add('playing');
//         Z.querySelector('.sound').classList.add('playing');
//         audio_Z.currentTime = 0;
//         audio_Z.play()
//     } else if
//         (event.key === 'e' || event.key === 'E') {
//         E.classList.add('playing');
//         E.querySelector('.sound').classList.add('playing');
//         audio_E.currentTime = 0;
//         audio_E.play()
//     } else if
//         (event.key === 'q' || event.key === 'Q') {
//         Q.classList.add('playing');
//         Q.querySelector('.sound').classList.add('playing');
//         audio_Q.currentTime = 0;
//         audio_Q.play()
//     } else if
//         (event.key === 's' || event.key === 'S') {
//         S.classList.add('playing');
//         S.querySelector('.sound').classList.add('playing');
//         audio_S.currentTime = 0;
//         audio_S.play()
//     } else if
//         (event.key === 'd' || event.key === 'D') {
//         D.classList.add('playing');
//         D.querySelector('.sound').classList.add('playing');
//         audio_D.currentTime = 0;
//         audio_D.play()
//     } else if
//         (event.key === 'w' || event.key === 'W') {
//         W.classList.add('playing');
//         W.querySelector('.sound').classList.add('playing');
//         audio_W.currentTime = 0;
//         audio_W.play()
//     } else if
//         (event.key === 'x' || event.key === 'X') {
//         X.classList.add('playing');
//         X.querySelector('.sound').classList.add('playing');
//         audio_X.currentTime = 0;
//         audio_X.play()
//     } else if
//         (event.key === 'c' || event.key === 'C') {
//         C.classList.add('playing');
//         C.querySelector('.sound').classList.add('playing');
//         audio_C.currentTime = 0;
//         audio_C.play()


//     }
// }

// function removePlayingClass(event) {
//     if (event.key === 'a' || event.key === 'A') {
//         A.classList.remove('playing');
//         A.querySelector('.sound').classList.remove('playing');
//     } else if (event.key === 'z' || event.key === 'Z') {
//         Z.classList.remove('playing');
//         Z.querySelector('.sound').classList.remove('playing');
//     } else if (event.key === 'e' || event.key === 'E') {
//         E.classList.remove('playing');
//         E.querySelector('.sound').classList.remove('playing');
//     } else if (event.key === 'q' || event.key === 'Q') {
//         Q.classList.remove('playing');
//         Q.querySelector('.sound').classList.remove('playing');
//     } else if (event.key === 's' || event.key === 'S') {
//         S.classList.remove('playing');
//         S.querySelector('.sound').classList.remove('playing');
//     } else if (event.key === 'd' || event.key === 'D') {
//         D.classList.remove('playing');
//         D.querySelector('.sound').classList.remove('playing');
//     } else if (event.key === 'w' || event.key === 'W') {
//         W.classList.remove('playing');
//         W.querySelector('.sound').classList.remove('playing');
//     } else if (event.key === 'x' || event.key === 'X') {
//         X.classList.remove('playing');
//         X.querySelector('.sound').classList.remove('playing');
//     } else if (event.key === 'c' || event.key === 'C') {
//         C.classList.remove('playing');
//         C.querySelector('.sound').classList.remove('playing');
//     }
// }



// document.addEventListener('keydown', playSound);
// document.addEventListener('keyup', removePlayingClass);







// recherche d'optimisation du code //


function playSound(event) {
    X = event.keyCode;
    let key = document.querySelector('.key[data-key="' + X + '"]');
    if (key)
    {
    console.log(key);
    let sound = document.querySelector('audio[data-key="' + X + '"]');
    sound.currentTime = 0;
    sound.play(); 
    key.classList.add('playing');
}
}

function removeTransi (event) {
    X = event.keyCode;
    let key = document.querySelector('.key[data-key="' + X + '"]');
    if (key)
    {
    key.classList.remove('playing');
}
}

document.addEventListener('keydown', playSound);
document.addEventListener('keyup', removeTransi);