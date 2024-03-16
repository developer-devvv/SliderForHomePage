let next = document.querySelector(".next")
let prev = document.querySelector(".prev")

next.addEventListener('click' , function() {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
    console.log(items);

    // var x = document.getElementsByClassName("content");
    // if (x.style.display === "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }
})

prev.addEventListener('click' , function() {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})