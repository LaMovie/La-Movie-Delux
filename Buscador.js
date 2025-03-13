document.addEventListener("keyup", e=>{
 
      var Input = e.target.value.toLowerCase().trim();
      var Data = document.querySelectorAll(".Data");
      let foundMatch = false;
 
  if (e.target.matches("#buscador")){          
   
      Lista.style.display = Input === '' ? "none" : "block";
 
  Data.forEach(item => {
        if (item.textContent.toLowerCase().includes(Input)) {
          item.classList.remove("filtro");
          foundMatch = true;
        } else {
          item.classList.add("filtro");
        }
      });
    No.style.display = foundMatch ? "none" : "block";
  }
    
     <!-- Manejo del Enter -->
  
    if (e.key === "Enter") {
      var inputValue = e.target.value.toLowerCase().trim();
      var matchedItem = [...document.querySelectorAll(".Data")].find(
        item => item.textContent.toLowerCase() === inputValue
      );

      if (matchedItem) {
        window.location.href = matchedItem.href;
      } else {
        buscador.value = '';
        Lista.style.display = 'none';
  No.style.display = "none";
      }
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
    scale: 80%;
    display: none;
    position: fixed:
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
         <ul id="Lista">
  <li><a href="https://lamovie.github.io/AIDA-TV/" class="Data">📺Aida Tv</a></li>
  <li><a href="https://lamovie.github.io/IPTV/" class="Data">📺IPTV</a></li>
  <li><a href="https://bit.ly/3vueUqF" class="Data">📺Flow Tv</a></li>
  <li><a href="https://bit.ly/3unJf9W" class="Data">📺Ritmos Tv</a></li>
  <li><a href="https://bit.ly/3R5TwQT" class="Data">📺Pop Tv</a></li>
  <li><a href="https://pluto.tv/es/live-tv/south-park-pvt2/details" class="Data">📺South Park Tv</a></li>
  <li><a href="https://pluto.tv/live-tv/bob-esponja-pantalones-quadrados1?utm_source=plutotv&utm_medium=share&utm_campaign=1000201&utm_content=1000735" class="Data">📺Bob Esponja Tv</a></li>
  <li><a href="https://drive.google.com/drive/folders/1-1XNTcBjHMPOia_zXKWZNhdQQUe2SaNE" class="Data">⚙️Sofia 1</a></li>
  <li><a href="https://drive.google.com/drive/folders/1-1wPR4nf8fmRQ-HNQvkfP0H1HJHxm6yb" class="Data">⚙️Sofia 2</a></li>
  <li><a href="https://drive.google.com/drive/folders/1DgwNQiBR3xvrI3yOgw4Wlv4uUCZxugmf" class="Data">⚙️Sofia 3</a></li>
  <li><a href="https://drive.google.com/drive/folders/1Gafbr3mBA4sRq9ciwS1fiCDX5T11YdzH" class="Data">💻Curso HTML</a></li>
  <li><a href="https://drive.google.com/file/d/1mOP_DRpFgyNSdd-r0mXRzBdTZtBjHB0y/view?usp=drive_link" class="Data">🍿American Assassin</a></li>
  <li><a href="https://drive.google.com/file/d/1kgaSmxkrcj8SEPxlckzZXEA7UnkoGsNO/view?usp=drive_link" class="Data">🍿Ava</a></li>
  <li><a href="https://drive.google.com/file/d/1-gXd9TdFVBByPuy_i-0NSbjBTd18xVQC/view?usp=drive_link" class="Data">🍿 Avengers Infinity War</a></li>
  <li><a href="https://drive.google.com/file/d/1pHjKsVpVFYM92jHdFXP9lBKhF3IaKcPH/view?usp=drive_link" class="Data">🍿Delirium (Nany)</a></li>
  <li><a href="https://drive.google.com/file/d/1mVRTgcWkCywQENX-re4PG_3DvOmzU21Z/view?usp=drive_link" class="Data">🍿Extraction 1</a></li>
  <li><a href="https://drive.google.com/file/d/1-5W4M0kgXPcvnkvx2PwoFzzYIG_W_Plu/view?usp=drive_link" class="Data">🍿Free Guys</a></li>
  <li><a href="https://drive.google.com/file/d/1nxcaUTm0Fci7yY9yhtJyUG4wJrE1b4a8/view?usp=drive_link" class="Data">🍿Fuerza Trueno</a></li>
  <li><a href="https://drive.google.com/file/d/1-XRFN8AjnrkBCAeUInUGV0k-C-uy0HDy/view?usp=drive_link" class="Data">🍿Infinite</a></li>
  <li><a href="https://drive.google.com/file/d/1mX1EBJ6wfmwb45W29l-AAOrurfLEwaL9/view?usp=drive_link" class="Data">🍿Johnny English</a></li>
  <li><a href="https://drive.google.com/file/d/1jh7gB7ZXG8wkcBqJa1pPUe2jjqHoybsU/view?usp=drive_link" class="Data">🍿La Niñera 1</a></li>
  <li><a href="https://drive.google.com/file/d/1kZAO86MGTRcyc3wQgmxCQ0zrSnvE2hZr/view?usp=drive_link" class="Data">🍿La Niñera 2</a></li>
  <li><a href="https://drive.google.com/file/d/1CI1O3RKbDvXONw8JgADdo6sv8FlqbuOT/view?usp=drive_link" class="Data">🍿South Park 2 Post Covid</a></li>
  <li><a href="https://drive.google.com/file/d/11lf6dy_MSUu29tLvMHtbNebRx0k2uVZU/view?usp=drive_link" class="Data">🍿Thor Ragnarok</a></li>
  <li><a href="https://drive.google.com/file/d/1G8uArYwuTj4z3kraYUuOHT-fJ87DlPfT/view?usp=drive_link" class="Data">🍿X Men Dark Phoenix</a></li>
  <li><a href="https://drive.google.com/file/d/1n1ixctqPRoP6oHgfCResFexzRCEnc0TX/view?usp=drive_link" class="Data">🍿El Rito</a></li>
  <li><a href="https://drive.google.com/file/d/1iN26Uy2fGADWSriX22ew84Ml0ODbUfJH/view?usp=drive_link" class="Data">🍿The Truman Show</a></li>
  <li><a href="https://drive.google.com/drive/folders/1uXuU0VlmMPzDvB33Pc7WV7AX1o8rg0kY?usp=drive_link" class="Data">🍿Bodyguard 1</a></li>
  <li><a href="https://drive.google.com/drive/folders/1QXnFEfmQ_amNnE3qtiflELjkQFpWA6cy?usp=drive_link" class="Data">🍿Brickleberry 1</a></li>
  <li><a href="https://drive.google.com/drive/folders/10370h1IUbGQr4ne7cPPaBc3j1MYm5ZqJ?usp=drive_link" class="Data">🍿Dracula</a></li>
  <li><a href="https://drive.google.com/drive/folders/1JppK6fSYZ9JqNgKvcvHLEcxtDbjC_S1X?usp=drive_link" class="Data">🍿Glitch 1</a></li>
  <li><a href="https://drive.google.com/drive/folders/1NnZVci5OMqVkqf5Z4_8AifoejIc22AQV?usp=drive_link" class="Data">🍿October Faction 1</a></li>
  <li><a href="https://drive.google.com/file/d/13j4N_GIiiQ1jMXK6Qt8M3CtW4dNEYs0q/view?usp=drive_link" class="Data">🍿Nadie Duerme En El Bosque Esta Noche 1</a></li>
  <li><a href="https://drive.google.com/file/d/14GrFzztS9HHqa2P4RkH-V9h1qiuxtVFX/view?usp=drive_link" class="Data">🍿It 2</a></li>
  <li><a href="https://drive.google.com/file/d/13iRgw7BVOm4lmt5XiDK2T17t0HjmU_1N/view?usp=drive_link" class="Data">🍿Freak Este Cuerpo</a></li>
  <li><a href="https://drive.google.com/file/d/13hnSXF1y8aDJyq6YWN1rOXbXL9hNA4Ju/view?usp=drive_link" class="Data">🍿Diavlo</a></li>
  <li><a href="https://drive.google.com/file/d/14knB-PA5Ly_tUMMy-_uC73gsFl6LTDmg/view?usp=drive_link" class="Data">🍿Scream 5</a></li>
  <li><a href="https://drive.google.com/file/d/129RuomaMHYK9eIfJgeFCDtF6h-jIeD55/view?usp=drive_link" class="Data">🍿Morbius</a></li>
  <li><a href="https://drive.google.com/file/d/14WDPbYpK1N3ZBTMr94ZJ-56XHNqEVcmf/view?usp=drive_link" class="Data">🍿Agentes 355</a></li>
  <li><a href="https://drive.google.com/file/d/13zUDizvM_UW8nVdbLfL9aGpTRCDKNyoV/view?usp=drive_link" class="Data">🍿Pasajero 666</a></li>
  <li><a href="https://drive.google.com/file/d/13pq_yeT7FFaAS74i052imvMLqomiJFM9/view?usp=drive_link" class="Data">🍿Nadie Saldra Vivo De Aqui</a></li>
  <li><a href="https://drive.google.com/file/d/14K2-HaAmMxoU59D2UAFmJ5BE9COkfdpp/view?usp=drive_link" class="Data">🍿Nadie Duerme En El Bosque Esta Noche 2</a></li>
  <li><a href="https://drive.google.com/file/d/13jbumkOFz0giBaDfFO-aDM24NT_ZBZ-E/view?usp=drive_link" class="Data">🍿Amigos Pasajeros</a></li>
  <li><a href="https://drive.google.com/file/d/14F4B7ekTYxabxWpSTG0UEkn4dRU_0g9Q/view?usp=drive_link" class="Data">🍿WayDown</a></li>
  <li><a href="https://drive.google.com/file/d/14U9yhwDPwq4nyN1bFgbC0i8b6zCZsrX7/view?usp=drive_link" class="Data">🍿Agente 007</a></li>
  <li><a href="https://drive.google.com/file/d/13oZQW10qJljhQbTQ_FgCflQwbgC_Bu2j/view?usp=drive_link" class="Data">🍿Kingsman 3</a></li>
  <li><a href="https://drive.google.com/file/d/13qHIyaVY3vvjNSBYS24acPVv0Ec_fcqm/view?usp=drive_link" class="Data">🍿Nobody</a></li>
  <li><a href="https://drive.google.com/file/d/10ooZt7Wqu2bXkLRje4pSMYmeLtjV-mlH/view?usp=drive_link" class="Data">🍿Proyecto Adam</a></li>
  <li><a href="https://drive.google.com/file/d/10_BswnPFU3sv13lTErADvK67BOSeqUre/view?usp=drive_link" class="Data">🍿Piratas</a></li>
  <li><a href="https://drive.google.com/file/d/10SantEDNivgzMYN_ooqEcxp6xiCXmM6I/view?usp=drive_link" class="Data">🍿Jackass X Siempre</a></li>
  <li><a href="https://drive.google.com/file/d/12fRuA6_po_A08rwsLwTsN1BqC-M3Job2/view?usp=drive_link" class="Data">🍿No Exit</a></li>
  <li><a href="https://drive.google.com/file/d/10JB-GsQe3kpZgvb_HWqYDoNlBFI3Gajy/view?usp=drive_link" class="Data">🍿Masacre En Texas (2022)</a></li>
  <li><a href="https://drive.google.com/file/d/10PB8uRdiJA5XXSB3sEUHAb--FzpeqgU3/view?usp=drive_link" class="Data">🍿El Privilegio</a></li>
  <li><a href="https://drive.google.com/file/d/11WYuLro00uQCKPP7ciXIHcWSkc3JAbr5/view?usp=drive_link" class="Data">🍿The Other Bodyguard 2</a></li>
  <li><a href="https://drive.google.com/file/d/126c_mB1ZXf93AzknKM7ABUDfYhdt29cc/view?usp=drive_link" class="Data">🍿Salt</a></li>
  <li><a href="https://drive.google.com/file/d/12HqxFKRnjilVBIfusW7_gVQfCViPcs7x/view?usp=drive_link" class="Data">🍿La Torre Oscura</a></li>
  <li><a href="https://drive.google.com/file/d/12dAkZ4nDgzZ3Z1-5DzGqP8gcWZtl4xuD/view?usp=drive_link" class="Data">🍿Red Avispa</a></li>
  <li><a href="https://drive.google.com/file/d/10fT6IJdUJ0SoddeXHIgw9ADhpE4GLDRw/view?usp=drive_link" class="Data">🍿It 1</a></li>
  <li><a href="https://drive.google.com/file/d/12A6IjbU-xKe7d8ae7bVQOI5QYSRfO5TI/view?usp=drive_link" class="Data">🍿I Am Mother</a></li>
  <li><a href="https://drive.google.com/file/d/11WIF4c3f9xK8KlA0In7Qn2l3BAo8iT8G/view?usp=drive_link" class="Data">🍿Hotel Artemis</a></li>
  <li><a href="https://drive.google.com/file/d/11TRGbSpgvBc3AlsNm3mbOujAOcQnwvuU/view?usp=drive_link" class="Data">🍿Feliz Dia De Tu Muerte 2</a></li>
  <li><a href="https://drive.google.com/file/d/11Ptgb8tl767dPOi0gQe7PlaDdwLJ0Hyu/view?usp=drive_link" class="Data">🍿Feliz Dia De Tu Muerte 1</a></li>
  <li><a href="https://drive.google.com/file/d/12azYX6YHmE_DeIfv6d8VsGxZXucAHPCd/view?usp=drive_link" class="Data">🍿Await Further Instructions</a></li>
  <li><a href="https://drive.google.com/file/d/12D3NG8qBwraAeqsRCvvVK4c8BnPPlizs/view?usp=drive_link" class="Data">🍿Animales Fantasticos 2</a></li>
  <li><a href="https://drive.google.com/file/d/12GhoGWmXXHhpjYrS_WaqHtyaVln8Bb1C/view?usp=drive_link" class="Data">🍿Amigos De Armas</a></li>
  <li><a href="https://drive.google.com/file/d/12cfJQO8D6AstGbcugt4uer-wixpV24ZS/view?usp=drive_link" class="Data">🍿Muerte En El Nilo</a></li>
  <li><a href="https://drive.google.com/file/d/10-dUfRizmUcC3-nVNgBK2KW3W7VaXw__/view?usp=drive_link" class="Data">🍿Una Noche A Tope</a></li>
  <li><a href="https://drive.google.com/file/d/1044t8F6kcsFvclAKErt7Tn6U_Wlkb4VD/view?usp=drive_link" class="Data">🍿Villanos</a></li>
  <li><a href="https://drive.google.com/file/d/10IoY4It4l20uVO0snZEgTf1Ll8NkSo5l/view?usp=drive_link" class="Data">🍿Quien Mato A Los Puppets</a></li>
  <li><a href="https://drive.google.com/file/d/10RfRlcVjmvQnrrYixFASpE0j7fx4otpF/view?usp=drive_link" class="Data">🍿My Hero Academia 1</a></li>
  <li><a href="https://drive.google.com/file/d/10zLSehZyM8dkGYjObg_RfMLoCOnu8ar1/view?usp=drive_link" class="Data">🍿My Hero Academia 2</a></li>
  <li><a href="https://drive.google.com/file/d/10Lp4DoPKtMFo121mGZuWb2oazgLiadnf/view?usp=drive_link" class="Data">🍿Lo Dejo Cuando Quiera</a></li>
  <li><a href="https://drive.google.com/file/d/10F928swVcoqAmOnOTAl6nLGx-O0-5mTb/view?usp=drive_link" class="Data">🍿Colosal</a></li>
  <li><a href="https://drive.google.com/file/d/1-k-CQZYCQm7XihoTkGWn0NdfLLXnz9Ib/view?usp=drive_link" class="Data">🍿Asesinato En El Oriente Expres</a></li>
  <li><a href="https://drive.google.com/file/d/12NWGyTvChKkCK3O3nny7Ezw0qHktBu4c/view?usp=drive_link" class="Data">🍿AmityVille</a></li>
  <li><a href="https://drive.google.com/file/d/1-xRUBtlQqDbHwnunijSQN3vlUO8rBAZa/view?usp=drive_link" class="Data">🍿A Rough Draft</a></li>
  <li><a href="https://drive.google.com/file/d/1FuU6US-x1SEitOPbCdxqEdqlM_gJWOK4/view?usp=drive_link" class="Data">🍿Game Over</a></li>
  <li><a href="https://drive.google.com/drive/folders/1Emc7AAbo-E8bKaKDR6T3CJe4BphIHAkP?usp=drive_link" class="Data">🍿El Vecino</a></li>
  <li><a href="https://drive.google.com/drive/folders/16-ptJMA7SueN-U7QLh6cUb82lrXcLmY-?usp=drive_link" class="Data">🍿WestWorld</a></li>
  <li><a href="https://drive.google.com/drive/folders/1CgPvjrlap4EK-b3fS0L_sfcVYW-3CLBI?usp=drive_link" class="Data">🍿Raising Dion</a></li>
  <li><a href="https://drive.google.com/drive/folders/1E54pLo2hz6z73TYaiYeYCZgYNJF0sV57?usp=drive_link" class="Data">🍿Los Enviados</a></li>
  <li><a href="https://drive.google.com/drive/folders/16-DlxEaNQUNWeJIb3YsraN6fgvEyv0oj?usp=drive_link" class="Data">🍿The Boys 2</a></li>
  <li><a href="https://drive.google.com/drive/folders/1olCzkTE4MFORoNgXvSbu61BWnlSpDKW1" class="Data">🍿Ataque De Titanes 4.2</a></li>
  <li><a href="https://drive.google.com/drive/folders/158sUhUqc5sw9URq6hVklw5B-vT-wZxJN?usp=drive_link" class="Data">🍿Esta Mierda Me Supera</a></li>
  <li><a href="https://drive.google.com/drive/folders/16NUaJrK_TAUQalIzw0fahTmn5vBurYaM?usp=drive_link" class="Data">🍿El Legado De Jupiter</a></li>
  <li><a href="https://drive.google.com/drive/folders/150SMnaN-HMhAz-xL-Ns3BG-K8YLcK1S4?usp=drive_link" class="Data">🍿The End Of The Fucking World</a></li>
  <li><a href="https://drive.google.com/drive/folders/10ha7QQ0zVjnb_S8AfQ3hf1wdlL2kgfKw?usp=drive_link" class="Data">🍿Shadow & Bone 1</a></li>
  <li><a href="https://drive.google.com/drive/folders/17rAdZ7qCnyrAwY5D_05m_GvrzyI01C87?usp=drive_link" class="Data">🍿Mesias</a></li>
  <li><a href="https://drive.google.com/file/d/1-iMIm47ebtsf_jVogbLHhMtrf4d1prJR/view?usp=drive_link" class="Data">🍿Suicide Squad 2</a></li>
  <li><a href="https://drive.google.com/file/d/1gA4Akmv6C9LDbiveQNN5dvk3gQcne39H/view?usp=drive_link" class="Data">🍿Ni En Tus Sueños</a></li>
  <li><a href="https://drive.google.com/file/d/1O3FQva3h74OaXNNWhplOHjQqcN35Wikh/view?usp=drive_link" class="Data">🍿Jexi</a></li>
  <li><a href="https://drive.google.com/file/d/1tJZe2ukGzSa4IQkU66X2xqMJIe7iLA9R/view?usp=drive_link" class="Data">🍿Dr Strange 1</a></li>
  <li><a href="https://drive.google.com/file/d/1GSRzAEWYkSrk6I3zAZ7ha0n6nmfLVpwQ/view?usp=drive_link" class="Data">🍿El Conjuro 3</a></li>
  <li><a href="https://drive.google.com/drive/folders/1hLoFdFiY8Na7iU-PypNlPZecTkKabAyg" class="Data">🍿Doom Patrol</a></li>
  <li><a href="https://drive.google.com/drive/folders/1QVyd0JlP1wG9a40UgyLhOejZmUkfVTlH" class="Data">🍿Ataque De Titanes</a></li>
  <li><a href="https://drive.google.com/file/d/1IZCespPMwAHkweXK_DNxX9oBWHmX_pr5/view?usp=drive_link" class="Data">🍿Las Mil Caras De Dunjia</a></li>
  <li><a href="https://drive.google.com/file/d/1MqiwsJMSZrkNXkDRW0S8w-pY4PRZjLZ5/view?usp=drive_link" class="Data">🍿Perfectos Desconocidos</a></li>
  <li><a href="https://drive.google.com/file/d/1wQgQe-CdVsXobrzzGFR-RT2YBGimQ-gv/view?usp=drive_link" class="Data">🍿This Is America Mother Fucker</a></li>
  <li><a href="https://drive.google.com/drive/folders/153l-ZlNS7Sh1lbSj7V2eAbx1gSpz2aPW?usp=drive_link" class="Data">🍿El Pentavirato</a></li>
  <li><a href="https://drive.google.com/drive/folders/1IfMdHkAt7bkE3iLDeIwuHhVq_eTGD7IL?usp=drive_link" class="Data">🍿What If</a></li>
  <li><a href="https://drive.google.com/drive/folders/1ViysRW8wmVP93vTXRo4KBa3N8gMtLoXu?usp=drive_link" class="Data">🍿 Mundos Paralelos</a></li>
  <li><a href="https://drive.google.com/drive/folders/1HuRMpfgT9qC86Q6yar4TfUWE_UeAmv_R?usp=drive_link" class="Data">🍿Desencanto 4</a></li>
  <li><a href="https://drive.google.com/drive/folders/16tux_yPRkcohCg5-EoLzUXlmjAyTgfp_?usp=drive_link" class="Data">🍿Bang Bang Baby</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZiNwEVZjqeR2jk0INX6eUkQDLc420LmIs2V" class="Data">🍿Ant Man 3</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZ60xEVZyfwv7tnr0nYCKW1Y2PDY17abGhl7" class="Data">🍿One Punch Man 1</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZvHeUVZpUPsOBHOtN7UfyH4zxQNvjt0fokX" class="Data">🍿Extraction 2</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZcAjX0ZczeInSdPm2QK84nOmFHrL0KSmEsk#folder=17575507142&tpl=publicfolderlist" class="Data">🍿Asterix y Obelix</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZCOCEVZbLDvfRrfq4VSubMhUbx4Op7Y0Ohk" class="Data">🍿Ghosted</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZv9raVZlOY28EQi9JzTWWbJEjF5PYeX49bX" class="Data">🍿Replicas</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZcAjX0ZczeInSdPm2QK84nOmFHrL0KSmEsk#folder=18517633812&tpl=publicfolderlist" class="Data">🍿M3gan</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZcAjX0ZczeInSdPm2QK84nOmFHrL0KSmEsk#folder=18517632659&tpl=publicfolderlist" class="Data">🍿Erase Una Vez Un Genio</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZqICEVZoIL5qU7iMWXRcNULUpBaK5Yu1Cj7" class="Data">🍿Evil Dead 2</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZIvCEVZNTR0Vnhp4cjRH2YmzSRY4buaGVdk" class="Data">🍿Tin y Tina</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZcAjX0ZczeInSdPm2QK84nOmFHrL0KSmEsk#folder=17574711090&tpl=publicfolderlist" class="Data">🍿One Punch Man 2</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZcAjX0ZczeInSdPm2QK84nOmFHrL0KSmEsk#folder=18239289585&tpl=publicfolderlist" class="Data">🍿One Punch Man Delux</a></li>
  <li><a href="https://drive.google.com/drive/folders/1-D6Lb9B1ye-5rdcAuREb4q7K5yRrikLT" class="Data">🎵CLOUD-MUSIC🎵</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZAeKEVZucsrQ54LfpzdtGlJu0ApPJrIbPVk" class="Data">🍿13 Exorcismos</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZEecNVZamvcPBJpfRYNtzDSXla7AB2DWrcX" class="Data">🍿Agente Stone</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZ4nKEVZRCEdMzuLDrzSJdJqeScQoyI0LgLy" class="Data">🍿Black Panter 2</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZXowEVZvt4SFPoD0k7I1vUNbfykX7R3plNy" class="Data">🍿Dungeons Dragons</a></li>
  <li><a href="https://drive.google.com/file/d/1_g86g8vkIK-wbgYvDYcffmxUWpCosnQO/view?usp=drive_link" class="Data">🍿Fiesta En Casa</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZbowEVZVtmXMHifvYztkmsftG6pVukCm1mk" class="Data">🍿El Exorcista Del Papa</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZDowEVZEm8272IrlskJ5z4xnv94sBAHrkH7" class="Data">🍿John Wick 4</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZoJaAVZ0PRRbA0GK8B94yhtbqL8BFmVJBa7" class="Data">🍿Flash</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZy7KEVZHgiwF4qq9zfIlXh0EQXAVp7Pqgjy" class="Data">🍿Misterio A Bordo 2</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZlowEVZIjj2sf3i3zbIz4P3AN13bXsDMQ6V" class="Data">🍿Llaman A La Puerta</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZBNyNVZyHn5xsNCKShMKiPwbjhiYje5boLV" class="Data">🍿Hidden Strike</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZ9MlEVZCNNTJi5fAQpoPqNdqFKUSfqueWWV" class="Data">🍿Molino Rojo</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZXTlEVZV7fqMY24zdLg0x94n1q2j5RXsqEX" class="Data">🍿Operacion Fortune</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZqTlEVZ1j44Lk0o5imYzk27kinoMSatfvnk" class="Data">🍿Shazam 2</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZFPlEVZffzzD32Ynly9jab7YVtqv7dr7d7V" class="Data">🍿Un Fantasma Anda Suelto</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZTNjX0ZjdQCFqW0qH0tgasAT8GwzmjYPtV7" class="Data">🍿Avatar 2</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZCNjX0Z7XkulBXlfC4XDPaUkbRBGf7QUekX#folder=18239116584&tpl=publicfolderlist" class="Data">🍿Shadow & Bone 2</a></li>
  <li><a href="https://drive.google.com/drive/folders/1pr9214boJD9fI0id23VkEEOPKHBlheS5?usp=drive_link" class="Data">🍿1899</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZ1xX3VZN9Tl9R9U6F8Fw0TLKkH2qVQER3yy" class="Data">🍿Dracula (2023)</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZqa4AVZGdsDrWjUhaXCDfPYCjJXLfd0k8rV" class="Data">🍿Guardianes De La Galaxia 3</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZqumNVZwbgJ7vOrxqmkxWnNIQtMJBS1DKk0" class="Data">🍿 Transformers</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZI2eUVZD9fnGzKhGMQl5VvkXSaXV0SsNQck" class="Data">🍿Invasion Secreta</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZmNkIVZ7mNF1SNQrt0C7ECSyuBHD4B04P1X" class="Data">🍿Fast & Furious X</a></li>
  <li><a href="https://drive.google.com/file/d/10nxv0FnrSjXZuK5pUc-KUACUrsCoeJQV/view?usp=drivesdk" class="Data">🍿La Monja 1</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZLYSNVZTG7zAuf3gyQuE9LzyFuJEbq24grV" class="Data">🍿Insidious</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZ27XIVZEYdMbcIjdxyvrBFfh63gkjAl1xmk" class="Data">🍿The Witcher 3</a></li>
  <li><a href="https://drive.google.com/file/d/1lhogHm_7ubvVk4E9-SXExZ7LhLEwlJHI/view?usp=drivesdk" class="Data">🍿La Morgue De Jane Doe</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZb3jX0ZAmM27kUHr1S9GGGGe8bmcQ5g2S9X" class="Data">🍿Dulces y Sangrientos 16</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZocI3VZTvc6Cyz1YMuvKon8v7OSjSm8ghVX" class="Data">🍿Mr Pickles 1</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZPoI3VZEKVyKLhEAQSDMLrCTwhB7QaJC0M7" class="Data">🍿Mr Pickles 2</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZJ1v3VZolLepF9CAOQdBDazraS5DYarFiNk" class="Data">🍿Mr Pickles 3</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZD3jX0Zl0BbQmnhm7RlgkTPG01Lt56WItLy#folder=20057957131&tpl=publicfolderlist" class="Data">🍿Berlin</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZD3jX0Zl0BbQmnhm7RlgkTPG01Lt56WItLy#folder=19365851832&tpl=publicfolderlist" class="Data">🍿Gen V</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZD3jX0Zl0BbQmnhm7RlgkTPG01Lt56WItLy#folder=19034655840&tpl=publicfolderlist" class="Data">🍿Loki 1</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZD3jX0Zl0BbQmnhm7RlgkTPG01Lt56WItLy#folder=19034656608&tpl=publicfolderlist" class="Data">🍿Loki 2</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZo6DR0Z1GGyIzSRXUL3v2BETPumt7fk03Xk" class="Data">🍿Invencible 2</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZP3jX0Zb4QGfXOSPk0kKEYVgoRLXjOxE9qV#folder=19398787915&tpl=publicfolderlist" class="Data">🍿Doom Patrol 4.2</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZP3jX0Zb4QGfXOSPk0kKEYVgoRLXjOxE9qV#folder=19103437309&tpl=publicfolderlist" class="Data">🍿La Rueda Del Tiempo 2</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZP3jX0Zb4QGfXOSPk0kKEYVgoRLXjOxE9qV#folder=19130274733&tpl=publicfolderlist" class="Data">🍿Wanda Vision</a></li>
  <li><a href="https://drive.google.com/drive/folders/18ONH2Re0ziD5LSbcPmr_Tci6Ucs9S5Uj?usp=drive_link" class="Data">🍿Moon Knight</a></li>
  <li><a href="https://drive.google.com/drive/folders/14Y5QS-Np-2TUGkYWnHHn-kA_rH24yfdT?usp=drive_link" class="Data">🍿The Baby</a></li>
  <li><a href="https://drive.google.com/drive/folders/13GvyAU6xNwiphdwAvlebmE8nJQMunrht?usp=drive_link" class="Data">🍿Elfen Lied</a></li>
  <li><a href="https://drive.google.com/file/d/17vrFrXExVfKHADXUM2IA3vEgfsG1_f3t/view?usp=drive_link" class="Data">🍿The Banishing</a></li>
  <li><a href="https://drive.google.com/file/d/18sbsvUCVSGAuGvcWyiML8bO0AHPzCJFM/view?usp=drive_link" class="Data">🍿A Writer's Odyssey'</a></li>
  <li><a href="https://drive.google.com/file/d/1GGkQA-9L-eUC6RIBbird_VSXZg3pwHDD/view?usp=drive_link" class="Data">🍿Eliges O Mueres</a></li>
  <li><a href="https://drive.google.com/file/d/14REzNCkTl3R8ZvJErE9VlGURtzWs8rx9/view?usp=drive_link" class="Data">🍿Uncharted</a></li>
  <li><a href="https://drive.google.com/file/d/189rmr58iv7OXgEyn1L1_c9Wyq4TpOgzp/view?usp=drive_link" class="Data">🍿The Batman</a></li>
  <li><a href="https://drive.google.com/file/d/184JCBm8XVlGPirasvZAOemQyhuQd2rAC/view?usp=drive_link" class="Data">🍿El Sastre De La Mafia</a></li>
  <li><a href="https://drive.google.com/file/d/1GcQC0hbrVsFBlmxAAUSGFKWHmDvBH04P/view?usp=drive_link" class="Data">🍿Abigail Disney</a></li>
  <li><a href="https://drive.google.com/file/d/1Gb620tOqiPptds1oYCDMxd_PMf4CpK44/view?usp=drive_link" class="Data">🍿The Witches</a></li>
  <li><a href="https://drive.google.com/file/d/1GXGSMeH-PlkP30MDtdvkel87Q1PUTDa_/view?usp=drive_link" class="Data">🍿The Craft</a></li>
  <li><a href="https://drive.google.com/file/d/1Nj6hvez2YanYFXCDzuZdF-PEUrumy75G/view?usp=drive_link" class="Data">🍿Superagente Makey</a></li>
  <li><a href="https://drive.google.com/file/d/1Nrya_lSRu1t-09qe2Ojqld6L783TE1o5/view?usp=drive_link" class="Data">🍿Promocion Fantasma</a></li>
  <li><a href="https://drive.google.com/file/d/1GiZM1IoXgwwDndouSzd_tuaADVNTXtSO/view?usp=drive_link" class="Data">🍿El Misterio Del Dragon</a></li>
  <li><a href="https://drive.google.com/file/d/1hX6Zb1tp67RdSJFRbrW5E4TiOS2VFqUv/view?usp=drive_link" class="Data">🍿El Exorcismo De Dios</a></li>
  <li><a href="https://drive.google.com/drive/folders/1-0eGrbLiq9Ki4HActJJGwHlmOclbV7uw?usp=drive_link" class="Data">🍿El Predicador</a></li>
  <li><a href="https://drive.google.com/drive/folders/1EVr2ZQu-YPz8arog7vbQgb2ttkGNs9II?usp=drive_link" class="Data">🍿The Boys 1</a></li>
  <li><a href="https://drive.google.com/drive/folders/1cBSlG4DXrJkEJqeKwkqd5lNGGBPWRr2E?usp=drive_link" class="Data">🍿The Umbrella Academy 3</a></li>
  <li><a href="https://drive.google.com/drive/folders/1mLG5v3dcDtIuQ5dPAp9B-DZxHn9f7LT4?usp=drive_link" class="Data">🍿The Boys Diabolical</a></li>
  <li><a href="https://drive.google.com/drive/folders/1mInA_0FLLMn9WjzxsRTHscLl6uktR-6_?usp=drive_link" class="Data">🍿Spriggan</a></li>
  <li><a href="https://drive.google.com/drive/folders/1sKS-_7Ubs8wqLYaAPNNUDEY6BlcXT1QS?usp=drive_link" class="Data">🍿Man Vs Bee</a></li>
  <li><a href="https://drive.google.com/drive/folders/1TzNHu1V4vVcPM1Nc4VVX9Fic_dTraEYL?usp=drive_link" class="Data">🍿American Horror Stories</a></li>
  <li><a href="https://drive.google.com/drive/folders/1mKaZ2SLgTSH8bpL9oox9b7Ift_vWwK4F?usp=drive_link" class="Data">🍿Vampire In The Garden</a></li>
  <li><a href="https://drive.google.com/file/d/11qGeSeN04yA0QBtLa6nWJvCXU9mD4v-Z/view?usp=drive_link" class="Data">🍿Veneciafrenia</a></li>
  <li><a href="https://drive.google.com/file/d/1w5bw3jfWZnp0JtOzr_9DKALoSoPOyeIt/view?usp=drive_link" class="Data">🍿The Night</a></li>
  <li><a href="https://drive.google.com/file/d/1w2arpT9MeY0nsXWUbALjfNKajUKkjaXG/view?usp=drive_link" class="Data">🍿The Green Knight</a></li>
  <li><a href="https://drive.google.com/file/d/1U-zBTivbIV4TniRoKnFMfCVz5MUJ-GXc/view?usp=drive_link" class="Data">🍿The Gray Man</a></li>
  <li><a href="https://drive.google.com/file/d/1QLEGLam05ed1Cwv88OrecDFI0r_AYb76/view?usp=drive_link" class="Data">🍿Separation</a></li>
  <li><a href="https://drive.google.com/file/d/1DWyoXH_FRGsEaaNA8815mJ_9lJqYKDel/view?usp=drive_link" class="Data">🍿Escape Room (La Peli)</a></li>
  <li><a href="https://drive.google.com/file/d/17UHXQdh_5N94Dq9pZOjGX6zGT-xGKUdR/view?usp=drive_link" class="Data">🍿Prey</a></li>
  <li><a href="https://drive.google.com/file/d/1un7rrCA0z7h-bEfYz_YsYqBl8gZjy1uZ/view?usp=drive_link" class="Data">🍿Padre No Hay Mas Que Uno</a></li>
  <li><a href="https://drive.google.com/file/d/1D5oefPY4C5-Yoc_6KIwMns0G6wGtqAW4/view?usp=drive_link" class="Data">🍿Minions El Origen De Gru</a></li>
  <li><a href="https://drive.google.com/file/d/1QKKZSJITzyg8okkyjY5Np-r97_rAqpQa/view?usp=drive_link" class="Data">🍿La Llamada Del Diablo</a></li>
  <li><a href="https://drive.google.com/file/d/1Fyqy9RxN325jFxNMyW-6wmSsMXsoK813/view?usp=drive_link" class="Data">🍿Beavis & Butt</a></li>
  <li><a href="https://drive.google.com/file/d/1QCQY4kvI0UejtLDgUGmpWg10zNbkLdm7/view?usp=drive_link" class="Data">🍿Knives Out</a></li>
  <li><a href="https://drive.google.com/file/d/1s0gaNqydo_Xp9yKGhd0j2M_OChrKVdZM/view?usp=drive_link" class="Data">🍿Garra</a></li>
  <li><a href="https://drive.google.com/file/d/1Paj9sgvGuoqhVPezU65K2y7xkhd1XCtL/view?usp=drive_link" class="Data">🍿Freaks Out</a></li>
  <li><a href="https://drive.google.com/file/d/1uuS39rlhpo2VFwmAjLbP1_9lJVzHvpHy/view?usp=drive_link" class="Data">🍿El Hombre De Toronto</a></li>
  <li><a href="https://drive.google.com/file/d/1FpV9YLdKV6znRcKTNNz7qIGdmUmvAyRU/view?usp=drive_link" class="Data">🍿Black Phone</a></li>
  <li><a href="https://drive.google.com/file/d/1ZDmPsuYEz7--Cl-GKxTMeW4vC1d7gw9e/view?usp=drive_link" class="Data">🍿Shut In</a></li>
  <li><a href="https://drive.google.com/file/d/1B-YXQVjeYWmUoBg7NzOhju4yWyT6gFAd/view?usp=drive_link" class="Data">🍿Ruega Por Nosotros</a></li>
  <li><a href="https://drive.google.com/file/d/1E9sfAE82BsLFkmZdzrv9H9B_oHHoTRQo/view?usp=drive_link" class="Data">🍿Mira Por Mi</a></li>
  <li><a href="https://drive.google.com/file/d/1DkxFmM-GeXVJSwZ7XczjcRrAp_l_pBdg/view?usp=drive_link" class="Data">🍿Good Night Mommy</a></li>
  <li><a href="https://drive.google.com/file/d/15EpJ_ZR50BnQFPYvQJ6Uyt9oYhcQ-20o/view?usp=drive_link" class="Data">🍿Good Mourning</a></li>
  <li><a href="https://drive.google.com/file/d/1APtcxuWQwmZSCZwlu3Yl0RXzp-E_8SP4/view?usp=drive_link" class="Data">🍿Turno De Dia</a></li>
  <li><a href="https://drive.google.com/file/d/1jGsqhx20NRDDjz6sU_NeXtxJ8O150HLD/view?usp=drive_link" class="Data">🍿Thor (Amor Y Odio)</a></li>
  <li><a href="https://drive.google.com/file/d/1FkE6rvmPJ0jvJy_ufTIa6chgf6E0Ag1a/view?usp=drive_link" class="Data">🍿The Equalizer 2</a></li>
  <li><a href="https://drive.google.com/file/d/1E99MSsoliSqDWR6uWOa8zWbTVwU0WTpP/view?usp=drive_link" class="Data">🍿Slumber Party Massacre</a></li>
  <li><a href="https://drive.google.com/drive/folders/1IDx9KFezHncBckOxXF4k5hQUSQ2fRl6A?usp=drive_link" class="Data">🍿She Hulk</a></li>
  <li><a href="https://drive.google.com/drive/folders/1EtGQjuEpTpYLFw3CyzhyTUEOO8vO5L_I?usp=drive_link" class="Data">🍿See 3</a></li>
  <li><a href="https://drive.google.com/drive/folders/13sOvXusbcPAn1sbLlUUCtwjT5XNJe2w7?usp=drive_link" class="Data">🍿Sandman</a></li>
  <li><a href="https://drive.google.com/drive/folders/19R2D98Wtg1JYcPqkGABtjoV295waG9Ck?usp=drive_link" class="Data">🍿Locke & Key 3</a></li>
  <li><a href="https://drive.google.com/drive/folders/1pi7Ie0Y8mrPR0VlYoJUMX4vNJWnJWl2N?usp=drive_link" class="Data">🍿Justice Served</a></li>
  <li><a href="https://drive.google.com/drive/folders/17JdweFzy46KrXJc0ZliCwOui15u2Td3A?usp=drive_link" class="Data">🍿Good Omens</a></li>
  <li><a href="https://drive.google.com/drive/folders/11pVihRJilhIvOob7cpn55Xvp7Q4ps3Gi?usp=drive_link" class="Data">🍿Baki</a></li>
  <li><a href="https://drive.google.com/drive/folders/1sPdsKm3RTNJfb9S-7KnehK2VI6CP9orr?usp=drive_link" class="Data">🍿Lupin</a></li>
  <li><a href="https://drive.google.com/drive/folders/1-QalcOGGPlpWPuETyl7w9-eoFZB30h3b?usp=drive_link" class="Data">🍿El Diablo En Ohio</a></li>
  <li><a href="https://drive.google.com/drive/folders/1g4g0T7J5PEHzLBjl6SHwf3nXyP9sbYYj?usp=drive_link" class="Data">🍿Anillos De Poder</a></li>
  <li><a href="https://drive.google.com/file/d/1AYqHJK9dl79ccjvIvyZGGU_UlPWLnZKG/view?usp=drive_link" class="Data">🍿La Pasajera</a></li>
  <li><a href="https://drive.google.com/file/d/1BaDBkNRfNqkIFZZYsSPvMLoJyE3NVjCC/view?usp=drive_link" class="Data">🍿La Invitacion</a></li>
  <li><a href="https://drive.google.com/file/d/1JjQpZSdx5w5vFAVZcVhpN2gBybChOXRI/view?usp=drive_link" class="Data">🍿La Bestia</a></li>
  <li><a href="https://drive.google.com/file/d/1zJtUmnBbG76bJgkCUKn_-IJnixNITCoG/view?usp=drive_link" class="Data">🍿El Exorcismo De Mi Mejor Amiga</a></li>
  <li><a href="https://drive.google.com/file/d/1yCsVx-0NnzcoW3tQtrVNNlBd2oqOWg96/view?usp=drive_link" class="Data">🍿El Cuartel Secreto</a></li>
  <li><a href="https://drive.google.com/file/d/1Ju_1b_FnDTIHf-FlXGGB2NydRdcEyTvD/view?usp=drive_link" class="Data">🍿The Skeleton Key</a></li>
  <li><a href="https://drive.google.com/file/d/1rpQOIKmizYLLt2zpg_yxlQ87EJxM4McV/view?usp=drive_link" class="Data">🍿The Gentlemens</a></li>
  <li><a href="https://drive.google.com/file/d/1J_QXOeCBTdR6oklV_4Mj0xrJGBhTKaVq/view?usp=drive_link" class="Data">🍿Maligno</a></li>
  <li><a href="https://drive.google.com/drive/folders/1--zY-EDd-hEMXABqGu04OguwquiZeAlV" class="Data">🍿Ghosts</a></li>
  <li><a href="https://drive.google.com/drive/folders/1cAcwzT70xX6M--ZHZAuL37o9EVXk0Xr8?usp=drive_link" class="Data">🍿Marianne</a></li>
  <li><a href="https://drive.google.com/drive/folders/1ZkWRZfmVkzaUWAlhJa1ZMfpeK2ymxou8?usp=drive_link" class="Data">🍿Merlina Addams</a></li>
  <li><a href="https://drive.google.com/drive/folders/1cH0AN9kGdHLcwl2A_QPRcmU2PRpjdtDt?usp=drive_link" class="Data">🍿The Bastard Son Of Devil</a></li>
  <li><a href="https://drive.google.com/drive/folders/1lFHu58_VqsfM5RfiTRNWvMhm3PtOX72K?usp=drive_link" class="Data">🍿The Witcher 1</a></li>
  <li><a href="https://drive.google.com/file/d/1ZbTKhTahcZ-CiflWiEziGOyezp7UTDHD/view?usp=drive_link" class="Data">🍿Black Adam</a></li>
  <li><a href="https://drive.google.com/file/d/1NMGLj6Be_OXAy8UP93KpjfprhaoaYyHo/view?usp=drive_link" class="Data">🍿Como Me Converti En Super</a></li>
  <li><a href="https://drive.google.com/file/d/1-Aj4Uj0S0aYCcQhenovfzLQyFrz9W7wm/view?usp=drive_link" class="Data">🍿Lo Nunca Visto</a></li>
  <li><a href="https://drive.google.com/drive/folders/1si0pNAOVaYJD2rsfxW5nrWmtOYtKW3AM?usp=drive_link" class="Data">🍿American Gods</a></li>
  <li><a href="https://drive.google.com/file/d/1pcRNL2NuWu2-qlXU8FnX0iy2aNissTir/view?usp=drive_link" class="Data">🍿Toc Toc</a></li>
  <li><a href="https://drive.google.com/file/d/1Hl7TjdZBm8tanNCwB2_M8wEiCT_WHrAJ/view?usp=drive_link" class="Data">🍿El Hoyo</a></li>
  <li><a href="https://drive.google.com/file/d/10wgUEJ00CyCzEAc6n5OZaj9LR9ae-TRe/view?usp=drive_link" class="Data">🍿El Reino Prohibido</a></li>
  <li><a href="https://drive.google.com/file/d/1pTYYn0JdmX4H1SQCk9pox2hdAB-SMmGB/view?usp=drive_link" class="Data">🍿El Robo Del Siglo</a></li>
  <li><a href="https://drive.google.com/file/d/1IBKlsFMuP562dCjZZxvp0r95skP9E6e7/view?usp=drive_link" class="Data">🍿La Luz Del Diablo</a></li>
  <li><a href="https://drive.google.com/file/d/1WmtIYWTQVOZuFZKY6JxjzWOKCld5ccdF/view?usp=drive_link" class="Data">🍿Smile</a></li>
  <li><a href="https://drive.google.com/file/d/1hTGPQRTLc93R6uJJzP7tjLD8lCYPHWz_/view?usp=drive_link" class="Data">🍿El Pais De Los Sueños</a></li>
  <li><a href="https://drive.google.com/file/d/1X0bHXbFCa_AWoitWPjJT5B34xQd8acL4/view?usp=drive_link" class="Data">🍿Todo En Todas Partes</a></li>
  <li><a href="https://drive.google.com/file/d/138nC-Omv-FUMpHuLPr9bc0zs9lh8Qyhe/view?usp=drive_link" class="Data">🍿El Menu</a></li>
  <li><a href="https://drive.google.com/file/d/11fSUAb1HZVAMdiNgLoxhzEfTB6d_NZw3/view?usp=drive_link" class="Data">🍿Mañana Es Hoy</a></li>
  <li><a href="https://drive.google.com/file/d/13NGn13gLyB2598vpgrA-M8ScbEHWaum7/view?usp=drive_link" class="Data">🍿Super Quien</a></li>
  <li><a href="https://drive.google.com/file/d/1SlcY_RaDstx4bn4T304Iiq8jCa2GItWZ/view?usp=drive_link" class="Data">🍿Witch Hunt</a></li>
  <li><a href="https://drive.google.com/drive/folders/1f0HGb7hPrqdQGJySawmKXCp_Lohsyxr6?usp=drive_link" class="Data">🍿His Dark Materials 1</a></li>
  <li><a href="https://drive.google.com/drive/folders/1Xy_Lfl8u_j6fH4j7TUNNqnGlPApBExhx?usp=drive_link" class="Data">🍿Inside Job 2</a></li>
  <li><a href="https://drive.google.com/drive/folders/1NNNu6w15tggKaUmPuK7CDwKFAOmN6NIS?usp=drive_link" class="Data">🍿La Periferia</a></li>
  <li><a href="https://drive.google.com/drive/folders/1eN-xMI3WGWrsDtJvjtRe_NAfijbOsMcF?usp=drive_link" class="Data">🍿Willow</a></li>
  <li><a href="https://drive.google.com/drive/folders/1NH6OgHkXftEsuL6HHodbKMdoMrtkLawj?usp=drive_link" class="Data">🍿His Dark Materials 2</a></li>
  <li><a href="https://drive.google.com/drive/folders/1NRQXqvX11kGn7e3p7k-t8cf6zECUfb8z?usp=drive_link" class="Data">🍿His Dark Materials 3</a></li>
  <li><a href="https://drive.google.com/drive/folders/1s3zdBbZRCa_JX1CJ1b5ohdwFUXR9B40g?usp=drive_link" class="Data">🍿The Witcher El Origen</a></li>
  <li><a href="https://drive.google.com/drive/folders/10AGbUu5SLvghM9xkqn7GZY87yegFgqZg?usp=drive_link" class="Data">🍿La Casa De Papel Corea</a></li>
  <li><a href="https://drive.google.com/drive/folders/1NZuy1mrY9a8GH7eMQBtPA-Tj5rxjwBW9?usp=drive_link" class="Data">🍿Rick & Morty</a></li>
  <li><a href="https://drive.google.com/file/d/1XUm9kautpuNED-h939sFEKLEXzSb9oWM/view?usp=drive_link" class="Data">🍿Margaux</a></li>
  <li><a href="https://drive.google.com/file/d/1KDdddn9KriaFfJ1zsZ0wA4b0f4WkdZcv/view?usp=drive_link" class="Data">🍿Pinocho</a></li>
  <li><a href="https://drive.google.com/file/d/1GjcBxPWTq-fQAYzid2x9mJBAX73RA12m/view?usp=drive_link" class="Data">🍿GhostBusters</a></li>
  <li><a href="https://drive.google.com/file/d/1BrwJQI6vxx3dswb-EqMaAojJG1_e5l3x/view?usp=drive_link" class="Data">🍿Los Renglones Torcidos De Dios</a></li>
  <li><a href="https://drive.google.com/drive/folders/1RvI_Jq1jJQLtRI_GRxsrwQ2WrOSNH83g?usp=drive_link" class="Data">🍿El Gabinete De Las Curiosidades</a></li>
  <li><a href="https://drive.google.com/file/d/1s7jdUOG4IbeY91H9Vbl3OMPwUb9J9O8_/view?usp=drive_link" class="Data">🍿RIP.D 1</a></li>
  <li><a href="https://drive.google.com/file/d/1JLB42Zh7Em--kCQ5-jit7MumgZyTRwvp/view?usp=drive_link" class="Data">🍿RIP.D 2</a></li>
  <li><a href="https://drive.google.com/drive/folders/1-0m7g37ATJxxo1vJE57Bwc2uHML08asl" class="Data">🍿The Boys 4</a></li>
  <li><a href="https://drive.google.com/drive/folders/1xgNdigb3odRJLSi8pTh5LgN33dFIrar7?usp=drive_link" class="Data">🍿Aida</a></li>
  <li><a href="https://drive.google.com/file/d/1wrBDHdOm6T4K-EeZc68ki2Cha3POXUgM/view?usp=drive_link" class="Data">🍿Hansel & Gretel</a></li>
  <li><a href="https://drive.google.com/file/d/13-CJySAN1ENdto3P1hNXLDztSBmoJdya/view?usp=drive_link" class="Data">🍿La Isla De La Fantasia</a></li>
  <li><a href="https://drive.google.com/file/d/1wYogh5CN1jYnJDtwRLs-CqTHorm5EZfW/view?usp=drive_link" class="Data">🍿La Liga De La Justicia</a></li>
  <li><a href="https://drive.google.com/file/d/17h_p8JLSAUdHChxO6Eu4aFUqnsOL5M-E/view?usp=drive_link" class="Data">🍿Malasaña 32</a></li>
  <li><a href="https://drive.google.com/file/d/13vyDSwscSUiEcmReXHAk-0UfPzN_enmA/view?usp=drive_link" class="Data">🍿All My Friends Are Dead</a></li>
  <li><a href="https://drive.google.com/drive/folders/153WqakVFQG8XSlxbZLBif6bv9oEMYyFW?usp=drive_link" class="Data">🍿Stranger Things 3</a></li>
  <li><a href="https://drive.google.com/file/d/17V6ANRL-o1Xgf9QbubGqd4bVJno1hFki/view?usp=drive_link" class="Data">🍿Alita</a></li>
  <li><a href="https://drive.google.com/file/d/17J70IqKsedQdSs5X02LbSwLWYaLA6JJu/view?usp=drive_link" class="Data">🍿Boda Sangrienta</a></li>
  <li><a href="https://drive.google.com/file/d/18-E2f2OfhizfV01Vo7n_FlcklDXqF1Qo/view?usp=drive_link" class="Data">🍿John Wick 2</a></li>
  <li><a href="https://drive.google.com/file/d/19nZ_o6zyfmhQeSa-RXKH8Pv_n2WOJ570/view?usp=drive_link" class="Data">🍿John Wick 3</a></li>
  <li><a href="https://drive.google.com/file/d/17I2FkJPbsr9slrNTRaozaqRfEBKfNF44/view?usp=drive_link" class="Data">🍿La Calle Del Terror 1994 (Parte 1)</a></li>
  <li><a href="https://drive.google.com/file/d/1eQ6kKPCsTTAeFnX1YBPrVvpsNOkYHz7X/view?usp=drive_link" class="Data">🍿La Calle Del Terror 1666 (Parte 3)</a></li>
  <li><a href="https://drive.google.com/file/d/13bnv6Vnn7reULBO1rRzbg88L-sMgSB0X/view?usp=drive_link" class="Data">🍿Maestras Del Engaño</a></li>
  <li><a href="https://drive.google.com/file/d/12Mkx5mj1F4NAgg4WnkNSB_oxBNwurhN5/view?usp=drive_link" class="Data">🍿Misterio A Bordo 1</a></li>
  <li><a href="https://drive.google.com/file/d/19HVNsYh4UnOFkYz6LPX7WYCrM1sIbUvW/view?usp=drive_link" class="Data">🍿No Dormiras</a></li>
  <li><a href="https://drive.google.com/drive/folders/12mvN2GK-dc6jRCyP7QREWV2dkLCc7GBl?usp=drive_link" class="Data">🍿Love And Death Robot 2</a></li>
  <li><a href="https://drive.google.com/drive/folders/10S594Np6EkL7plAU1eOo8-v748hCKsQ1?usp=drive_link" class="Data">🍿Sky Rojo</a></li>
  <li><a href="https://drive.google.com/drive/folders/1-gJb71A-Ou7NwLO6tPoQ7QRehqU9RhM1?usp=drive_link" class="Data">🍿The Umbrella Academy</a></li>
  <li><a href="https://drive.google.com/file/d/1pzpkAK9ZKaHDA6JKV-GYHHvboOixjn1F/view?usp=drive_link" class="Data">🍿A Quiet Place 1</a></li>
  <li><a href="https://drive.google.com/file/d/1pxLUaGt-4G3_XuILYK6vBMnlphIhmnIR/view?usp=drive_link" class="Data">🍿A Quiet Place 2</a></li>
  <li><a href="https://drive.google.com/file/d/1JJCsu5kppnXT-SoQNr0Cfb-FwaCLANdr/view?usp=drive_link" class="Data">🍿Anna</a></li>
  <li><a href="https://drive.google.com/file/d/1CKziC_G6ycyKHaDi3srkFE3tWrBRz2r5/view?usp=drive_link" class="Data">🍿Spell</a></li>
  <li><a href="https://drive.google.com/file/d/1K3cqasxX1a8XhaYPQIh-MCVJOKlDYYva/view?usp=drive_link" class="Data">🍿Disomnia</a></li>
  <li><a href="https://drive.google.com/file/d/1IzkU4790L_aWObqu12h6UsItPuqAeBRL/view?usp=drive_link" class="Data">🍿The Others</a></li>
  <li><a href="https://drive.google.com/file/d/1pDdJrvpfpMd0jmTlgBu4OqlVKNLwnjhI/view?usp=drive_link" class="Data">🍿Identity</a></li>
  <li><a href="https://drive.google.com/file/d/1Y-ecdtPOBv1DJIcgH5PI2a8eT5ZW1UJR/view?usp=drive_link" class="Data">🍿SuperIntelligence</a></li>
  <li><a href="https://drive.google.com/file/d/1pP_dI2n-yTI34K0C4M2H4PCgvqUinlvZ/view?usp=drive_link" class="Data">🍿Maa</a></li>
  <li><a href="https://drive.google.com/file/d/1Go_ft-oLszVS_VPZaKVV39SGRHtPBTsb/view?usp=drive_link" class="Data">🍿Todas Caen</a></li>
  <li><a href="https://drive.google.com/file/d/17kIN60KEyZ_3v7TQrImBXYWC_oFtcEIH/view?usp=drive_link" class="Data">🍿La Calle De Terror 1978 (Parte 2)</a></li>
  <li><a href="https://drive.google.com/file/d/1TUOH8ZAy0c-roOqiZZXNk9G1rFXFKjBZ/view?usp=drive_link" class="Data">🍿La Clasica Historia De Terror</a></li>
  <li><a href="https://drive.google.com/file/d/12LT3wckxoFW6KvODmDYTdEsOjDd_vlvB/view?usp=drive_link" class="Data">🍿La Vieja Guardia</a></li>
  <li><a href="https://drive.google.com/file/d/1-2qUrH62bqvkK-O1H7prhOXFuTaPrqpH/view?usp=drive_link" class="Data">🍿Ricos Y Mimados</a></li>
  <li><a href="https://drive.google.com/file/d/1Vcr3aF7ofRYZlTxGEuc8Yo_11IYN9aT9/view?usp=drive_link" class="Data">🍿Space Jam</a></li>
  <li><a href="https://drive.google.com/file/d/18IQLrAeCn6zmzHgsjbS36hLI116Fqn9Q/view?usp=drive_link" class="Data">🍿Black Widow</a></li>
  <li><a href="https://drive.google.com/file/d/1GaHtGLgSafHTgDDvC9J0m8Bwjwafy043/view?usp=drive_link" class="Data">🍿G I Joe 2</a></li>
  <li><a href="https://drive.google.com/file/d/1GiB9FdVtXp4XjlPQBDy-kSG_KUj9YeZH/view?usp=drive_link" class="Data">🍿G I Joe 1</a></li>
  <li><a href="https://drive.google.com/file/d/17E8-Nf8UMqG8tIHuug22LLT2kzStQXb8/view?usp=drive_link" class="Data">🍿Ghost Shell</a></li>
  <li><a href="https://drive.google.com/file/d/1XpmaZ2SRx0dzgA7z6BTyN8wmpm-YKhfi/view?usp=drive_link" class="Data">🍿Justicia Implacable</a></li>
  <li><a href="https://drive.google.com/file/d/16svGfGuIzj-zeO0uth-BrnNBohuRRcCr/view?usp=drive_link" class="Data">🍿Assassins Creed</a></li>
  <li><a href="https://drive.google.com/drive/folders/19B9YAjCq3lnqyJjFo3AXLbO2qXLWpsji?usp=drive_link" class="Data">🍿Desencanto 3</a></li>
  <li><a href="https://drive.google.com/drive/folders/115jVALMRLC5S4lqaDP9AcDhXBn_6GMsg?usp=drive_link" class="Data">🍿Glitch 2-3</a></li>
  <li><a href="https://drive.google.com/file/d/1CdOP1-qBKj7b4AetZxEy9xMvF5rmS90u/view?usp=drive_link" class="Data">🍿Annabelle 3</a></li>
  <li><a href="https://drive.google.com/drive/folders/1FQSWai0X8wxEBTj7nlvXTB9upTyFaLee?usp=drive_link" class="Data">🍿Stranger Things</a></li>
  <li><a href="https://drive.google.com/drive/folders/1MPFsEDlk5-9ITe9MRJ3FnKspAarRCf0u?usp=drive_link" class="Data">🍿Brickleberry 2</a></li>
  <li><a href="https://drive.google.com/file/d/1BV3Xe0d2PLldPfvzuZRGHILUJi3udSMw/view?usp=drive_link" class="Data">🍿El Conjuro 2</a></li>
  <li><a href="https://drive.google.com/file/d/19iWo9OWy4Hx5O-l9Pid2vZbs3r_-t-FD/view?usp=drive_link" class="Data">🍿El Pasajero 1</a></li>
  <li><a href="https://drive.google.com/file/d/1LYHJf2tdaNuAO_WgF03QSHjv3QC1nbQA/view?usp=drive_link" class="Data">🍿Los Tigres Del Tren</a></li>
  <li><a href="https://drive.google.com/file/d/17mY_FhXKmSpPM_IZ5ZsOhIQXG0DBAPkU/view?usp=drive_link" class="Data">🍿Noe</a></li>
  <li><a href="https://drive.google.com/file/d/1Bs9kfcUHW6uFg8Zx7lUJ13_Mct_WNqDS/view?usp=drive_link" class="Data">🍿Ouija 2</a></li>
  <li><a href="https://drive.google.com/file/d/198_7aNSEjHUWeeHcjIKeFoKq7nDJ5IEx/view?usp=drive_link" class="Data">🍿Proyecto Geminis</a></li>
  <li><a href="https://drive.google.com/file/d/1JSisTbMDiOHhc3ubIiWlxKNSxKmz33rg/view?usp=drive_link" class="Data">🍿Descuida Yo Te Cuido</a></li>
  <li><a href="https://drive.google.com/file/d/1CSpzy9nAiz5bICsLG8XZzH9rDCiJ4nwT/view?usp=drive_link" class="Data">🍿Come Play</a></li>
  <li><a href="https://drive.google.com/file/d/1Hz8tELR3nq2qR5KCnA5ec_EYFcctsnyA/view?usp=drive_link" class="Data">🍿Dolitle</a></li>
  <li><a href="https://drive.google.com/drive/folders/1-4GwvU0NZQC841VR5b_7tEgYz30OZCYh?usp=drive_link" class="Data">🍿Dark (Oscuridad)</a></li>
  <li><a href="https://drive.google.com/drive/folders/15IEe0C_bEs_fI54JwfTLPyrP-Q57CHrN?usp=drive_link" class="Data">🍿Locke & Key 1</a></li>
  <li><a href="https://drive.google.com/drive/folders/14Xa3euoVuJ00gRHw_NIx3ipnsKea_PPi?usp=drive_link" class="Data">🍿Maldita 1 (Cursed)</a></li>
  <li><a href="https://drive.google.com/drive/folders/17TLahMrCfdVIHYFoNEf7zlTXspwRBgFX?usp=drive_link" class="Data">🍿See 1</a></li>
  <li><a href="https://drive.google.com/file/d/183SLvLe-Kj-Gc3sHtQDWfBx2LYSLRRK9/view?usp=drive_link" class="Data">🍿See 2x08 Final</a></li>
  <li><a href="https://drive.google.com/file/d/1cRJinsdJrMlkL5Gn4NWYl4ZJhaJ5kdU_/view?usp=drive_link" class="Data">🍿Attraction 1</a></li>
  <li><a href="https://drive.google.com/file/d/1cQsahyX8kpkC4iScw_fiLB-ZKc9CmAGC/view?usp=drive_link" class="Data">🍿Attraction 2</a></li>
  <li><a href="https://drive.google.com/file/d/19lyBfXFx4tN9bOF9lEfaa0UPCkKeZZ3n/view?usp=drive_link" class="Data">🍿Aladdin</a></li>
  <li><a href="https://drive.google.com/drive/folders/1ZlPMgvfE9iWXnC04PSfJQTAbI0xT6Mxy" class="Data">🍿The Boys 3</a></li>
  <li><a href="https://drive.google.com/drive/folders/11ifcfWpqqv8NcsGQN-ka9n5dooQtD-Fy?usp=drive_link" class="Data">🍿Invencible 1</a></li>
  <li><a href="https://drive.google.com/drive/folders/1T1XBBMU_Nf1h3uP_QtwRrZZpz3oCUkCB?usp=drive_link" class="Data">🍿Ragnarok (Manga)</a></li>
  <li><a href="https://drive.google.com/file/d/1CV1K-A4P-u6ATn9ZwZxhHJGcsJf0hglQ/view?usp=drive_link" class="Data">🍿Cielo Rojo Sangre</a></li>
  <li><a href="https://drive.google.com/file/d/1EBOaTI6Z9qPylUwfgbXveJwf0EyREOUi/view?usp=drive_link" class="Data">🍿Escuela Para Fracasados</a></li>
  <li><a href="https://drive.google.com/file/d/1FwQleXRn1mEPMz7dZy02VJPIZrcBX7Dy/view?usp=drive_link" class="Data">🍿Exam</a></li>
  <li><a href="https://drive.google.com/file/d/1hRwf_PGfuvssWFEmt549vYKGR7lOrAic/view?usp=drive_link" class="Data">🍿Fast & Furious 9</a></li>
  <li><a href="https://drive.google.com/file/d/19GN9piSvoLyI3o-Snm0NefiIBq_BxDlB/view?usp=drive_link" class="Data">🍿FlatLiners</a></li>
  <li><a href="https://drive.google.com/file/d/1F9NLphAKeJN7-asUwbHV3YEKEfVuy-Kf/view?usp=drive_link" class="Data">🍿Gangsterdam</a></li>
  <li><a href="https://drive.google.com/file/d/19PwuHZhAy_TSUcH9LrITGd_c3OmBClws/view?usp=drive_link" class="Data">🍿I Frankestein</a></li>
  <li><a href="https://drive.google.com/file/d/1A_7eADKwqq9mmqYYJM6o-JNaJgbKZnU6/view?usp=drive_link" class="Data">🍿Idiocracy</a></li>
  <li><a href="https://drive.google.com/file/d/1O3_SqWCy9nfbJn3YDU-wfFTsQs1cGyO0/view?usp=drive_link" class="Data">🍿Jolt</a></li>
  <li><a href="https://drive.google.com/file/d/1QJjf3eD4QJvEbh-fJutIMNDj5SqzqTkl/view?usp=drive_link" class="Data">🍿Juguetes Del Terror</a></li>
  <li><a href="https://drive.google.com/file/d/1Ik2hSXldW2enNN_zv96HPMBlvVw9bARa/view?usp=drive_link" class="Data">🍿Justo En La Mira</a></li>
  <li><a href="https://drive.google.com/file/d/1IaaDH-F_L0FhBIGH70SzOLk1EVNuRqZP/view?usp=drive_link" class="Data">🍿Mision Submarino</a></li>
  <li><a href="https://drive.google.com/file/d/1E5hvpFX3hDRK_5zlhUDkp45L9cyZKJ6N/view?usp=drive_link" class="Data">🍿Para Toda La Muerte</a></li>
  <li><a href="https://drive.google.com/file/d/14zz9KcMBiZy65qIre8-IhRPk12K3rGAV/view?usp=drive_link" class="Data">🍿Queen Of Spades</a></li>
  <li><a href="https://drive.google.com/file/d/1K3WLCwPLL-gXm7Z_tyRg3mXvlSTgO8pv/view?usp=drive_link" class="Data">🍿South Park 1 Post Covid</a></li>
  <li><a href="https://drive.google.com/file/d/1Mox6s3q0VMflHKnWeacOJZxekYbvnYEy/view?usp=drive_link" class="Data">🍿Animales Fantasticos 3</a></li>
  <li><a href="https://drive.google.com/file/d/17bIvBRDyKiwkxswDTcHcu_LnuMafhgpz/view?usp=drive_link" class="Data">🍿The House</a></li>
  <li><a href="https://drive.google.com/file/d/1CIACwvtWe4y2m_4v-28XqYxzYtaNnWT8/view?usp=drive_link" class="Data">🍿The Mummy</a></li>
  <li><a href="https://drive.google.com/file/d/1PO9itknk_ptZ56TjXKNJ4R44JcpsjDSH/view?usp=drive_link" class="Data">🍿The Other Bodyguard 1</a></li>
  <li><a href="https://drive.google.com/file/d/16vEtXqseuW4fRWGWzDHVEpy034ddw3tY/view?usp=drive_link" class="Data">🍿Winchester</a></li>
  <li><a href="https://drive.google.com/drive/folders/1l7zbz6BmPeuDy-wUD5zalr7Wzff6UdD6?usp=drive_link" class="Data">🍿Black Mirror</a></li>
  <li><a href="https://drive.google.com/drive/folders/1-8Skdo4D5fcRMAo9AwrFK-1TbRYFGm1o?usp=drive_link" class="Data">🍿Aida 5</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZe7zb0ZhM3frcxWmmjQrx4vp3qQMLCiavM7#folder=21724266003&tpl=publicfoldergrid" class="Data">🍿Feria</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZe7zb0ZhM3frcxWmmjQrx4vp3qQMLCiavM7#folder=21193801742&tpl=publicfoldergrid" class="Data">🍿El Problema De Los 3 Cuerpos</a></li>
  <li><a href="https://share.vidyard.com/watch/uzF7WK6uYXPnQ7Ld7KWZVq?autoplay=1" class="Data">🍿Atom Eve</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZdkdB0ZlLNo2InvaXRxGK3K0qfI7pq9MNnk" class="Data">🍿La Sociedad Americana De Negros Magicos</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZE94s0Z8iWOAMbAAjz6k1TY1kzo2uUddDUV" class="Data">🍿Die Hart 2</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZwfl40ZWTA1uCF2Fkf0lGD9hdOuy71y43J7" class="Data">🍿Sentencia De Muerte (Beekeeper)</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZlCub0ZggmeCSMu8AH4eEKOq03YaJEYsQuX#folder=22064707390&tpl=publicfoldergrid" class="Data">🍿Avatar The Last AirBender</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZTaLh0ZLlefprzN92Q9fwlHUHm4r43o2j8k" class="Data">🍿BagHead</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZgf6b0ZyFzTokBxspHlNRu2smI0KSW0pRAV" class="Data">🍿Damsel</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZtm8s0ZseM5DB9ByKL1amwFX4opmjAwxGIX" class="Data">🍿Die Hart 1</a></li>
  <li><a href="https://drive.google.com/drive/folders/131eNGxfwhwZa8X8ITm2HXgb3hIh8FMQE?usp=drive_link" class="Data">🍿Citadel 1</a></li>
  <li><a href="https://drive.google.com/drive/folders/1JujLRY854GDDhj4j45azIz_nbMoMoj84?usp=drive_link" class="Data">🍿Penny Dreadful</a></li>
  <li><a href="https://drive.google.com/drive/folders/1bD4f2PzhLmFRTmolJK2M5dTe9otD4lvq?usp=drive_link" class="Data">🍿SpiderWick Chronicles</a></li>
  <li><a href="https://share.vidyard.com/watch/FgnhzVqz3puayFQd93ZTSc?autoplay=1" class="Data">🍿El Septimo Hijo</a></li>
  <li><a href="https://share.vidyard.com/watch/ds3ivhpMYv2rtiVXQ9jWES?autoplay=1" class="Data">🍿Nunca Me Encontraras</a></li>
  <li><a href="https://share.vidyard.com/watch/GgnhpxV27gPbwwp55zGx94?autoplay=1" class="Data">🍿Black Friday</a></li>
  <li><a href="https://share.vidyard.com/watch/2VwBjc6uMy49NxtC2ueB3U?autoplay=1" class="Data">🍿Lift</a></li>
  <li><a href="https://share.vidyard.com/watch/eza4vjVDwzoof7JW1xw33N?autoplay=1" class="Data">🍿Contra Todos</a></li>
  <li><a href="https://share.vidyard.com/watch/AFhHLkS77N3KRuffLd8eQY?autoplay=1" class="Data">🍿El Primer Amen</a></li>
  <li><a href="https://share.vidyard.com/watch/u5RmAERC77LwCU9EgCps55?autoplay=1" class="Data">🍿Atlas</a></li>
  <li><a href="https://share.vidyard.com/watch/FSZJHaWsX3xEEwo7oyCqTp?autoplay=1" class="Data">🍿Logan Wolverine</a></li>
  <li><a href="https://share.vidyard.com/watch/zRUp4igoEaiQNd42oK2nbJ?" class="Data">🍿Dune 2</a></li>
  <li><a href="https://share.vidyard.com/watch/F9kTdpRdfELWKvGSQZVrS1?" class="Data">🍿No Tengas Miedo</a></li>
  <li><a href="https://share.vidyard.com/watch/9rFjJx4Q886KrLDF2wXy9r?" class="Data">🍿The Creator</a></li>
  <li><a href="https://share.vidyard.com/watch/DgGzfbZ5VAPwAYcwcpamtU?" class="Data">🍿El Gato Con Botas</a></li>
  <li><a href="https://share.vidyard.com/watch/s2anhRuF3shTtiut39y9xB?" class="Data">🍿The Equalizer 3</a></li>
  <li><a href="https://share.vidyard.com/watch/rxE8eJVLCv5Da67ksXxrrj?" class="Data">🍿Five Nights At Freddys</a></li>
  <li><a href="https://share.vidyard.com/watch/SPuKBKqxeE6TGQ2g1T3Se3?" class="Data">🍿Caceria En Venecia</a></li>
  <li><a href="https://share.vidyard.com/watch/jieofkcScoE1B41ayxXjuL?" class="Data">🍿Mision Imposible 7.1</a></li>
  <li><a href="https://share.vidyard.com/watch/vdWBBcNVRjEZkB2dzr3cxp?" class="Data">🍿Life</a></li>
  <li><a href="https://share.vidyard.com/watch/QjPKP24o93Qw2AJec69Vbu?" class="Data">🍿La Puerta Secreta</a></li>
  <li><a href="https://share.vidyard.com/watch/S7YKk81VTunmAMhERQfwDs?" class="Data">🍿Saw X</a></li>
  <li><a href="https://share.vidyard.com/watch/Zt1ZsRqQKz51SBqaLjrSYp?" class="Data">🍿El Exorcista (2023)</a></li>
  <li><a href="https://share.vidyard.com/watch/VjYVzUJKApZVDsPkvTiRGG?" class="Data">🍿Hypnotic</a></li>
  <li><a href="https://share.vidyard.com/watch/NGvaen3n4VvQyyxv9gjkxD?" class="Data">🍿La Mansion Encantada</a></li>
  <li><a href="https://share.vidyard.com/watch/AnfQ6XWnvJmsebhvBtYWsq?" class="Data">🍿Relive</a></li>
  <li><a href="https://share.vidyard.com/watch/8cqJsPGrSHBrkJsksYHrun?" class="Data">🍿Renfield</a></li>
  <li><a href="https://drive.google.com/drive/folders/131eJb8PVBJBDbpKyIv9-26XGNriTXXkB?usp=drive_link" class="Data">🍿Desencanto 1-2</a></li>
  <li><a href="https://share.vidyard.com/watch/rPFxHKNYu2hfALQ8Hy2vQo?" class="Data">🍿HellHole</a></li>
  <li><a href="https://share.vidyard.com/watch/vhw4LKK5oSMXUQrzSCNXoS?" class="Data">🍿Nadie Podra Salvarte</a></li>
  <li><a href="https://share.vidyard.com/watch/SL1UZVdhC1QU3NGPVxUhA9?" class="Data">🍿Blue Beetle</a></li>
  <li><a href="https://share.vidyard.com/watch/P26AgMCzz3HjYDJi7uZ9Ty?" class="Data">🍿Kong & Godzilla</a></li>
  <li><a href="https://share.vidyard.com/watch/xYErcRHDxHjJuYiSWk9RR7?" class="Data">🍿The Marvels</a></li>
  <li><a href="https://share.vidyard.com/watch/Mydq1NQAvgAprbDHWgD3q8?" class="Data">🍿Rebel Moon 2</a></li>
  <li><a href="https://share.vidyard.com/watch/GpdE61ctqbCG3RLkb5e8M7?" class="Data">🍿Abigail</a></li>
  <li><a href="https://share.vidyard.com/watch/weoJnhEoiSaVrQcDHjmGfq?" class="Data">🍿Madame Web</a></li>
  <li><a href="https://share.vidyard.com/watch/AcDSU1LJ6uXoM9MEoSGShQ?" class="Data">🍿La Conferencia</a></li>
  <li><a href="https://share.vidyard.com/watch/GLo4iVfnCRonYYiR6gZ46u?" class="Data">🍿The Kill Room</a></li>
  <li><a href="https://share.vidyard.com/watch/SuF5iq3pYAd4jxiHYfWmLQ?" class="Data">🍿Los Asesinos De La Luna</a></li>
  <li><a href="https://share.vidyard.com/watch/PRtyAVEbYJrMx7UYaunx3F?" class="Data">🍿Aquaman 2</a></li>
  <li><a href="https://share.vidyard.com/watch/yNED9KjYVAJoKVbkTJ4w7i?" class="Data">🍿Cadaver</a></li>
  <li><a href="https://share.vidyard.com/watch/nmQrZQ9hw3SoaNv8tH6QAA?" class="Data">🍿South Park 3</a></li>
  <li><a href="https://share.vidyard.com/watch/nhgsRUm9QAFKAe6BXRRRqU?" class="Data">🍿Relax</a></li>
  <li><a href="https://share.vidyard.com/watch/zNcp4aTyGgDEK4tjCW5FQH?" class="Data">🍿Rebel Moon 1</a></li>
  <li><a href="https://share.vidyard.com/watch/niKdokT7vVJ7t7CSDenH3s?" class="Data">🍿Hablame</a></li>
  <li><a href="https://share.vidyard.com/watch/DNxNXVHrfEHq9cSQCxTctX?" class="Data">🍿Dejar El Mundo Atras</a></li>
  <li><a href="https://share.vidyard.com/watch/r2e6DWBtAitdL6xVLqHYYa?" class="Data">🍿El Hogar De Miss Peregrine</a></li>
  <li><a href="https://share.vidyard.com/watch/YTDDHKX1ot4LAwatHYiBhe?" class="Data">🍿Jung_E</a></li>
  <li><a href="https://share.vidyard.com/watch/k4hDVazRShTurPR2Wm9vmi?" class="Data">🍿Venus</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=kZlCub0ZggmeCSMu8AH4eEKOq03YaJEYsQuX#folder=22071115816&tpl=publicfoldergrid" class="Data">⚙️La Movie Apps⚙️</a></li>
  <li><a href="https://drive.google.com/drive/folders/1-aiBDqtDm8F3aqzWS68VA0TIKn_lEdbI" class="Data">🍿Futurama</a></li>
  <li><a href="https://drive.google.com/file/d/102H5bd-h4_BIII9bqhH89huFYhaPEI9P/view?usp=drivesdk" class="Data">🍿Avengers End Game</a></li>
   <li><a href="https://drive.google.com/file/d/1lYiJZNYv83lutXM_I4EMe_vT-WszAhM-/view?usp=drivesdk" class="Data">🍿Asylum</a></li>
  <li><a href="https://drive.google.com/file/d/11ezbIXCh-G8XGanfdBkcBTEuaK6t_zqC/view?usp=drive_link" class="Data">🍿HellBoy</a></li>
  <li><a href="https://drive.google.com/file/d/11pHR3sxk-Yb7meZqbz8RD5nMVhb-Rx46/view?usp=drive_link" class="Data">🍿Spiderman No Way Home</a></li>
  <li><a href="https://drive.google.com/file/d/11vYw1DB7nuDExNvvn5-ZqAyU5zD8Sk_d/view?usp=drive_link" class="Data">🍿No Mires Arriba</a></li>
  <li><a href="https://drive.google.com/folderview?id=1ofhqc_aF5qVWEUgH1aIc1SE4eiIqvMOZ" class="Data">🍿The Witcher 2</a></li>
  <li><a href="https://drive.google.com/file/d/1MUgaQtz6J5wJ49G844VDOye8Ri4Y31-g/view?usp=drive_link" class="Data">🍿El Sistema K E OPS</a></li>
  <li><a href="https://drive.google.com/file/d/1vlScjrLRWtTFG-Dqu8uz6KdejL1HHZbq/view?usp=drive_link" class="Data">🍿Dr Strange 2</a></li>
  <li><a href="https://drive.google.com/file/d/1RWp8IIMnufsftfDbEXo038ID9qLqaCIi/view?usp=drive_link" class="Data">🍿La Ciudad Perdida</li>
  <li><a href="https://drive.google.com/file/d/1R8J_tzvdzbKs34LdQlPavCdnbuPuXc4E/view?usp=drive_link" class="Data">🍿Memory</a></li>
  <li><a href="https://drive.google.com/file/d/1DaT8euWjr84q2nG3DtCQYaapRac-dFHS/view?usp=drive_link" class="Data">🍿Tren Bala</a></li>
  <li><a href="https://drive.google.com/file/d/1hV6eC_ca5HaVi02E0xCS4c2J-Zcgj_Te/view?usp=drive_link" class="Data">🍿Inception</a></li>
  <li><a href="https://drive.google.com/folderview?id=1pDyCtIehdTkSn920uIxMhtdHWhkkUvPa" class="Data">🍿Locke & Key 2</a></li>
  <li><a href="https://drive.google.com/drive/folders/1QaqhtNVHSKjm9JpDTsQrToFOoIHbTylI" class="Data">🍿Stranger Things 4</a></li>
  <li><a href="https://drive.google.com/drive/folders/1xza8b-oJev3i3m9J8_hboSB5JDg_lssZ" class="Data">🍿WestWorld 4</a></li>
  <li><a href="https://drive.google.com/drive/folders/1JE_stMQdixzGOwDaOm4ip0F6MsZTGcjA" class="Data">🍿Love And Death Robot 1</a></li>
  <li><a href="https://drive.google.com/drive/folders/1JJdQXs30vfZ-JP1sU3prrqD1qKPDI51c" class="Data">🍿Love And Death Robot 3</a></li>
  <li><a href="https://drive.google.com/drive/folders/1seR4MPUA5WDyJQceb_SBzbtFeTDzLCA8" class="Data">🍿Inside Job 1</a></li>
  <li><a href="https://drive.google.com/drive/folders/1HpOPpxhGqiMCO9Xphh9PdsT9kyhucy6C" class="Data">🍿El Juego Del Calamar</a></li>
  <li><a href="https://drive.google.com/drive/folders/1-X2MLSZdtYfProOFIV02G1trzTCqD7gJ" class="Data">🍿La Casa De Papel 5.1</a></li>
  <li><a href="https://drive.google.com/file/d/1rUOwWmzY0anQmQGgG6aT9r7wcUPd6WMv/view?usp=drivesdk" class="Data">🍿Fauces De La Noche</a></li>
  <li><a href="https://drive.google.com/drive/folders/1qfteKvFm4i0WkKTR58FILA2DXyuKtdEn" class="Data">🍿See 2</a></li>
  <li><a href="https://drive.google.com/file/d/1GXTGu6-u2tfNpVLIMe2cQopnHTGLT3K4/view?usp=drivesdk" class="Data">🍿Alerta Roja</a></li>
  <li><a href="https://drive.google.com/file/d/1pzFLZwwmmIVERWVWGpBY5qQbVCLK--kJ/view?usp=drivesdk" class="Data">🍿Dune 1</a></li>
  <li><a href="https://drive.google.com/file/d/1rUk3v2LS8lc0hJYnc0iWkwiMJOQlVZ_d/view?usp=drivesdk" class="Data">🍿Hipnotico</a></li>
  <li><a href="https://drive.google.com/file/d/14xqPt1BKTORRLwXUu1G2kJbVZizMdGsy/view?usp=drivesdk" class="Data">🍿La Hierba Alta</a></li>
  <li><a href="https://drive.google.com/file/d/1RXgrXUVk6OgZ-4iq5rlq1ijpKmQ54v1N/view?usp=drivesdk" class="Data">🍿La Leyenda De Los Diez Anillos</a></li>
  <li><a href="https://drive.google.com/file/d/15_bZQwUDQ_gowPfazzVED7YTo1naUw5a/view?usp=drivesdk" class="Data">🍿Mortal Kombat</a></li>
  <li><a href="https://drive.google.com/file/d/1XXuLDeqV6xqeC_AAkLsAJoD68L0FRaSz/view?usp=drivesdk" class="Data">🍿The House Next Door</a></li>
  <li><a href="https://drive.google.com/file/d/1psSUnjkUb-aOYxdJv1r4Uzm4nUD8seWH/view?usp=drivesdk" class="Data">🍿Venom 2</a></li>
  <li><a href="https://drive.google.com/file/d/1bFae8drGS9nSR1O0TV_bCpjkhHg7KaAa/view?usp=drivesdk" class="Data">🍿Polaroid</a></li>
  <li><a href="https://drive.google.com/file/d/1-6i8ffNMlZl5b9J-FAxRauGodyIU6XcV/view?usp=drivesdk" class="Data">🍿Annabelle 2</a></li>
  <li><a href="https://drive.google.com/file/d/1-12F5HL5JJPPQufZfNNU6guSE8ocdSSz/view?usp=drivesdk" class="Data">🍿A Ciegas</a></li>
  <li><a href="https://drive.google.com/file/d/1U7MQOs62aFnScbDJqj5dgMb5KPONO60W/view?usp=drivesdk" class="Data">🍿Escape Room 2</a></li>
  <li><a href="https://drive.google.com/file/d/1-5VfDw2Ij076BJWqDu-u5lR4ft1aIKaq/view?usp=drivesdk" class="Data">🍿La Hora De Tu Muerte</a></li>
  <li><a href="https://vimeo.com/565171606" class="Data">🍿Si No Despierto</a></li>
  <li><a href="https://drive.google.com/file/d/10YkLs2TaXWYN_TOLTEZVBgdnJ1QH04mI/view?usp=drivesdk" class="Data">🍿Dr Sueño</a></li>
  <li><a href="https://drive.google.com/file/d/10P5GvZnsxF9svYCi6dlHUdeVcha0d8lN/view?usp=drivesdk" class="Data">🍿Jack El Caza Gigantes</a></li>
  <li><a href="https://drive.google.com/file/d/10X21ZKVSBhcRCSFjaHt-LhCApMSgxjP1/view?usp=drivesdk" class="Data">🍿Geotormenta</a></li>
  <li><a href="https://drive.google.com/file/d/108vQFtcd8-N1mbTLHb5DqKIU_SJRGBaf/view?usp=drivesdk" class="Data">🍿Kingsman 1</a></li>
  <li><a href="https://drive.google.com/file/d/1-_CqjxhKKTISJ_k7fMZZyFT3FVMDqygY/view?usp=drivesdk" class="Data">🍿Kingsman 2</a></li>
  <li><a href="https://drive.google.com/file/d/13Mcr2JWeYJ13t0FmtMKYLPMtARyKPmsz/view?usp=drivesdk" class="Data">🍿Mama O Papa</a></li>
  <li><a href="https://drive.google.com/file/d/1-Sl2gzf4NiyPuQadBvWIvkcb4JrI3y7p/view?usp=drivesdk" class="Data">🍿Resident Evil</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZSVNR0ZsRoxywYzNLuDXGotKMCaSRb2LARy" class="Data">🍿 Imaginario</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZMJbiVZ2ysLWtLqjvyYfR9siJQVRJgpU1p7" class="Data">🍿La Monja 2</a></li>
  <li><a href="https://drive.google.com/file/d/15vB1YAdyImhtboPr7DZgvKGfn9kI8ywA/view?usp=drivesdk" class="Data">🍿Madre Androide</a></li>
  <li><a href="https://drive.google.com/file/d/1ttiXVylblbagn978HOffB2FzoNhL5k0M/view?usp=drivesdk" class="Data">🍿Old (Viejo)</a></li>
  <li><a href="https://drive.google.com/drive/folders/10ZKyHSmKpyxX6fZC3JgS4pn3gx1wXw2P" class="Data">🍿Rumbo Al Infierno</a></li>
  <li><a href="https://drive.google.com/file/d/1-S1cQIEkaOhWvUtNegdJxEaYIWeXj-WH/view?usp=drivesdk" class="Data">🍿DeepCity</a></li>
  <li><a href="https://drive.google.com/file/d/1-0za_QIpC4pDzV6jSQC_cSO1UWVhjduc/view?usp=drivesdk" class="Data">🍿 Oxigeno</a></li>
  <li><a href="https://drive.google.com/file/d/10SomjYz_PneoLmeydTr4q5cZppBVbFde/view?usp=drivesdk" class="Data">🍿Super Me</a></li>
  <li><a href="https://drive.google.com/file/d/1-4Y3E42uALIeiCtl3UD1nyHm_Q7Yj8b1/view?usp=drivesdk" class="Data">🍿Matrix Resurrections</a></li>
  <li><a href="https://drive.google.com/file/d/1B2LwKRkcyDnJWK2a8MhkJDufw6FRLK1N/view?usp=drivesdk" class="Data">🍿Held</a></li>
  <li><a href="https://drive.google.com/drive/folders/1mr2LJZ9RQM6_DwFVovGwKFrZ4LBiRCgb" class="Data">🍿Dr Brain</a></li>
  <li><a href="https://drive.google.com/drive/folders/1YkejexkdMr0wn6J0Dt1UdVqxEc9stv3t" class="Data">🍿La Casa De Papel 5.2</a></li>
  <li><a href="https://drive.google.com/drive/folders/1b07buXbscHTDh88azuy7n6K85qybHl-U" class="Data">🍿Super Crooks</a></li>
  <li><a href="https://drive.google.com/drive/folders/1-Hec_SSWsm2ctbiSxUVCl96VmN3KyyZO" class="Data">🍿La Rueda Del Tiempo 1</a></li>
  <li><a href="https://drive.google.com/file/d/1lXmq-Jn_KHQTRoqeEBd8ML60wIHMr_Lb/view?usp=drivesdk" class="Data">🍿Asylum Horror Tales</a></li>
  <li><a href="https://drive.google.com/file/d/1j3CSilpfM8dvaW6baZULHpwRXzgE3T0H/view?usp=drivesdk" class="Data">🍿Donde Caben Dos</a></li>
  <li><a href="https://drive.google.com/file/d/1ev-voXNqhdUzOQ5u7JURiTEGTtpiE2qn/view?usp=drivesdk" class="Data">🍿G I Joe 3 Snake Eyes</a></li>
  <li><a href="https://drive.google.com/file/d/1l9vJJEfDNNzp00Rb429CVc0Wvt4vRqT0/view?usp=drivesdk" class="Data">🍿Vampiros Vs El Bronx</a></li>
  <li><a href="https://drive.google.com/file/d/1-slWJEMQjqWmcf-ZbRG3ICWpskHduibf/view?usp=drivesdk" class="Data">🍿La Mujer Maravilla 1</a></li>
  <li><a href="https://drive.google.com/file/d/10NA4QvX0Gr2F7T0dU_j2tjGo5vMRPMAz/view?usp=drivesdk" class="Data">🍿La Mujer Maravilla 2</a></li>
  <li><a href="https://drive.google.com/file/d/1K0LY5HidsPc0CKhg2DYjOzpjnJ-zvzMp/view?usp=drivesdk" class="Data">🍿Ready Player One</a></li>
  <li><a href="https://drive.google.com/file/d/1KLq6NADghQJ08M-agO_7YLqoXSxtDEup/view?usp=drivesdk" class="Data">🍿Eternals</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZ7Q5p0ZfuR2eQraE15pJ9ngFkVwg0dyHf6k" class="Data">🍿Argylle</a></li>
  <li><a href="https://vimeo.com/875398889?share=copy" class="Data">🍿Expend4bles</a></li>
  <li><a href="https://drive.google.com/file/d/1KTy1otFV2kP7TjnARhfsiaJvBJFfbeOi/view?usp=drivesdk" class="Data">🍿Escuadron 6</a></li>
  <li><a href="https://vimeo.com/565184591" class="Data">🍿Hitman</a></li>
  <li><a href="https://drive.google.com/file/d/14tCq2VlhiP78KL4-V5uiFLH2y5-0OhLx/view?usp=drivesdk" class="Data">🍿Fiesta De Empresa</a></li>
  <li><a href="https://u.pcloud.link/publink/show?code=XZ4wF20ZdEbHXVuD6EQ8VkM5FFGvnBgGO5MX" class="Data">🍿South Park (2024)</a></li>
  <li><a href="https://drive.google.com/file/d/14n-3SiNFegq-50WqJ0EddfmisBoV-d9q/view?usp=drivesdk" class="Data">🍿Hotel Transylvania 4</a></li>
  <li><a href="https://drive.google.com/file/d/127f2MOqAviF3fiNXP0ewXu6EA3nCqmCR/view?usp=drivesdk" class="Data">🍿Los Locos Addams 2</a></li>
  <li><a href="https://share.vidyard.com/watch/goaK9CpkwALc6wMALX8XWq?" class="Data">🍿Un Detective Suelto En Hollywood 4</a></li>
  <li><a href="https://imagenuniversaltv.net:3771/live/iutvlive.m3u8" class="Data">📺Universal-Img Tv</a></li>
  <li><a href="https://drive.google.com/file/d/1JSub0W-ieTSGolShmHgYHYeOzn9Qwiq2/view?usp=drivesdk" class="Data">🍿Observados</a></li>
  <li><a href="https://drive.google.com/file/d/1NCDSC_xcgQnH-X-EiToNlG5b6ldbVCfr/view?usp=drivesdk" class="Data">🍿 Evil Dead 1</a></li>
  <li><a href="https://drive.google.com/file/d/1PnObRCUoUECtB-TMNE7TBgrTInQl76T9/view?usp=drivesdk" class="Data">🍿El Bar</a></li>
  <li><a href="https://drive.google.com/file/d/1hMBpk83kbgUUa-4-pdMuyGIkAcXJgg4J/view?usp=drivesdk" class="Data">🍿Verdad O Reto</a></li>
  <li><a href="https://lamovie.github.io/HEROES/" class="Data">🍿Heroes</a></li>
  <li><a href="https://drive.google.com/file/d/1jqHmSdsdd1SyvqJuHhwp9B5x4E4QaR5n/view?usp=drivesdk" class="Data">🍿El Astronauta</a></li>
  <li><a href="https://drive.google.com/file/d/1kDpXxuLzNpR4GqLFKYq_3ZIVItSEmDNy/view?usp=drivesdk" class="Data">🍿Bad Boys 4</a></li>
  <li><a href="https://drive.google.com/file/d/1X8lkdllwCh1Fm53iMg-24fsq0irex8UA/view?usp=drivesdk" class="Data">🍿Deadpool 3</a></li>
  <li><a href="https://drive.google.com/drive/folders/1DGkZqf7DPtm-6mJJzdQGNlD95H-oPOYG" class="Data">🍿Umbrella Academy 4</a></li>
  <li><a href="https://lamovie.github.io/DARK-TV/" class="Data">📺Dark Play Tv</a></li>
  <li><a href="https://lamovie.github.io/BASS-NATION-TV/" class="Data">📺Bass Nation Tv</a></li>
  <li><a href="https://lamovie.github.io/X-TV-/" class="Data">📺X Tv</a></li>
  <li><a href="https://drive.google.com/file/d/1JHxuQ54F182yR5L2gW0A4Zr1M2cveHpV/view?usp=drivesdk" class="Data">🍿Mi Villano Favorito 4</a></li>
  <li><a href="https://drive.google.com/file/d/14gGqw3swLR5cQQGWihePubMRSQ2bRRuz/view?usp=drivesdk" class="Data">🍿A Quiet Place 3</a></li>
  <li><a href="https://drive.google.com/file/d/1uouT0f5TZkIf1LlcUvb3tLZP-fY5YKwB/view?usp=drivesdk" class="Data">🍿Jackpot</a></li>
  <li><a href="https://drive.google.com/file/d/1LfsWbb-mTU4dAlzbxiA_luijxn0GsgjU/view?usp=drivesdk" class="Data">🍿 Longlegs El Coleccionista De Almas</a></li>
  <li><a href="https://drive.google.com/file/d/1DJLbYQdjGhw3rfhNxITsujKNiWrItzVO/view?usp=drivesdk" class="Data">🍿La Trampa</a></li>
 <li><a href="https://drive.google.com/file/d/1vd5CthQTgfHJnhJPd6ZH0dG70L1L2uRv/view?usp=drivesdk" class="Data">🍿 Late Night With The Devil</a></li>
  <li><a href="https://drive.google.com/file/d/1k808AShst6k1eLfvBbnlxScEypxFxttL/view?usp=drivesdk" class="Data">🍿El Hombre De Los Sueños</a></li>
  <li><a href="https://drive.google.com/file/d/15Xxhy5gW39sWXJB65cyZYNFNxfCJHEGe/view?usp=drivesdk" class="Data">🍿 The Killer</a></li>
  <li><a href="https://drive.google.com/drive/folders/18djiKUm4Znpv9fpptyWa9He0na4xBxey" class="Data">🍿Kaos</a></li>
  <li><a href="https://drive.google.com/drive/folders/1AeP5Qb-w6Zb15w2joUHCLEN1WhK0loac" class="Data">🍿Anillos De Poder 2</a></li>
  <li><a href="https://drive.google.com/drive/folders/1Eb0Hqh5ciz_lriSqSBWcfP9NWTECv9t9" class="Data">🍿Agatha En Todas Partes 1</a></li>
  <li><a href="https://drive.google.com/file/d/1KXDO89HmDOjYf7Zmw83G54qW6nIiNcUM/view?usp=drivesdk" class="Data">🍿Parpadea Dos Veces</a></li>
  <li><a href="https://drive.google.com/file/d/1TC0MlmPnBVvddiRVL07IBiUeyRXebtqp/view?usp=drivesdk" class="Data">🍿El Hoyo 2</a></li>
  <li><a href="https://drive.google.com/file/d/1tByfyOr1-bEfUgbWARhcSVHBDyPx5P-j/view?usp=drivesdk" class="Data">🍿Salem s Lot</a></li>
  <li><a href="https://drive.google.com/file/d/1eZBWXV0e4H8CdDhFYfMxB7_oPAOX88ky/view?usp=drivesdk" class="Data">🍿No Te Sueltes</a></li>
  <li><a href="https://drive.google.com/file/d/1um6g1ATDsUX1seOn1s_k41raQkeQP6K_/view?usp=drivesdk" class="Data">🍿Hellboy 4</a></li>
  <li><a href="https://drive.google.com/file/d/1hImOW7eNLN5fGLZyDXMCBvD6UpuC_yyQ/view?usp=drivesdk" class="Data">🍿Smile 2</a></li>
  <li><a href="https://drive.google.com/file/d/1P6v-hetMpopMjz_SWeD7TKm9J7wve0Ct/view?usp=drivesdk" class="Data">🍿Beetlejuice 2</a></li>
  <li><a href="https://drive.google.com/file/d/10Hv-B3zOtGj85FUOXIo3FQFn9Ti_QkIr/view?usp=drivesdk" class="Data">🍿Alice</a></li>
  <li><a href="https://drive.google.com/drive/folders/1IMyk5TgrACc3_HDMQDFAqCaOvY2O6qlA" class="Data">🍿From</a></li>
  <li><a href="https://drive.google.com/file/d/1mWUVNFyGjPSceiRu7Jj12msIaZRdYbqn/view?usp=drivesdk" class="Data">🍿 Avengers La Era De Ultron</a></li>
  <li><a href="https://drive.google.com/drive/folders/1WiGhKEqkjqXIS9NwWdUAPGbZ4yXbBscZ" class="Data">🍿Aida 6</a></li>
  <li><a href="https://drive.google.com/drive/folders/1yPCOh-1_Apnx_1U7w0_BdOG5AQYg3MJ0" class="Data">🍿Aida 8</a></li>
  <li><a href="https://drive.google.com/file/d/1YN3y0cDubKVSZGNykXrIsVyf1fRALOBP/view?usp=drivesdk" class="Data">🍿Mas Dura Sera La Caida</a></li>
  <li><a href="https://drive.google.com/file/d/1ZjWemm3wMKkjs4k3YSVb2F1QeVUMYppi/view?usp=drivesdk" class="Data">🍿Venom 3</a></li>
  <li><a href="https://drive.google.com/file/d/1EhJMQdYh_gIpk_miJOW6QHBH-e3XSDCr/view?usp=drivesdk" class="Data">🍿Heretic</a></li>
  <li><a href="https://drive.google.com/file/d/1E1AprgH-FruccueU-9HSwcZ0_pPAxFbC/view?usp=drivesdk" class="Data">🍿Red One</a></li>
  <li><a href="https://drive.google.com/file/d/1a674Ccso4wS99zKICv6e83qWdtR8qVS3/view?usp=drivesdk" class="Data">🍿57 Segundos</a></li>
  <li><a href="https://drive.google.com/file/d/1OHtD9EJsNpzq9f3enjUwNobqWAZrGzRm/view?usp=drivesdk" class="Data">🍿Nosferatu</a></li>
  <li><a href="https://drive.google.com/file/d/1noIE34Zh0QDTfJAzTD9bzyG_6dMVyxj0/view?usp=drivesdk" class="Data">🍿Kraven</a></li>
  <li><a href="https://drive.google.com/file/d/1bsZ10vfq5xNuV-qbQy6_6sc4QN_bEvLw/view?usp=drivesdk" class="Data">🍿Compañera Perfecta</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
  <li><a href="" class="Data">🍿</a></li>
        </ul>
           </div>
</section>
<img id="No" src="https://bit.ly/3y2BVCO"/>
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
     
     