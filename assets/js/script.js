const typedText = document.querySelector(".typing");

// Array containing text to be 'typed' in html
const textType = [
  "Rhiannon McNulty",
  "A Software Developer",
  "A Graphic Designer",
  "An Artist",
];

//index number of array to be incremented
let textArrayIndex = 0;
// index number of characters to be incremented
let characterIndex = 0;

/**
 * Function checks if characterIndex is greater than the index of textArray
 * If it is, it loops through characters of the first string
 * It increases the characterIndex to loop through all characters
 * If not, it calls the typingTextErase function
 */
function typingText() {
  if (characterIndex < textType[textArrayIndex].length) {
    typedText.textContent += textType[textArrayIndex].charAt(characterIndex);
    characterIndex++;
    setTimeout(typingText, 200);
  } else {
    setTimeout(typingTextErase, 2000);
  }
}

/**
 * if the characterIndex is greater than 0
 * it returns and all characters and loops through removing a character each time
 * if its not, next word in the array is called
 * if index is = or greater than the length of the array
 * the index is set back to 0
 */
function typingTextErase() {
  if (characterIndex > 0) {
    typedText.textContent = textType[textArrayIndex].substring(
      0,
      characterIndex - 1
    );
    characterIndex--;
    setTimeout(typingTextErase, 100);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textType.length) {
      textArrayIndex = 0;
    }
    setTimeout(typingText, 500);
  }
}

//event listener for typing text to start once DOM content is loaded

document.addEventListener("DOMContentLoaded", function () {
  if (textType.length) {
    setTimeout(typingText, 500);
  }
});

//Code for Lightslider function

$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});