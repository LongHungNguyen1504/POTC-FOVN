let listPlayerHtml = document.querySelector('.tong')
const addDataToHtml = (tong) => {
  if (tong.length > 0) {
    tong.forEach(player => {
      let newPlayers = document.createElement('div');
      newPlayers.classList.add('cauthu');
      newPlayers.innerHTML = `

      <div id="anh">
        <span>${player.vitri}</span>
        <img src="${player.img}" alt="">
      </div>
      <div id="name">
        <div id="name-left">
          <div id="nem">
            <img src="" alt="">
            <a class="nem1" href="player.html?id=${player.id}">${player.name}</a>
          </div>
          <div id="chiso">
            <span>
              <b>${player.vitri}</b>
              <i>${player.chiso}</i>
            </span>
            <span>
              <b>${player.vitriphu}</b>
              <i>${player.chisophu}</i>
            </span>

          </div>
        </div>
      </div>
      <div id="name-right">
        <img src="./images/icons.png" alt="">
      </div>
      <div id="so">
        <div id="luong">
          <b>${player.luong}</b>
        </div>
        <div id="ovr">
          <b>${player.chiso}</b>
        </div>
        <div id="sta">
          <b>${player.sta}</b>
        </div>
      </div>
    </div>
      `;
      listPlayerHtml.appendChild(newPlayers)
    })
  }
}

const initApp = () => {
  fetch('select.json')
    .then(response => response.json())
    .then(data => {
      listPlayers = data;
      addDataToHtml(listPlayers);
    })
}
initApp();
function searchPlayer(){
  let search_player = document.getElementById("in4cauthu").value;
  search_player = search_player.toUpperCase();
  let name = document.getElementsByClassName("nem1");
  let player = document.getElementsByClassName("tong")
  for(let i=0; i < player.length; i++){
    if(name[i].innerText.includes(search_player)){
      player[i].style.display ='block'
    }
    else{
      player[i].style.display ='none'
    }
  }
    
}
