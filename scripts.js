// Updated Typing Effect
const msg1 = "Good morning";
const msg2 = "Miss Makayla ❤️";
const msg3 = "Take Care!";
const messageBox1 = document.getElementById("line-1");
const messageBox2 = document.getElementById("line-2");
const messageBox3 = document.getElementById("line-3");

let i1 = 0, i2 = 0, i3 = 0;

function typeLetter1() {
  if (i1 < msg1.length) {
    messageBox1.innerText += msg1.charAt(i1);
    i1++;
    setTimeout(typeLetter1, 100);
  } else {
    setTimeout(typeLetter2, 500); // Delay before typing the second line
  }
}

function typeLetter2() {
  if (i2 < msg2.length) {
    messageBox2.innerText += msg2.charAt(i2);
    i2++;
    setTimeout(typeLetter2, 100);
  } else {
    setTimeout(typeLetter3, 500); // Delay before typing the third line
  }
}

function typeLetter3() {
  if (i3 < msg3.length) {
    messageBox3.innerText += msg3.charAt(i3);
    i3++;
    setTimeout(typeLetter3, 100);
  }
}

setTimeout(typeLetter1, 1000); // Start typing after a delay
