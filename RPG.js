let password_length = prompt("What should the length of the password be?");
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
