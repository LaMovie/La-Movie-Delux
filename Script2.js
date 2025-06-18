       function Check() {
   window.location.href = "https://h5.swplayer.com/es/search?keyword=" + buscador.value;
     buscador.value = '';
 }
 
     // CLICK DINAMICO
 document.addEventListener('click', function (event) {
  if (event.target.closest('#Lista a')) {
    event.preventDefault();
    var enlace = event.target.closest('#Lista a');
    var texto = enlace.textContent.trim();
 
    window.location.href = "https://h5.swplayer.com/es/search?keyword=" + encodeURIComponent(texto);
  }
});


       // SEARCH CLICK
    Search.onclick = () => {
    if (buscador.value === '') {
 if (buscador.style.display === 'block') {
  buscador.style.display = 'none';
              } else {
  buscador.style.display = 'block';
         }   
        } else {
          Check();
       } 
     };
     


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
});


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
    position: fixed; 
    border-radius: 50px;
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
  <form onsubmit="event.preventDefault(); Check()">
        <input type="text" name="buscador" id="buscador" placeholder="Buscar...">
  </form>
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
     
  
  


     