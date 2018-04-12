let html = document.querySelector('html');
let send = document.querySelector('#send');
let requestForm = document.querySelector('#editWindow');
let requestCancel = document.querySelector('#cancelButton');

html.style.fontSize = `${(window.innerWidth/36)*5}%`;
send.addEventListener("click",()=>{
	editWindow.style.display = "block";
});

requestCancel.addEventListener("click",()=>{
	editWindow.style.display = "none";
});