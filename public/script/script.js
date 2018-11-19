const gallery = document.querySelector('.gallery'),
      overlay = document.querySelector('.overlay'),
      overlayImage = document.querySelector('.flavor'),
      overlayClose = document.querySelector('.close'),
      display = document.querySelector('.display'),
      lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      berryIpsum = "Berries! ",
      brownieIpsum = "Brownies! ",
      caramelIpsum = "Caramel! ",
      chocolateIpsum = "Chocolate! ",
      coffeeIpsum = "Coffee! ",
      cookieIpsum = "Cookies! ",
      gingerIpsum = "Ginger! ",
      mintIpsum = "Mint! ";

function handleClick(e) {
	const src = e.currentTarget.querySelector('.flavor').src;
	overlayImage.src = src;
	overlay.classList.add('open');
  setText();
};

function setText () {
  if (overlayImage.src.includes("1.jpg")) {
    display.textContent = berryIpsum.repeat(20).concat(lorem);
  } else if (overlayImage.src.includes("2.jpg")) {
    display.textContent = brownieIpsum.repeat(20).concat(lorem);
  } else if (overlayImage.src.includes("3.jpg")) {
    display.textContent = caramelIpsum.repeat(20).concat(lorem);
  } else if (overlayImage.src.includes("4.jpg")) {
    display.textContent = chocolateIpsum.repeat(20).concat(lorem);
  } else if (overlayImage.src.includes("5.jpg")) {
    display.textContent = coffeeIpsum.repeat(20).concat(lorem);
  } else if (overlayImage.src.includes("6.jpg")) {
    display.textContent = cookieIpsum.repeat(20).concat(lorem);
  } else if (overlayImage.src.includes("7.jpg")) {
    display.textContent = gingerIpsum.repeat(20).concat(lorem);
  } else if (overlayImage.src.includes("8.jpg")) {
    display.textContent = mintIpsum.repeat(20).concat(lorem);
  };
};

function close() {
	overlay.classList.remove('open');
};

const contents = document.querySelectorAll('.content');
contents.forEach(content => content.addEventListener('click', handleClick));
overlayClose.addEventListener('click', close);

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        overlay.classList.remove('open');
    }
};
