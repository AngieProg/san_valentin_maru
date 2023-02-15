const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.querySelector('.final-sms');

//Fecha a futuro
const countdownDate = new Date('aug 5, 2023 14:30:00').getTime();
let interval = setInterval(function(){
    //obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //obtener diferencia de ambas fechas
    let distance = countdownDate - now; 

    //Calculo a días, horas, minutos y segundo
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60))/(1000));

    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);
    console.log(days);

    //Cuanda countdown llegue a cero
    if(distance < 0){
        clearInterval(interval);
        $finalMessage.style.transform = 'translateX(0)';
    }
},1000);

// AUTOREPRODUCTOR DE MÚSICA

const audio = document.getElementById("audio1");
const play = document.getElementById("play");


//Escuchar clicks en el botón play
play.addEventListener("click", () => {
    if (audio.paused) {
        playSong();
    }else{
        pauseSong();
    }
})

//Reproducir canción
function playSong() {
    audio.play();
    updateControls();
}

//Pausar canción
function pauseSong() {
    audio.pause();
    updateControls();
}

function updateControls() {
    if(audio.paused){
        document.getElementById("img1").src="./assets/img/sobre/music_play.png";
    }else{
        document.getElementById("img1").src="./assets/img/sobre/musica_pausa.png";
    }
}

//-----------------------CODIGO SWEETALERT2-------------------------------------------
(async() => {
    const {value: musica} = await Swal.fire({
        title: 'Con amor, para Eduardo.  ',
        html: '<b class="text-alert">¿Ingresar con sonido?</b>',
        confirmButtonText: 'abrir',
        //grow:'fullscreen', //column, roww. Pantalla completa
        background: 'black',
        backdrop: true,//obscurece la pantalla de abajo
        input: 'radio',
        inputValue: '',
        inputOptions: {
            reproducir: 'Si',
            silencio: 'No'
        },
        customClass: {
            title: 'title-alert',
            text:'text-alert',
            confirmButton:'button-alert',
            input:'input-alert'
        },
        buttonsStyling: false,
        showCloseButton: true,
        imageUrl: './assets/img/sobre/sobre_sello.png',
        imageAlt: "Sobre de invitación",
    })

     if (musica=='reproducir'){
          console.log ("La invitación comenzará con música");
          playSong();
     }else{
        console.log("Reproducción en silencio");
     }
})();

