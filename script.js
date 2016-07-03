(function (window) {
var names = ["Yasuo", "Jhin", "Jinx", "Graves", "Poppy", "Fizz", "Lux", "Panthon", "Lulu", "Jarvin"];


for (var i in names) {
  var firstLetter = ((names[i]).charAt(0));
  if (firstLetter == 'j'||'J') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);