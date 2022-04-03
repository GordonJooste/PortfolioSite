let element = document.getElementById('left');
element.onclick = function() { 
  let body = document.getElementById('html');
  body.style.backgroundColor = '#404040';
  body.style.color = "#F5F5F5";

  let left = document.getElementById('left');
  left.style.color = "#DBDBDB";

  let nava = document.getElementById('index');
  nava.style.color = "#F5F5F5";

  let navc = document.getElementById('contact');
  navc.style.color = "#F5F5F5";

  let navg = document.getElementById('gallery');
  navg.style.color = "#F5F5F5";

  const boxes = document.querySelectorAll('.detail');

    boxes.forEach(box => {
    box.style.color = '#F5F5F5';
    });
};
