let ID = "";
let password_length = prompt("What should the length of the password be?");
let allowSC = (prompt("Are special characters allowed? y/n") == "y");
let allowSB = (prompt("Are spaces allowed? y/n") == "y");
if (password_length == "r") {password_length = Math.floor(Math.random()*25)+6;}
else if (password_length == "r+") {let min = prompt("What is the minimum value?"); let max = prompt("What is the maximum value?"); password_length = Math.floor(Math.random()*(+max-+min+1) + +min);}
for (let i = 0; i < password_length; i++) {
  if (allowSC) {
    ID = ID + String.fromCharCode(Math.floor(Math.random()*((allowSB)?94:93)) + (allowSB?32:33));
  } else {
    let num = Math.floor(Math.random()*(allowSB?63:62));
    if (num < 10) {
      ID = ID + num;
    } else if (num < 36) {
      ID = ID + String.fromCharCode(num+87);
    } else if (num === 62) {
      ID = ID + " ";
    } else {
      ID = ID + String.fromCharCode(num+29);
    }
  }
}
console.log(ID);
