//your JS code here. If required.
let body=document.querySelector('body');
document.addEventListener('DOMContentLoaded',e =>{
	let content=document.createElement('p');
	content.textContent="DOM load sucess";
	body.appendChild(content);
})