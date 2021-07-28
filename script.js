var likes = 0;
var likeElement = document.querySelector("#likes"); 

function increase() {
    likes++;
    likeElement.innerText = likes;
    console.log(likes);
}