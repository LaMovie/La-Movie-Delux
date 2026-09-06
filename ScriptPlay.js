  // SCROLL
setTimeout(() => {
    var destino = document.querySelector('.dato');
    if (destino) {
        var posicionY = destino.getBoundingClientRect().top + window.scrollY;
 
  // 1. Baja suavemente hacia .dato
        window.scroll({
            top: posicionY - 20, 
            behavior: 'smooth'
   });

        setTimeout(() => {
            window.scroll({
                top: 0, 
                behavior: 'smooth'
            });
       }, 600); 
    }
}, 800);



      // Detectar cuando entra o sale de fullscreen 
document.addEventListener('fullscreenchange', function() {
  if (document.fullscreenElement) {
    // Si estamos en pantalla completa, bloquear orientación horizontal 
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape');
    }
  } else {
    // Si salimos de pantalla completa, volver a orientación vertical
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('portrait');
    }
  }
});

  X.style.animation = 'X 2.5s linear 18s forwards running'; 


     window.onload = () => {
     if (window.innerWidth > window.innerHeight) {
    X.style.marginLeft = '100vh';
  } else {
    X.style.marginLeft = '0vh';
  }
 }



        // ⚠️ ATENCIÓN
const API_KEY = "2c0b94c5ec729e2cc59b8be6ad7b2159"; 

    var params = new URLSearchParams(window.location.search);
     var TITULO = params.get('titulo'); 
     var URL_PARAM = params.get('url'); 

window.addEventListener('DOMContentLoaded', () => {
    // A. Mostrar Título y cargar TMDB inmediatamente
    if (TITULO) {
         let tituloLimpio = TITULO.replace(/🍿|🌐|📺|⚙️|🧋/g, '').trim();
        let ElementoT = document.getElementById('T');
        if (ElementoT) ElementoT.textContent = TITULO;
        
        cargarTMDB(tituloLimpio); 
    }

       
    (function(){const _0x1a=['aHR0cHM6Ly9sYW1vdmllLmdpdGh1Yi5pby9CdXNjYWRvci9CdXNjYWRvci5qcw==','aHR0cHM6Ly9sYW1vdmllLmdpdGh1Yi5pby9CdXNjYWRvci9CdXNjYWRvcjIuanM=','aHR0cHM6Ly9sYW1vdmllLmdpdGh1Yi5pby9CdXNjYWRvci9CdXNjYWRvcjMuanM='],_0x2b=_0x1a.map(x=>atob(x));let _0x3c=0;_0x2b.forEach(_0x4d=>{const _0x5e=document.createElement(atob('c2NyaXB0'));_0x5e.src=_0x4d;_0x5e.onload=()=>{_0x3c++;if(_0x3c===_0x2b.length){if(typeof construirLista===atob('ZnVuY3Rpb24='))construirLista();if(URL_PARAM){document.getElementById('I').src=formatearEnlace(URL_PARAM);}else{reproducirDesdeDB(TITULO);}}};document.head.appendChild(_0x5e);});})();

});

// FUNCIÓN PARA BUSCAR Y REPRODUCIR (PELÍCULA O SERIE)
function reproducirDesdeDB(tituloABuscar) {
    if (!tituloABuscar) return;

    let DB_COMPLETA = [];
    if (typeof Lista1 !== 'undefined') DB_COMPLETA.push(...Lista1);
    if (typeof Lista2 !== 'undefined') DB_COMPLETA.push(...Lista2);
    if (typeof Lista3 !== 'undefined') DB_COMPLETA.push(...Lista3);

    // ESTO FALTABA: Normalizar para que "Película 🍿" sea igual a "pelicula"
    function normalizarTexto(texto) {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/🍿|🌐|📺|⚙️|🧋/g, '').trim().toLowerCase();
    }

    let nombreBusqueda = normalizarTexto(tituloABuscar);

    let itemEncontrado = DB_COMPLETA.find(item => {
        let nombreDB = normalizarTexto(item.NAME || item.name || "");
        return nombreDB === nombreBusqueda;
    });

    let Iframe = document.getElementById('I');
    let Caja = document.getElementById('Caja');

    if (!itemEncontrado) {
        console.warn("No se encontró el título exacto en la base de datos local.");
        return;
    }

    let urlExtraida = itemEncontrado.URL || itemEncontrado.url || "";

    
    // 📎 MANEJO DE CAPÍTULOS O PELÍCULA
    if (itemEncontrado.CAPS && itemEncontrado.CAPS.length > 0) {
        Caja.innerHTML = ''; 
        let botones = [];

        itemEncontrado.CAPS.forEach((capitulo, index) => {
            let boton = document.createElement('a');
            boton.textContent = capitulo.cap;
            boton.className = 'Btn';

            boton.onclick = () => {
                Iframe.src = formatearEnlace(capitulo.link);
                botones.forEach(b => {
                    b.style.background = 'blue';
                    b.style.color = 'white';
                    b.style.boxShadow = 'none';
                });
                boton.style.background = '#4f9';
                boton.style.color = '#000';
                boton.style.boxShadow = '0 0 10px rgba(68, 255, 153, 0.8)';
            };

            Caja.appendChild(boton);
            botones.push(boton);

            // Auto-reproducir capítulo 1
            if (index === 0) boton.onclick(); 
        });
    } else {
        Caja.innerHTML = '';
        Iframe.src = formatearEnlace(urlExtraida);
    }
}

