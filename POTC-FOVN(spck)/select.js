let listPlayerHtml = document.querySelector('.cauthu')
const addDataToHtml = (cauthu) => {
  listPlayerHtml.innerHtml = ''
  if (cauthu.length > 0) {
    cauthu.forEach(player => {
      let newPlayers = document.createElement('div');
      newPlayers.classList.add('cauthu');
      newPlayers.innerHTML = `
      <div id="cauthu">

      <div id="anh">
        <span>${player.vitri}/span>
        <img src="${player.img}" alt="">
      </div>
      <div id="name">
        <div id="name-left">
          <div id="nem">
            <img src="" alt="">
            <a href="">Pele</a>
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