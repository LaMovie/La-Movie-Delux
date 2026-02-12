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
      let itemText = Tildes(item.textContent.toLowerCase(), incluyeÑ);
      if (itemText.includes(Input)) {
        item.classList.remove("filtro");
        foundMatch = true;
      } else {
        item.classList.add("filtro");
      }
    });

    No.style.display = foundMatch ? "none" : "block";
  }

  // Manejo del Enter
  if (e.key === "Enter") {
    var Int = e.target.value.toLowerCase().trim();
    var incluyeÑ = Int.includes("ñ");
    var inputValue = Tildes(Int.replace(/\s+/g, ' '), incluyeÑ);

    var matchedItem = [...document.querySelectorAll(".Data")].find(
      item => Tildes(item.textContent.toLowerCase(), incluyeÑ) === inputValue
    );

    if (matchedItem) {
      window.location.href = matchedItem.href;
      buscador.value = '';
    } else {
      Lista.style.display = 'none';
      No.style.display = "none";
           Check();
    }
  }
});

     
        function Check() {
   var isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Elegir dominio según dispositivo
    var domain = isMobile ? 'https://latino.solo-latino.com/es/search?keyword=' : 'https://h5.swplayer.com/es/search?keyword=';
    
    window.location.href = domain + buscador.value;
       buscador.value = '';
    };

       // SEARCH CLICK
    Search.onclick = () => {
    if (buscador.value !== '') {
            Check();
      } 
   };
     


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
    background: linear-gradient(to right, blue, blue, white);
    border: 2px solid #aaa;    
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
    margin-top: 2vh;
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

 buscador.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') { 
                event.preventDefault(); 
  var TextPre = buscador.value.toLowerCase().trim(); 
  let Prefijo;
 
 if (TextPre.includes('tv')) {
         Prefijo = '📺';
     } else if(TextPre.includes('sofia')){
         Prefijo = '⚙️';
     } else {
         Prefijo = '🍿';
     }   
   var Texto = Prefijo + TextPre;       
   buscador.value = Texto; 
  }
});    
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
     

document.write(unescape("%3Cscript%20src%3D%22https%3A%2F%2Flamovie.github.io%2FBuscador%2FBuscador.js%22%3E%3C%2Fscript%3E%3Cscript%20src%3D%22https%3A%2F%2Flamovie.github.io%2FBuscador%2FBuscador2.js%22%3E%3C%2Fscript%3E%3Cscript%20src%3D%22https%3A%2F%2Flamovie.github.io%2FBuscador%2FBuscador3.js%22%3E%3C%2Fscript%3E"));

  
 // https://bit.ly/3y2BVCO  


     