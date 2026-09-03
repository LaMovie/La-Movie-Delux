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
    divElement.addEventListener('click', () => {
        // 1. Busca el enlace (etiqueta <a>) dentro del div actual.
        let linkElement = divElement.querySelector('a');

        // 2. Verifica que el enlace existe y obtiene su URL (href).
        if (linkElement && linkElement.href) {
     // Guardamos la URL original
   let url = linkElement.href; 
            
     // 3. Detectamos si es un dispositivo móvil
            var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            if (isMobile) {
 // En móviles, va a la URL normal adquirida
     window.location.href = `PLAY.html?titulo=${encodeURIComponent(tituloLimpio)}&url=${encodeURIComponent(ENLACE)}`;
            } else {
     url = url.replace('latino.solo-latino', 'h5.swplayer'); 
   window.location.href = url;
            }
        }
    });
});




        <!-- SWPLAYER -->
   
    // Detectar dispositivo
var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Restablecer reproductor en PC al cargar
window.addEventListener('DOMContentLoaded', () => {
    if (!isMobile && typeof Video !== 'undefined') {
        Video.src = "";
    }
});

// INTERCEPTOR GLOBAL INTELIGENTE (Solo actúa si es un enlace de reproducción en PC)
document.addEventListener('click', (event) => {
    if (isMobile) return;

    let anchor = event.target.closest('a');
    if (!anchor) return;

    // Ignorar enlaces especiales, descargas, menús o elementos con eventos propios
    if (
        anchor.classList.contains('Down') || 
        anchor.classList.contains('Not') || 
        anchor.classList.contains('Head') ||
        anchor.closest('#Menu') ||
        anchor.getAttribute('href')?.startsWith('go:')
    ) {
        return; // Deja que sus propios manejadores procesen la acción
    }

    let rawUrl = anchor.getAttribute('href') || anchor.href;

    // Solo transformar si contiene el dominio objetivo
    if (rawUrl && rawUrl.includes('latino.solo-latino')) {
        event.preventDefault();
        event.stopPropagation();
        var transformedURL = rawUrl.replace('latino.solo-latino', 'h5.swplayer');
        window.location.href = transformedURL;
    }
}, true); // UseCapture en true para evaluar antes de que interfieran otros scripts

// Manejo de clicks en .Div (Slider)
Div.forEach(divElement => {
    divElement.addEventListener('click', (e) => {
        let linkElement = divElement.querySelector('a');
        if (linkElement && linkElement.href) {
            e.preventDefault();
            let url = linkElement.href;
            if (!isMobile && url.includes('latino.solo-latino')) {
                url = url.replace('latino.solo-latino', 'h5.swplayer');
            }
            window.location.href = url;
        }
    });
});

// Enlaces con retardo visual en tarjetas
ENLACE.forEach(item => { 
    item.addEventListener('click', (event) => {
        var URL = item.href;
        // Si es un enlace normal de película en PC, no aplicar setTimeout para no colisionar
        if (!isMobile && URL.includes('latino.solo-latino')) return;

        event.preventDefault();
        setTimeout(() => {
            window.location.href = URL;
        }, 300); // Reducido a 300ms para mejor respuesta
    });
});

        


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







