let upload = document.getElementById("upload");
let gallery = document.getElementById("gallery");

if(upload){
upload.addEventListener("change", function(){
let images = [];
for(let file of upload.files){
let reader = new FileReader();
reader.onload = function(e){
images.push(e.target.result);
localStorage.setItem("images", JSON.stringify(images));
};
reader.readAsDataURL(file);
}
});
}

if(gallery){
let stored = JSON.parse(localStorage.getItem("images") || "[]");
stored.forEach(img => {
let div = document.createElement("div");
div.className = "card";
div.innerHTML = `<img src="${img}">
<br><a href="${img}" download class="btn">Download</a>`;
gallery.appendChild(div);
});
}
