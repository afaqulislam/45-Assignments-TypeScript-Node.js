var guestList = ["Salman", "Umair", "Amir", "Hina"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi a sakta");
guestList.splice(0, 1, "Usman");
guestList.forEach(function (guest) {
    console.log("Assala mu Alaikum ".concat(guest, ", would you like to dinner with me"));
});
