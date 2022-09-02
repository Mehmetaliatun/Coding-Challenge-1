// function ValidateEmail(inputText) {
//   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (inputText.value.match(mailformat)) {
//     alert("Valid email address!");
//     document.form1.text1.focus();
//     return true;
//   } else {
//     alert("You have entered an invalid email address!");
//     document.form1.text1.focus();
//     return false;
//   }
// }

let control = "abcdefghijklmnopqrstuvwxyz0123456789_+.@";
let emailControl = function (data) {
  let controlArray = data.split("");
  console.log(controlArray);
  for (let i = 0; i < controlArray.lenght; i++) {
    if (!control.includes(controlArray[i])) {
      return false;
    } else {
      if (controlArray[0] === "@") {
        return false;
      }
    }
  }
};
console.log(emailControl(`deneme1234@dene.com`));
