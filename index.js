function takeInput() {
  var input = document.getElementById('input').value;

  // OUTPUT
  var outputStringFromEncryption = "";
  for (var x = 0; x < input.length; x++) {
    var tempLetterInEncryption = "";
// 32 - 126
    if (input.charCodeAt(x) >= 32 && input.charCodeAt(x) <= 126) {
        //set number range (119)
      if (input.charCodeAt(x) <= 119) {
        tempLetterInEncryption = input.charCodeAt(x) + 7;
      }
        //if not in range
      else {
        tempLetterInEncryption = (input.charCodeAt(x) - 94) + 6;
      }
        //compose encrypted
        outputStringFromEncryption += String.fromCharCode(tempLetterInEncryption);
    }
  }
  document.getElementById('outOfInput').innerHTML = outputStringFromEncryption;
}

var decryptionOfString = function() {
  var input = document.getElementById('input2').value;
  var outputStringFromDecryption = "";
  for (var x = 0; x < input.length; x++) {
    var tempLetterInDecryption = "";
// 32 - 126
    //set number range ()
    if (input.charCodeAt(x) >= 32 || input.charCodeAt(x) <= 126) {
      // To lower of a number
      if (input.charCodeAt(x) <= 38 && input.charCodeAt(x) >= 32) {
        tempLetterInDecryption = (input.charCodeAt(x) + 94) - 6;
      }
        // High enough number
      else {
        tempLetterInDecryption = input.charCodeAt(x) - 7;
      }
        //compose encrypted
        outputStringFromDecryption += String.fromCharCode(tempLetterInDecryption);
    }
  }
  document.getElementById('outOfInput2').innerHTML = outputStringFromDecryption;
}
