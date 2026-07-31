function construirLista() {
var PELIS = [...Lista1, ...Lista2, ...Lista3];

var lista = document.getElementById("Lista");
  
// Agrega los nuevos elementos dinámicamente
    PELIS.forEach(item => {
  
  var li = document.createElement("li");
  var a = document.createElement("a");

  a.href = item.URL || item.url;
  a.textContent = item.NAME || item.name;
  a.classList.add("Data");

  li.appendChild(a);
  lista.appendChild(li);
});
}



document.addEventListener("keyup", e => {

  // TILDES
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
      let itemText = Tildes(item.textContent.toLowerCase().trim(), incluyeÑ);
   if (itemText.includes(Input)) {
        item.classList.remove("filtro");
        foundMatch = true;
      } else {
        item.classList.add("filtro");
      }
    });

    No.style.display = foundMatch ? "none" : "block";
  }


     // FUNCIÓN CENTRALIZADA
function procesarEnlace(matchedItem) {
  if (!matchedItem) return;

  var ENLACE = matchedItem.getAttribute("href") || matchedItem.href;
  var NN = matchedItem.textContent;
  
  var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  var tituloLimpio = NN.replace(/🍿|🌐|📺|⚙️/g, '').trim();

 var CADENA = ['file', 'www.dropbox.com', 'play.vidyard', 'okpeliz.com'];
 
  if (CADENA.some(dominio => ENLACE.includes(dominio))) {
    window.location.href = `PLAY.html?titulo=${encodeURIComponent(tituloLimpio)}&url=${encodeURIComponent(ENLACE)}`;
  } else {
    if (!isMobile && ENLACE.includes("latino.solo")) {
      window.location.href = "https://www.google.com/search?q=site:sololatino.net+" + encodeURIComponent(tituloLimpio);
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


     // MANEJO REAL DEL ENTER 
document.addEventListener("keydown", function(event) {
  if (event.target.matches("#buscador") && event.key === "Enter") {
    event.preventDefault();
    
    var In = event.target.value.toLowerCase().trim();
    if (In === "") return;

    // Función interna para limpiar tildes idéntica a la tuya
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
      
       var textoCrudo = elementosData[i].textContent;
      
       var textoSinEmojis = textoCrudo.replace(/🍿|🌐|📺|⚙️/g, '').trim();
      
      var textoItem = Tildes(textoSinEmojis.toLowerCase(), incluyeÑ);
      
 if (textoItem === InputLimpiado) { 
        // Extraemos el enlace <a> que está dentro de este elemento .Data
        matchedItem = elementosData[i].tagName.toLowerCase() === 'a' ? elementosData[i] : elementosData[i].querySelector("a");
        if (matchedItem) {
          break; 
        }
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
});



     // MANEJO DEL CLICK 
document.addEventListener("click", function(event) {
  var matchedItem = event.target.closest("a"); 
  
  if (matchedItem) {
    var href = matchedItem.getAttribute("href");
    if (href && href !== "#") {
      event.preventDefault();
      procesarEnlace(matchedItem);
    }
   }
 });
});


     function Check() {
  var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);   
  
          // ?texto=
  const urlDestino = `${'GOOGLE.html'}?texto=${buscador.value}`;
      
     var domain = isMobile ? urlDestino : 'https://www.google.com/search?q=site:sololatino.net+' + encodeURIComponent(buscador.value);
  
  window.location.href = domain;
  buscador.value = '';
};

      // SEARCH CLICK
Search.onclick = () => {
  if (buscador.value !== '') {
    Check();
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
    scale: 90%;
    left: -3vh;
    position: fixed;
    display: none;
    font-size: 30px;
    margin-top: 20px;
    list-style: none;
    font-weight: 600;
    color: #fff;
    text-align: center;
    background: #000;
    height: 60vh;
    overflow: scroll;
    border-radius: 20px;
}
li {
    margin: 5px 0;
}
.filtro {
    display: none;
}
a {
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
  
 



     