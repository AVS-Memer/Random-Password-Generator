let ID = "";
let password_length = prompt("What should the length of the password be?");
if (password_length == "r") {password_length = Math.floor(Math.random()*25)+6;}
else if (password_length == "r+") {let min = prompt("What is the minimum value?"); let max = prompt("What is the maximum value?"); password_length = Math.floor(Math.random()*(+max-+min+1) + +min);}
for (let i = 0; i < password_length; i++) {
  let num = Math.floor(Math.random()*62);
  if (num >= 10) {
    if (num >= 36) {
      ID = ID + String.fromCharCode(num+29);
    } else {
      ID = ID + String.fromCharCode(num+87);
    }
  } else {
    ID = ID + num;
  }
}
console.log(ID);
