const setHand = (selector) => {
  const hand = document.querySelector(selector);
  const now = new Date();
  let unit;
  let deg;
  switch (selector) {
    case ".hour-hand": {
      unit = now.getHours();
      if (unit > 12) unit = unit - 12;
      deg = (unit / 12) * 360 + 90;
      break;
    }
    case ".min-hand":
      unit = now.getMinutes();
      deg = (unit / 60) * 360 + 90;
      break;

    default:
      unit = now.getSeconds();
      deg = (unit / 60) * 360 + 90;
      break;
  }

  
  hand.style.transform = `rotate(${deg}deg)`;
};
const setDate = () => {
  setHand(".hour-hand");
  setHand(".min-hand");
  setHand(".sec-hand");
};

setInterval(setDate, 1000);