// FUNCIÓN PARA FORMATEAR ENLACES (Mantiene tu lógica de PC intacta)
function formatearEnlace(enlace) {
    if (!enlace) return "";
    
    var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
  
    // 💻 MODO PC
    if (!isMobile && enlace.includes('latino.solo-latino')) {
        enlace = enlace.replace('latino.solo-latino', 'h5.swplayer');
    }

    if (enlace.includes('file')) {
        let audio = document.getElementById('AA');
        if (audio) audio.play().catch(e => console.log("Audio bloqueado", e));
        return enlace.split('view')[0] + 'preview';
    }
    if (enlace.includes('www.dropbox.com')) {
        return enlace.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
    }
    return enlace;
}


     // 📜 TMDB API
async function cargarTMDB(N) {
    var Aux = document.getElementById("Aux");
    try {
        var searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&query=" + encodeURIComponent(N) + "&language=es-ES";
        var response = await fetch(searchUrl);
        var data = await response.json();

        if (data.results && data.results.length > 0) {
            var peli = data.results[0]; 
            var movieId = peli.id;
            var detailUrl = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + API_KEY + "&language=es-ES&append_to_response=credits,videos&include_video_language=es,en";
            var detailRes = await fetch(detailUrl);
            var detailData = await detailRes.json();

            var titulo = detailData.title;
            var año = detailData.release_date ? detailData.release_date.split('-')[0] : "N/A";
            var sinopsis = detailData.overview || "No hay sinopsis disponible.";
            var genero = detailData.genres && detailData.genres.length > 0 ? detailData.genres.map(g => g.name).join(", ") : "Desconocido";
            var directorObj = detailData.credits.crew.find(miembro => miembro.job === "Director");
            var director = directorObj ? directorObj.name : "Desconocido";
            var poster = detailData.poster_path ? "https://image.tmdb.org/t/p/w500" + detailData.poster_path : "";

            var trailer = detailData.videos && detailData.videos.results ? detailData.videos.results.find(v => v.type === "Trailer" && v.site === "YouTube") : null;
            var trailerKey = trailer ? trailer.key : null;

            var botonTrailerHTML = trailerKey ? `<button class="btn-trailer" style="padding: 3px 10px; font-size: 11px; margin: 0 0 0 10px; box-shadow: none;" onclick="abrirTrailer('${trailerKey}')">▶Tráiler</button>` : '';

            Aux.innerHTML = `
              <div class="result-section">
                <img src="${poster}" alt="${titulo}" style="width: 23%; height: 13vh; border-radius: 12px; margin-right: 15px; margin-bottom: 5px;">
                <div class="result-title" style="font-size: 1.1rem; font-weight: bold; margin-bottom: 5px;">${titulo} (${año})</div>
                <p style="margin: 5px 0; font-size: 0.95rem;"><strong>🎬 Género:</strong> ${genero}</p>
                <p style="margin: 5px 0; font-size: 0.95rem; display: flex; align-items: center;"><strong>🎥 Director:</strong> ${director} ${botonTrailerHTML}</p><br/>
                <div id="S" style="margin-top: 10px;">
                    <p style="margin: 0;"><strong>📝 Sinopsis:</strong> ${sinopsis}</p>
                </div>
              </div>
            `;
        }
    } catch (error) {
        console.error("Error API TMDb:", error);      
    }
}

