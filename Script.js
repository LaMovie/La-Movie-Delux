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

    // 🌟 LÓGICA DE SINCRONIZACIÓN DE SRC
    let mainImage = items[itemActive].querySelector('.Div img');
    let thumbnailImage = thumbnails[itemActive].querySelector('img');

 if (mainImage && thumbnailImage) {
 mainImage.src = thumbnailImage.src;
    }
   
    // 🌟 DESPLAZAMIENTO 100% HORIZONTAL (SIN SALTO VERTICAL) 🌟
    let thumbnailContainer = document.querySelector('.thumbnail');
    let targetItem = thumbnails[itemActive];

    if (thumbnailContainer && targetItem) {
        // Calcula la posición para centrar el ítem activo en el carrusel
        let scrollPos = targetItem.offsetLeft - (thumbnailContainer.clientWidth / 2) + (targetItem.clientWidth / 2);
        
        // Mueve SOLO el scroll horizontal del contenedor, sin afectar la página
        thumbnailContainer.scrollTo({
            left: scrollPos,
            behavior: 'smooth'
        });
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
    divElement.addEventListener('click', (event) => { // 🔴 Agregar event aquí
        let linkElement = divElement.querySelector('a');

        if (linkElement && linkElement.href) {
            event.preventDefault(); // 🔴 Evita que el navegador lance el enlace original
            event.stopPropagation(); // 🔴 Evita que el document.onclick interfiera

            let url = linkElement.href; 
            var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            if (isMobile) {
      window.location.href = url;
            } else {
                url = url.replace('latino.solo-latino', 'h5.swplayer'); 
   window.location.href = url;
            }
        }
    });
});





        <!-- SWPLAYER -->
   
   // Detectar si es móvil
var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

window.onload = () => {
    if (!isMobile && typeof Video !== 'undefined') {
        Video.src = "";
    }
};     

// --- 1. MANEJO GLOBAL DE CLICS EN PC (SOLO INTERVIENE SI ES "latino.solo") ---
document.addEventListener('click', (event) => {
    if (isMobile) return;

    let anchor = event.target.closest('a');
    
    // Si el clic fue en un <div onclick="..."> u otro objeto sin <a>, se ejecuta su función nativa normalmente
    if (!anchor) return;

    // Ignorar enlaces especiales con eventos propios
    if (anchor.classList.contains('Down') || anchor.classList.contains('XTV') || anchor.classList.contains('Not')) return;

    let url = anchor.href;

    // Solo intercepta y reemplaza si el enlace va hacia latino.solo-latino
    if (url && url.includes('latino.solo-latino')) {
        event.preventDefault();
        let newUrl = url.replace('latino.solo-latino', 'h5.swplayer');
   window.location.href = newUrl;
 }
    // Si es un enlace normal (PLAY2.html, Drive, etc.), el navegador navega a su URL original sin bloqueos
});

// --- 2. MANEJO DE TARJETAS DE CONTENEDOR (.Div) ---
    var Div = document.querySelectorAll('.Div');
Div.forEach(divElement => {
    divElement.addEventListener('click', (event) => {
        let linkElement = divElement.querySelector('a');

        // Si el contenedor usa un onclick directo (ej. openMovie) y no un <a>, no interfiere
        if (!linkElement || !linkElement.href) return;

        let url = linkElement.href;
        if (!isMobile && url.includes('latino.solo-latino')) {
        event.preventDefault();
        event.stopPropagation();
        window.location.href = url.replace('latino.solo-latino', 'h5.swplayer');
        }
    });
});

// --- 3. MANEJO DE CONTENEDORES DE GALERÍA Y SECCIONES ---
    var ENLACE = document.querySelectorAll('.Container a, .Gallery a');
ENLACE.forEach(item => { 
    item.onclick = (event) => {
        var URL = item.href;
        if (!isMobile && URL && URL.includes("latino.solo-latino")) {
        event.preventDefault();
        event.stopPropagation();
            URL = URL.replace('latino.solo-latino', 'h5.swplayer');
            setTimeout(() => {
                window.location.href = URL;
            }, 300);
        }
    };
});

           

        // INTENT
function abrirFuera(urlDestino) {
     var urlSinProtocolo = urlDestino.replace("https://", "");
      
      var intentURL = "intent://" + urlSinProtocolo + "#Intent;scheme=https;action=android.intent.action.VIEW;end;";
      
 window.location.href = intentURL;
    }


       // PRECAUTION MOBILE 
 var XTV = document.querySelectorAll('#TV, .XTv');     
       
     XTV.forEach(x => {
         x.onclick = (e) => {
      e.preventDefault();   
         Swal.fire({
    title: '⚠️Usar Un Bloqueador De Anuncios⚠️', 
    html: '<a id="A" href="https://play.google.com/store/apps/details?id=com.hsv.freeadblockerbrowser" target="_blank">🔴 FreeAddBlockerBrowser 🔴</a>', 
    icon: 'info',
     confirmButtonText: 'Entrar',
     confirmButtonColor: '#3085d6',
 }).then((result) => {
        
     if (result.isConfirmed) {
         abrirFuera('https://lamovie.github.io/CONTENIDO/X-TV.html');            
        }
      });  
    }
 });







