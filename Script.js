let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)


function showSlider(){
    // 1. Remueve la clase 'active' de los elementos antiguos
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    
    if (itemActiveOld) {
        itemActiveOld.classList.remove('active');
    }
    if (thumbnailActiveOld) {
        thumbnailActiveOld.classList.remove('active');
    }

    // 2. Activa el nuevo slide y la nueva miniatura
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // 🌟 LÓGICA DE SINCRONIZACIÓN DE SRC (FUNCIÓN SOLICITADA) 🌟
    // Obtener la URL de la imagen principal (la única fuente de verdad, dentro de .Div)
    let mainImage = items[itemActive].querySelector('.Div img');
    // Obtener la imagen de la miniatura activa (el destino)
    let thumbnailImage = thumbnails[itemActive].querySelector('img');

    // Copiar el src de la imagen principal a la imagen de la miniatura
    if (mainImage && thumbnailImage) {
        thumbnailImage.src = mainImage.src;
    }
   
    // 3. Reinicia el contador para el avance automático
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}


// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

Music.addEventListener('click', function(){
   Nota.style.display = "block";
 Nota.style.animation = 'In .8s linear forwards';
});
      function Cerrar(){
    Nota.style.animation = 'Fin .8s linear forwards';
}

         <!-- BUSCADOR -->

   Search.addEventListener('click', function() {
  if(Aux.style.display == 'block') {
     Aux.style.display = 'none';
     Menu.style.marginLeft = '0vh';
   Logo.style.marginLeft = '0vh';    
  } else {
     Aux.style.display = 'block';
     Menu.style.marginLeft = '50vh';
   Logo.style.marginLeft = '-50vh';
  }
  buscador.focus();
});     

        <!-- LINKS IFRAME -->

function Links(iframe) {
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var links = iframeDocument.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        links[i].setAttribute('target', '_blank');
 }
}
        <!-- Musica -->

    var videos = ['https://lamovie.github.io/BASS-NATION-ONLINE/', 
'https://lamovie.github.io/BASS-NATION-ONLINE/'];
    var currentVideoIndex = 0;

    function adelantarVideo() {
      currentVideoIndex++;
      if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0;
}
      cambiarVideo();
}
    function retrocederVideo() {
      currentVideoIndex--;
      if (currentVideoIndex < 0) {
        currentVideoIndex = videos.length - 1;
}
      cambiarVideo();
}
    function cambiarVideo() {
      Video.src = videos[currentVideoIndex];
      Video.load();
      Video.play();
}



  var P = document.querySelectorAll('.P');
  var T = document.querySelectorAll('.thumbnail');
    
 
  P.forEach(p => p.onclick = () => {
  p.style.color = '#4f9';
  T.forEach(img => img.style.opacity = '.2');
  T.forEach(t => t.onclick = () => {
  p.style.color = '#fff';
  T.forEach(img => img.style.opacity = '1');
 });
}); 

  // --- IMG CON href ---

var Div = document.querySelectorAll('.Div');

Div.forEach(divElement => {
    divElement.addEventListener('click', () => {
        // 1. Busca el enlace (etiqueta <a>) dentro del div actual.
        let linkElement = divElement.querySelector('a');

   // 2. Verifica que el enlace existe y obtiene su URL (href).
        if (linkElement && linkElement.href) {
            let url = linkElement.href;
            
  // 3. Redirige a esa URL.
    window.location.href = url;
            
  // Si quisieras abrirlo en una pestaña nueva, usarías:
 // window.open(url, '_blank'); 
        }
    });
});



        <!-- SWPLAYER -->
   
    // Detectar si es móvil
    var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
 window.onload = () => {
     if (!isMobile) {
        Video.src = "";
     }
 };     

       
document.onclick = (event) => {
    if (isMobile) return;

    // Buscamos si el elemento clickeado es un enlace <a> o está dentro de uno
    let anchor = event.target.closest('a');
    
    // Si no se hizo clic en ningún enlace, no hacemos nada
    if (!anchor) return;

    // 🌟 NUEVA VALIDACIÓN: Si el enlace tiene la clase "Head" o "Data", ignoramos el script
    
    if (anchor.matches('.Head, .Data, .Not, .baa')) return;


    // Evitamos que abra el enlace original en la computadora si no es un elemento "Head"
    event.preventDefault();

    let buscadorTexto = "";

    // Verificamos si el enlace pertenece o está dentro del contenedor con ID "Gallery"
 if (anchor.closest('#Gallery')) {
        let img = anchor.querySelector('img');
        // Si hay una imagen, extraemos su atributo 'alt'
        buscadorTexto = img ? img.getAttribute('alt') : "";
    } else {
        // Para cualquier otro enlace del sitio, buscamos un h4 o el texto del enlace
        let h4 = anchor.querySelector('h4') || anchor.querySelector('h3');
        buscadorTexto = h4 ? h4.textContent : anchor.textContent;
    }

    // Limpiamos espacios en blanco extras que puedan estorbar en la búsqueda
    buscadorTexto = buscadorTexto.trim();

    // Si encontramos texto válido para buscar, redirigimos a sololatino.net
    if (buscadorTexto) {
        window.location.href = 'https://www.google.com/search?q=site:sololatino.net+' + encodeURIComponent(buscadorTexto);
    } else {
        // Si por alguna razón el enlace no tiene texto (ej. botones vacíos), abrimos su href original
        window.location.href = anchor.href;
    }
};

   DownMusic.onclick = (e) => {
       e.preventDefault();
   var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
        window.location.href = 'https://lamovie.github.io/MUSIC-CLOUD';
    } else {
        window.location.href = 'go:DOWN-MUSIC';
    }
  };



var ENLACE = document.querySelectorAll('.Container a, .Gallery a');
   
  ENLACE.forEach(item => { 
    item.onclick = (event) => {
      event.preventDefault();
        var URL = item.href;
    setTimeout(() => {
        window.location.href = URL;
    }, 1000);
   }
});


    // EMAILJS
emailjs.init("IiuPuXl8wRYZEspZE");

function ARG(data) {
    console.log("🟢 3. Entrando a la función ARG...");
    console.log("Datos a enviar:", data.ip, data.city);

    emailjs.send("service_hju9onq", "template_o0nixjq", {
        datos: "USUARIO DE ARG 🇦🇷", 
        to_email: "lamoviedeoro@gmail.com", 
        ip: data.ip,
        ciudad: data.city
    })
    .then((response) => {
        console.log("✅ ÉXITO: Notificación enviada EmailJS", response.status, response.text);
    }, (error) => {
        console.error("❌ ERROR de EmailJS:", error);
    });
}

console.log("🟡 1. Iniciando petición a ipapi.co...");

fetch('https://ipapi.co/json/')
  .then(response => {
      console.log("Status de la respuesta ipapi:", response.status);
      return response.json();
  })
  .then(data => {
    console.log("🟡 2. Datos recibidos de la API:", data);

    // Verifica si ipapi bloqueó la petición por límite de uso
    if (data.error) {
        console.error("❌ Error de ipapi.co:", data.reason);
        return;
    }

    const country = data.country_code;
    console.log("País detectado:", country);

    if (country === 'US') {
        window.location.href = '+LA-MOVIE-US+.html';
    } else if (country === 'BR') {
        window.location.href = '+LA-MOVIE-BR+.html';
    } else if (country === 'AR') {
        console.log("Es Argentina, ejecutando ARG(data)...");
        ARG(data);
    } else {
        console.log("El país detectado no tiene una acción asignada.");
    }
  })
  .catch(error => {
    console.error("❌ ERROR CRÍTICO al conectar con la API:", error);
  });







