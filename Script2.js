var PELI  = ['file', 'movie', 'vidyard.com', 'dropbox', 'gallery=open'];
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
        } else if (SERIE.some(keyword => url.includes(keyword))) {
            tipo = 'Serie';
        } else if (nombreMin.includes('🌐')) {
            tipo = 'Copy';
        }

        a.href = item.URL || item.url;
        // Envolvemos name en .titulo-txt para aislarlo en la búsqueda
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

    var ENLACE = matchedItem.getAttribute("href") || matchedItem.href;
    var spanTitulo = matchedItem.querySelector(".titulo-txt");
    var NN = spanTitulo ? spanTitulo.textContent : matchedItem.textContent; // Toma solo el nombre, sin (Película)
    
    var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var tituloLimpio = NN.replace(/🍿|🌐|📺|⚙️/g, '').trim();

    var CADENA = ['google.com/file', 'www.dropbox.com', 'play.vidyard', 'okpeliz.com'];
    
    if (CADENA.some(dominio => ENLACE.includes(dominio))) {
        window.location.href = `PLAY.html?titulo=${encodeURIComponent(tituloLimpio)}&url=${encodeURIComponent(ENLACE)}`;
    } else {
        if (!isMobile && ENLACE.includes("latino.solo")) {
            window.location.href = "https://sololatino.net/buscar?q=" + encodeURIComponent(tituloLimpio);
        } else if (NN.includes('🌐')) {
            window.location.href = `${ENLACE}?texto=${encodeURIComponent(tituloLimpio)}`;
        } else {
            window.location.href = ENLACE;
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

        var textoSinEmojis = textoCrudo.replace(/🍿|🌐|📺|⚙️/g, '').trim();
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
        var href = matchedItem.getAttribute("href");
        if (href && href !== "#") {
            event.preventDefault();
            procesarEnlace(matchedItem);
        }
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
    Search.onclick = (e) => {
       e.preventDefault(); 
    
    var valorInput = buscador.value.trim();
    
    if (valorInput !== "") {
        ejecutarBusqueda(valorInput);
         } else {
   if (buscador.style.display === 'block') {
            // Ocultar
  buscador.style.display = 'none';
   if (typeof HH !== 'undefined') HH.style.display = 'block';   
      buscador.blur(); // Asegura que el teclado se cierre     
        } else {
            // Mostrar
 buscador.style.display = 'block';
  if (typeof HH !== 'undefined') HH.style.display = 'none';   
            
            // TRUCO CLAVE: Fuerza al DOM a renderizar el display:block inmediatamente
   void buscador.offsetHeight; 
           buscador.focus();
        }
    }
};


     

   function openMovie(titulo, urlArchivo) {
  const urlDestino = `PLAY2.html?titulo=${encodeURIComponent(titulo)}&url=${encodeURIComponent(urlArchivo)}`;
   
  window.location.href = urlDestino;
}



         <!-- HTML -->
         
 var HTML =
  `
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
section {
    width: 55%;
    height: 7vh;
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
input {    
    color: #fff;  
    width: 90%;
    padding: 10px;
    outline: none;
    z-index: 9999;
    font-weight: bold;
    border-radius: 20px;
    background: linear-gradient(
    270deg,
    #ff00cc,
    #8a2be2,
    #00bf33,
    #038,
    purple
);
animation: rgbMove 8s linear infinite;
background-size: 600% 600%;
    border: .8px solid blue; 
    box-shadow:
        0 0 20px rgba(0,255,255,.35),
        0 10px 30px rgba(0,0,0,.5);

    transition:.35s;
    margin-top: 27vh; 
}
@keyframes rgbMove {
    0%{background-position:0% 50%;}
    50%{background-position:100% 50%;}
    100%{background-position:0% 50%;}
}
#Lista {
    display: none;
    list-style: none;
    padding: 0;
    margin: 0vh -5vh; 
    width: 90%;
    max-height: 65vh;
    overflow-y: auto;
    background: #000;
    position: fixed;
    z-index: 9999;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.8);
}
.Data {
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    -webkit-text-stroke: .3px #ff00ff;        
    text-decoration: none;
    display: block;
    padding: 15px;
    border-bottom: 1px solid #333;
    font-family: 'Poppins', sans-serif;
    text-align: left;
  &:hover {
      background: #111;
      color: #4f9;
  }
}
.filtro {
    display: none;
}
#Lista a {
    color: #fff;
  &:hover {
     color: #4f9;
     text-shadow: 0 0 10px red;
 }
}
#No {
    scale: 70%;
    display: none;
    margin-top: 27vh;
    position: fixed; 
    border-radius: 50px;
  &:hover {
      filter: hue-rotate(90deg);
  }
}
</style>

<style>
:root {
  --bg: #110921;
  --purple: #3720b4;
  --green: #5ff8c2;
  --font: 'Roboto Mono', sans-serif;
}
h1 {
  font-size: 3vw;
}
</style>
</head>
<body>
<section id="contenedor-main">
    <div>
        <input type="text" name="buscador" id="buscador" placeholder="Buscar...">
           <br/><br/>
     <ul id="Lista"></ul>
    
           </div>
</section>
<img id="No" src="https://is.gd/NjNew4"/>
`;

     Aux.innerHTML = HTML;

 
       No.alt = 'No EnCoNTraDO';
      No.style.color = '#fff';   


    No.onclick = () => {
         Check();
     };
     
   
   Lista.onclick = () => {
     buscador.value = '';
 }; 
 
 
        function Handle() {
  var orientation = (window.innerWidth > window.innerHeight) ? evento() : invento();
 };   
        function evento() {
  var style = document.createElement('style');
  style.innerHTML = `
    #Lista::-webkit-scrollbar {
        width: 6px;
        background: transparent;
    }
    #Lista::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #80808080;
    }
    #Lista::-webkit-scrollbar-track {
        background: transparent; 
    } 
  `;
  document.head.appendChild(style);
};


       function invento() {
  var style = document.createElement('style');
  style.innerHTML = `
    #Lista::-webkit-scrollbar {
        display: none;
    }
  `;
  document.head.appendChild(style);
};

   window.addEventListener("resize", Handle);   
           Handle();   
         
     
 if (!document.querySelector('#scroll-style')) {
  var style = document.createElement('style');
  style.id = 'scroll-style';
  style.innerHTML = `...`;
  document.head.appendChild(style);
};    
     
 
    buscador.onfocus = () => {
  window.setTimeout(() => {
 buscador.style.marginTop = '45vh';
  }, 500);
  Logo.style.display = 'none';
};
   
   buscador.onblur = () => {
 // buscador.style.marginTop = '25vh';
 Logo.style.display = 'block'; 
};


       
      // BUSCADORES
      const S = [
  "https://lamovie.github.io/Buscador/Buscador.js",
  "https://lamovie.github.io/Buscador/Buscador2.js",
  "https://lamovie.github.io/Buscador/Buscador3.js"
];

  let scriptsCargados = 0;

  S.forEach(src => {
  const scripts = document.createElement("script");
  scripts.src = src;
  scripts.onload = () => {
    scriptsCargados++;
    if (scriptsCargados === S.length) {
      construirLista();
    }
  };
  document.body.appendChild(scripts);
});
  
 // https://bit.ly/3y2BVCO 
  
 



     