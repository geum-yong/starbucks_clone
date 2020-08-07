const menu = document.getElementsByClassName('menu-item');
const menuArr = Array.from(menu);

menuArr.forEach(e => {
  e.addEventListener('mouseover', () => {
    e.childNodes[3].style.display = "block";
  });

  e.addEventListener('mouseout', () => {
    e.childNodes[3].style.display = "none";
  });

  e.childNodes[1].childNodes[0].onfocus = () => {
    menuArr.forEach(e => {
      e.childNodes[3].style.display = "none";
    });
    e.childNodes[3].style.display = "block";
  }
});