window.abrirTrailer = function(youtubeKey) {
    var modal = document.getElementById("trailerModal");
    var contenedorVideo = document.querySelector(".video-container");
    contenedorVideo.innerHTML = `<iframe id="iframeTrailer" src="https://www.yout-ube.com/embed/${youtubeKey}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    modal.style.display = "block";
};

window.cerrarTrailer = function() {
    var modal = document.getElementById("trailerModal");
    var contenedorVideo = document.querySelector(".video-container");
    modal.style.display = "none";
    contenedorVideo.innerHTML = ""; 
};
    


      //  CARGAR DATOS LOCAL 

  function cargarSugerencias() {
    const contenedor = document.getElementById('Sugerencias');
    if (!contenedor) return;

    // 2. Mezclar el array aleatoriamente
    let mezcladas = [...baseDePeliculas].sort(() => 0.5 - Math.random());
    
    var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
   let seleccionadas; 
    
    if (!isMobile) {
         seleccionadas = mezcladas.slice(0, 5);
    } else {
         seleccionadas = mezcladas.slice(0, 6);
    } 

    // AQUÍ SE APLICAN LOS SPANS PARA LA ANIMACIÓN DE SALTOS
    let html = '<h3 class="sug-titulo">🧋 <span class="salto-1">TE</span> <span class="salto-2">PODRÍA</span> <span class="salto-3">INTERESAR</span> 🧋</h3><div class="sug-wrapper">';

    seleccionadas.forEach(peli => {
        let tituloCodificado = encodeURIComponent(peli.titulo);
        let urlCodificada = encodeURIComponent(peli.url);
        
        
        let accionClick = "";

        if (isMobile) {
            if (peli.esDrive) {
                accionClick = `onclick="window.location.href='?titulo=${tituloCodificado}'"`;
            } else {
                accionClick = `onclick="window.location.href='${peli.url}'"`;           
            }
        } else { 
            if (!peli.esDrive) {
  var ENLACE = peli.url.replace('latino.solo-latino', 'h5.swplayer');          
                accionClick = `onclick="window.location.href='${ENLACE}'"`;
            } else {
               accionClick = `onclick="window.location.href='?titulo=${tituloCodificado}'"`;
            }
        }

        html += `
        <div class="sug-item" ${accionClick}>
            <img src="${peli.img}" alt="${peli.titulo}">
            <h4>${peli.titulo}</h4>
        </div>`;
    }); 

    html += '</div>';


    contenedor.innerHTML = html;
}

// Ejecutar cuando el reproductor termine de cargar
document.addEventListener('DOMContentLoaded', cargarSugerencias);



     // ABRIR Y CERRAR MODAL
function abrirModalReporte() {
    let tituloActual = "Título no identificado";
    const elementoTitulo = document.querySelector('#T');
    
    if (elementoTitulo && elementoTitulo.innerText.trim() !== "") {
        tituloActual = elementoTitulo.innerText.trim();
       } else {
  tituloActual = document.title;
    }

    document.getElementById('titulo-reproduciendo').innerText = tituloActual;
    document.getElementById('modal-reporte').style.display = 'flex';
}

function cerrarModalReporte() {
    document.getElementById('modal-reporte').style.display = 'none';
    // Limpiar campos
    document.getElementById('motivo-reporte').value = "Enlace Caído";
    document.getElementById('pelicula-buscada').value = "";
    document.getElementById('grupo-buscada').style.display = 'none';
}

// MOSTRAR/OCULTAR CAMPO SI ES "Película No Encontrada"
function evaluarMotivo(valor) {
    const grupoBuscada = document.getElementById('grupo-buscada');
    if (valor === "Película No Encontrada") {
        grupoBuscada.style.display = 'block';
        document.getElementById('pelicula-buscada').focus();
    } else {
        grupoBuscada.style.display = 'none';
    }
}

   // ENVIAR REPORTE A FORMSUBMIT
function enviarReporte() {
    const titulo = document.getElementById('titulo-reproduciendo').innerText;
    const motivo = document.getElementById('motivo-reporte').value;
    const peliculaBuscada = document.getElementById('pelicula-buscada').value.trim();

    // Validación si eligió "Película No Encontrada" pero no escribió cuál
    if (motivo === "Película No Encontrada" && peliculaBuscada === "") {
        alert("Por favor, escribe el nombre de la película que estabas buscando.");
        document.getElementById('pelicula-buscada').focus();
        return;
    }

    const btnEnviar = document.getElementById('btn-enviar-reporte');
    const textoOriginal = btnEnviar.innerText;
    btnEnviar.innerText = "Enviando... ⏳";
    btnEnviar.disabled = true;

    // Construir los datos para el correo
    const datosEnvio = {
        _subject: `🚩 Reporte de Fallo: ${motivo} - ${titulo}`,
        "Película Afectada": titulo,
        "Motivo del Reporte": motivo
    };

    if (motivo === "Película No Encontrada") {
        datosEnvio["Película que buscaba el usuario"] = peliculaBuscada;
    }

        
    
     // ENVÍO SILENCIOSO MEDIANTE FORMSUBMIT CON EXCEPCIÓN DE SEGURIDAD
    fetch("https://formsubmit.co/ajax/lamoviedeoro@gmail.com", {
        method: "POST",
        referrerPolicy: "strict-origin-when-cross-origin", 
  // <--- ESTA ES LA LÍNEA MÁGICA
  
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(datosEnvio)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success === "true" || data.success === true) {
            Swal.fire({
    title: '📜"¡Muchas Gracias! Tu Reporte Ha Sido Enviado Con Éxito."📜',  
    icon: 'info'
 });   
            cerrarModalReporte();
        } else {
            alert("🛠️...🛠️");
        }
    })
    .catch(error => {
        alert("Error de conexión. Revisa tu internet o intenta más tarde.");
        console.error(error);
    })
    .finally(() => {
        btnEnviar.innerText = textoOriginal;
        btnEnviar.disabled = false;
    });
}


       // BUSCADOR 🔍
  var PELI  = ['file', 'movie', 'vidyard.com', 'dropbox', 'gallery=open', '.mp4'];
var SERIE = ['folders', 'drama', 'publicfoldergrid'];

function construirLista() {
    var PELIS = [...Lista1, ...Lista2, ...Lista3]; 
    var lista = document.getElementById("Lista");

    PELIS.forEach(item => {
        var li = document.createElement("li");
        var a = document.createElement("a");
        
        var url = (item.URL || item.url || '');
        var name = item.NAME || item.name || '';
        var nombreMin = name.toLowerCase();

        var tipo = 'Película'; 

        if (nombreMin.includes('tv')) {
            tipo = 'TV';
        } else if (name.includes('🧋') || SERIE.some(keyword => url.includes(keyword))) {
            tipo = 'Serie';
        } else if (nombreMin.includes('🌐')) {
            tipo = 'Copy';
        } else if (url.includes('pelisflix')) {
            tipo = 'Aux';
        }

 // OCULTAMOS LA URL REAL DEL HREF
        a.href = "javascript:void(0);"; 
        
        // PASAMOS LAS VARIABLES AL DOM PARA LEERLAS DESPUÉS
        a.dataset.tipo = tipo;
        a.dataset.url = url;

        a.innerHTML = `<span class="titulo-txt">${name}</span> <span style="font-size: 11px; color: #f19; font-weight: normal; margin-left: 8px;"><br/>(${tipo})</span>`;
        a.classList.add("Data");

        li.appendChild(a);
        lista.appendChild(li);
    });
}


document.addEventListener("keyup", e => {
    function Tildes(texto, preservarÑ = false) {
        let limpio = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        if (!preservarÑ) {
            limpio = limpio.replace(/ñ/g, "n");
        }
        return limpio;
    };

    var In = e.target.value.toLowerCase().trim();
    var incluyeÑ = In.includes("ñ");
    var Data = document.querySelectorAll(".Data");
    let foundMatch = false;
    var Input = Tildes(In.replace(/\s+/g, ' '), incluyeÑ);

    if (e.target.matches("#buscador")) {
        Lista.style.display = Input === '' ? "none" : "block";

        Data.forEach(item => {
            let elTitulo = item.querySelector(".titulo-txt") ? item.querySelector(".titulo-txt").textContent : item.textContent;
            let itemText = Tildes(elTitulo.toLowerCase().trim(), incluyeÑ);

            if (itemText.includes(Input)) {
                item.classList.remove("filtro");
                foundMatch = true;
            } else {
                item.classList.add("filtro");
            }
        });

        No.style.display = foundMatch ? "none" : "block";
    }
});

// FUNCIÓN CENTRALIZADA PARA PROCESAR ENLACES
function procesarEnlace(matchedItem) {
    if (!matchedItem) return;

    var spanTitulo = matchedItem.querySelector(".titulo-txt");
    var NN = spanTitulo ? spanTitulo.textContent : matchedItem.textContent;
    var tituloLimpio = NN.replace(/🍿|🌐|📺|⚙️|🧋/g, '').trim();
    
    var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    var EXE = ['movie', 'pcloud', 'share.vidyard'];
    
    // RECUPERAMOS EL 'tipo' Y 'url' OCULTOS EN EL ELEMENTO
    var tipo = matchedItem.dataset.tipo;
    var url = matchedItem.dataset.url;

    // REDIRECCIÓN SIMPLIFICADA BASADA EN EL TIPO
    if (tipo === 'Copy') {
        window.location.href = `${url}?texto=${tituloLimpio}`;
  } else if (tipo === 'Película' && !EXE.some(s => url.includes(s))) { 
        window.location.href = `?titulo=${encodeURIComponent(tituloLimpio)}`;
    } else if (tipo === 'Aux') {
        window.location.href = `?titulo=${encodeURIComponent(NN)}`;
    } else if (NN.includes('🧋')) {
        window.location.href = `?titulo=${encodeURIComponent(NN)}`;
    } else if (NN.includes('Tv')) {
        window.location.href = `?titulo=${encodeURIComponent(NN)}`;
    } else {
        if (isMobile) {
      window.location.href = url;
        } else {
   window.location.href = url.replace('latino.solo-latino', 'h5.swplayer');
        }
    }
    
    var buscadorInput = document.getElementById("buscador");
    if (buscadorInput) {
        buscadorInput.value = '';
    }
}


// NUEVA FUNCIÓN PARA EJECUTAR LA BÚSQUEDA (COMPARTIDA POR ENTER Y LUPA)
function ejecutarBusqueda(valorInput) {
    var In = valorInput.toLowerCase().trim();
    if (In === "") return;

    function Tildes(texto, preservarÑ = false) {
        let limpio = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        if (!preservarÑ) {
            limpio = limpio.replace(/ñ/g, "n");
        }
        return limpio;
    }

    var incluyeÑ = In.includes("ñ");
    var InputLimpiado = Tildes(In.replace(/\s+/g, ' '), incluyeÑ);
    var matchedItem = null;
    var elementosData = document.querySelectorAll(".Data");

    for (var i = 0; i < elementosData.length; i++) {
        // Corrección: Leer solo el span con la clase .titulo-txt para que el match sea exacto
        var spanTitulo = elementosData[i].querySelector(".titulo-txt");
        var textoCrudo = spanTitulo ? spanTitulo.textContent : elementosData[i].textContent;

        var textoSinEmojis = textoCrudo.replace(/🍿|🌐|📺|⚙️|🧋/g, '').trim();
        var textoItem = Tildes(textoSinEmojis.toLowerCase(), incluyeÑ);

        if (textoItem === InputLimpiado) { 
            matchedItem = elementosData[i].tagName.toLowerCase() === 'a' ? elementosData[i] : elementosData[i].querySelector("a") || elementosData[i];
            break; 
        }
    }

    if (matchedItem) {
        procesarEnlace(matchedItem);
    } else {
        if (typeof Check === "function") {
            Check();
        }
    }
}

// MANEJO REAL DEL ENTER 
document.addEventListener("keydown", function(event) {
    if (event.target.matches("#buscador") && event.key === "Enter") {
        event.preventDefault();
        ejecutarBusqueda(event.target.value);
    }
});

     
     // MANEJO DEL CLICK 
document.addEventListener("click", function(event) {
    var matchedItem = event.target.closest("a"); 
    
    if (matchedItem && matchedItem.classList.contains("Data")) {
        event.preventDefault();
        procesarEnlace(matchedItem);
    }
});

       function Check() {
    var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);   
    const urlDestino = `${'GOOGLE.html'}?texto=${buscador.value}`;
    var domain = isMobile ? urlDestino : 'https://www.google.com/search?q=site:sololatino.net+' + encodeURIComponent(buscador.value);
    
    window.location.href = domain;
    buscador.value = '';
}

  // MANEJO DEL CLICK EN LA LUPA (#Search)
Search.onclick = () => {
    var valorInput = buscador.value.trim();
    if (valorInput !== "") {
        // Si hay texto escrito, ejecuta la búsqueda como si se presionara "Enter"
        ejecutarBusqueda(valorInput);
    } else {
        // Si no hay texto, hace el toggle (muestra/oculta el input)
        buscador.style.display = buscador.style.display === 'block' ? 'none' : 'block';
        HH.style.display = buscador.style.display === 'block' ? 'none' : 'block';
        buscador.focus();
    }
};

    No.onclick = () => {
         Check();
}

       
          // INTENT
function abrirFuera(urlDestino) {
     var urlSinProtocolo = urlDestino.replace("https://", "");
      
      var intentURL = "intent://" + urlSinProtocolo + "#Intent;scheme=https;action=android.intent.action.VIEW;end;";
      
 window.location.href = intentURL;
}    








