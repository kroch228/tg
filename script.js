let clicks = 0;
let upgradeCost = 100;
let upgradeMultiplier = 1;
let pop = 1;


function handleClick() {

  clicks += upgradeMultiplier;


  document.getElementById('click-counter').innerText = clicks;
}
function handleupd() {
  if (clicks >= upgradeCost) {
    upgradeMultiplier++;
    pop ++;
    clicks -= upgradeCost;
    upgradeCost *= 2;

    document.getElementById('click-counter').innerText = clicks;
    document.getElementById('upgrade-cost').innerText = upgradeCost;
    document.getElementById('pop').innerText = upgradeDisplay;
  }
}
document.getElementById('click-button').addEventListener('click', handleClick);
document.getElementById('upgrade').addEventListener('click', handleupd);
