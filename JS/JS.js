
// var multiArr = [];
// for (var i = 2; i < 10; i++) {
//   for (var j = 1; j < 10; j++) {
//     multiArr.push(i + " x " + j + " = " + i * j);
//   }
// }

// let card2 = document.querySelector("#m2");
// for (let sValue = 0; sValue < 10; sValue++) {
//   card2.innerHTML += "<p>" + multiArr.slice(0, 9)[sValue] + "</p>";
//   if (sValue == 8) {
//     break
//   }
// }

// let card3 = document.querySelector("#m3");
// for (let sValue = 0; sValue < 10; sValue++) {
//   card3.innerHTML += "<p>" + multiArr.slice(9, 18)[sValue] + "</p>";
//   if (sValue == 8) {
//     break
//   }
// }

// let card4 = document.querySelector("#m4");
// for (let sValue = 0; sValue < 10; sValue++) {
//   card4.innerHTML += "<p>" + multiArr.slice(18, 27)[sValue] + "</p>";
//   if (sValue == 8) {
//     break
//   }
// }

// let card5 = document.querySelector("#m5");
// for (let sValue = 0; sValue < 10; sValue++) {
//   card5.innerHTML += "<p>" + multiArr.slice(27, 36)[sValue] + "</p>";
//   if (sValue == 8) {
//     break
//   }
// }

// let card6 = document.querySelector("#m6");
// for (let sValue = 0; sValue < 10; sValue++) {
//   card6.innerHTML += "<p>" + multiArr.slice(36, 45)[sValue] + "</p>";
//   if (sValue == 8) {
//     break
//   }
// }

// let card7 = document.querySelector("#m7");
// for (let sValue = 0; sValue < 10; sValue++) {
//   card7.innerHTML += "<p>" + multiArr.slice(45, 54)[sValue] + "</p>";
//   if (sValue == 8) {
//     break
//   }
// }

// let card8 = document.querySelector("#m8");
// for (let sValue = 0; sValue < 10; sValue++) {
//   card8.innerHTML += "<p>" + multiArr.slice(54, 63)[sValue] + "</p>";
//   if (sValue == 8) {
//     break
//   }
// }


// let card9 = document.querySelector("#m9");
// for (let sValue = 0; sValue < 10; sValue++) {
//   card9.innerHTML += "<p>" + multiArr.slice(63, 72)[sValue] + "</p>";
//   if (sValue == 8) {
//     break
//   }
// }


let cardContent = document.querySelector(".container");
for (var i = 2; i <= 9; i++) {
  var str = "<h2>" + i + "</h2>"
  for (var j = 1; j <= 9; j++) {
    str += "<p>" + i + " x " + j + "=" + i * j + "</p>"
  }
  cardContent.innerHTML += "<div class='card'>" + str + "</div>";
}

