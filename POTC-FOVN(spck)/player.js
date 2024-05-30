const tong = document.querySelector('#tong')
async function fetchAndDisplaySingleProduct() {
  const playerId = new URLSearchParams(window.location.search).get('id')
  const response = await fetch(`player.json`);
  const player = await response.json();
  const selectPlayer = player.filter(item => item.id == playerId)
  
  displayPlayer(selectPlayer[0]);
}
function displayPlayer(player) {
  tong.innerHTML = `
    <div id="in4">
    <div id="left">
           <div id="icon">
            <h1>
                <img src="" alt="">
                <b>${player.name}</b>
            </h1>
           </div>
           <div id="mua">
               <a href="">  <b>ICON</b></a>
                <a href="" id="hinh"><b>${player.nuoc}</b>
                    <img src="${player.flag}" alt="">
                </a>
                    
            </div>
          </div>
            <div id="mid">
              <div id="vitri">
                <span>
                    <b>${player.vitri}</b>
                    <i>${player.ovr}</i>
                </span>
            </div>
            <div id="tien">
              <b>
                Giá tiền: <span>${player.gia}</span>
              </b>
             </div>
            </div>
    
   </div>
   <div id="imgs">
     <img src="${player.img}" alt="">
 </div>
</div>

    `
}
fetchAndDisplaySingleProduct();