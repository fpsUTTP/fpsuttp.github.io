function dc1() {
  window.open("https://discord.gg/JdhbmXMZ")
}

function dc2() {
  window.open('https://discord.gg/2prmfw6DTc')
}

function topbarShow() {
  $('#topbar').show('slideRight');
  document.getElementById('menuButton1').style.display="none";
  document.getElementById('menuButton2').style.display="block";
  document.getElementById('changeHeight').style.top="53%";
}

function topbarHide() {
  $('#topbar').hide('slideLeft');
  document.getElementById('menuButton1').style.display="block";
  document.getElementById('menuButton2').style.display="none";
  document.getElementById('changeHeight').style.top="50%";
}