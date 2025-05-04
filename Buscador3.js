var Lista3 = [
  { NAME: "🍿LA CASA DE PAPEL", URL: "https://h5.swplayer.com/es/detail/drama/w4T1wpuJxUu5b0bHfQnU5-Money-Heist-Season-1" },
  { NAME: "🍿JUEGO DE TRONOS", URL: "https://h5.swplayer.com/es/detail/drama/uf5jenYNRHVO6dKZpo3JY-Game-of-Thrones-Season-1/1" },
  { NAME: "🍿ONE PIECE", URL: "https://h5.swplayer.com/es/detail/drama/vdXAbbyiZgaslQlAZ9Z6H-One-Piece" }, 
  { NAME: "🍿VIS A VIS", URL: "https://h5.swplayer.com/es/detail/drama/br2opIQsBK8hepOpdQEDI-Vis-a-vis-Season-1" },
  { NAME: "🍿VIKINGOS", URL: "https://h5.swplayer.com/es/detail/drama/3TVD1tXGJbNUvPc0u3mP8-Vikings-Season-1/1" },
  { NAME: "🍿FAMILY GUY", URL: "https://h5.swplayer.com/es/detail/drama/QTUVOLeIYWjsO8Fv2PcxM-Family-Guy-Season-1" }, 
  { NAME: "🍿NARUTO", URL: "https://h5.swplayer.com/es/detail/drama/GGCScosEDKZxW5ejPWH9n-Naruto%5BAudio-Latino%5D" },
  { NAME: "🍿LOS SIMPSONS", URL: "https://h5.swplayer.com/es/detail/drama/MNxoJpARCrPHvVPu1ljH1-The-Simpsons-Season-1" }, 
  { NAME: "🍿OUTLANDER", URL: "https://h5.swplayer.com/es/detail/drama/SC5e4d5u7ZQBPnkhz675G-Outlander-Season-1/1" },
  { NAME: "🍿THE WALKING DEAD", URL: "https://h5.swplayer.com/es/detail/drama/Gr410ksu2cfhFfQP75H9j-The-Walking-Dead-Season-1" }, 
  { NAME: "🍿EVIL", URL: "https://h5.swplayer.com/es/detail/drama/ddsgdunU4e2xi7R5NT3K4-Evil-Season-1" },
  { NAME: "🍿THE LAST OF US", URL: "https://h5.swplayer.com/es/detail/drama/rvYsv23lPziLIw5oz2KjV-The-Last-of-Us-Season-1%5BAudio-Latino%5D/1" }, 
  { NAME: "🍿MY HERO ACADEMIA", URL: "https://h5.swplayer.com/detail/drama/C1lUW7UsRxfbGSHuD2Vax-My-Hero-Academia%5BAudio-Latino%5D/1" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }, 
  { NAME: "🍿", URL: "" },
  { NAME: "🍿", URL: "" }
]
   
// Selecciona la lista existente
var lista = document.getElementById("Lista");

// Agrega los nuevos elementos dinámicamente
Lista3.forEach(item => {
  var li = document.createElement("li");
  var a = document.createElement("a");

  a.href = item.URL || item.url;
  a.textContent = item.NAME || item.name;
  a.classList.add("Data");

  li.appendChild(a);
  lista.appendChild(li);
});

  
  
  
  
  
  
