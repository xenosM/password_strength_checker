let input = document.querySelector(".password_input");
let loader = document.querySelector(".loader");
let width = ["1%", "25%", "50%", "75%", "100%"];
let color = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

input.oninput = (event) => {
  //* reinitialize values and points
  let points = 0;
  let value = input.value;
  let testArray = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];

  //* checks if the required criteria are fulfilled and gives points accordingly
  if (value.length >= 6) {
    testArray.forEach((item) => {
      if (item.test(value)) {
        points++;
      }
    });
  }
  //*gives the loader progress bar according to the points
  loader.style.width = width[points];
  loader.style.backgroundColor = color[points];
};
