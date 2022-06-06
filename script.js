const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

// document.getElementsByTagName('a')[0].onclick = function() {
// 	var text = "text";
//     var csvData = 'data:application/txt;charset=utf-8,' + encodeURIComponent(text);
//     this.href = csvData;
//     this.target = '_blank';
//     this.download = 'txt.txt';
// }

var fso, f1; 
fso = new ActiveXObject("Scripting.FileSystemObject"; 
f1 = fso.CreateTextFile("c:\\summ.txt", true); 
f1.Write("1000"); 
