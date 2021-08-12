function oneSixteenPacks() {
  sixteenContent =
    '<button class="accordion">Afk Display V1.1.1<span class="right-plus">+</span></button>' +
    '<div class="panel">' +
      'Afk Display V1.1.0 is a vanilla tweaks datapack. I added a small feature that i plan on expanding upon and have' +
      'released it in this update.<br>' +
      '<a href="datapacks/afk display v1.1.1 - 1.16.zip" download>Download Here!</a>' +
    '</div>';
  document.getElementById("middleContent").innerHTML = sixteenContent;
  document.getElementById("v1.16").setAttribute('style', 'font-weight: bold;');
  document.getElementById("v1.17").setAttribute('style', 'font-weight: normal');
  listener();
};

function oneSeventeenPacks() {
  seventeenContent =
    '<button class="accordion">Dungeons<span class="right-plus">+</span></button>' +
    '<div class="panel"><br> The Dungeons Datapack is a pack that revamps the vanilla minecraft dungeon. It is currently' +
      'in beta stages and will be getting frequent updates.<br>' +
      '<a href="" style="text-decoration-line: line-through;">Link Here!</a><br><span>' +
        'Under a small pre-release revamp cus I had mild insparation to make this not suck. Release soon!' +
      '</span>' +
    '</div>' +
    '<br><br>' +
    '<button class="accordion">Loot Boxes<span class="right-plus">+</span></button>' +
    '<div class="panel">' +
      'Loot Boxes Datapack adds a drop to fishing, mob kills, and more that generates random loot. Generation one' +
      'allows fishing. Generation Two is currently in testing on my twitch channel with a hobbit series. This is where' +
      'all updates are tested.<br>' +
      '<a href="datapacks/Gen One Lootboxes.zip" download>Download Here!</a>' +
    '</div>' +
    '<br><br>' +
    '<button class="accordion">Afk Display V1.1.1<span class="right-plus">+</span></button>' +
    '<div class="panel">' +
      'Afk Display V1.1.0 is a vanilla tweaks datapack. I added a small feature that i plan on expanding upon and have' +
      'released it in this update.<br>' +
      '<a href="datapacks/afk display v1.1.1 - 1.17.zip" download>Download Here!</a>' +
    '</div>' +
    '<br><br>' +
    '<button class="accordion">Ender Fight Vanilla+ Pack V1.0.0<span class="right-plus">+</span></button>' +
    '<div class="panel">' +
      'The Ender Fight Vanilla+ Pack V1.0.0 is a pack that gives a new armor set and a new strategy to the ender dragon' +
      'fight.' +
      'Just one armor piece blows a full neterite set out of the water. However it is such a rare drop I wouldn\'t expect' +
      'a drop any time soon.<br>' +
      '<a href="datapacks/Ender Dragon Fight v1.0.0 - 1.17.zip" download>Download Here!</a>' +
    '</div>';
  document.getElementById("middleContent").innerHTML = seventeenContent;
  document.getElementById("v1.17").setAttribute('style', 'font-weight: bold;');
  document.getElementById("v1.16").setAttribute('style', 'font-weight: normal');
  listener();
};

function listener() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

window.onload = oneSeventeenPacks();