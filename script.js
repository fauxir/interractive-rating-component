document.querySelector("#rate-syle1").addEventListener('click', function(e){
    console.log('1 was clicked');

    let rating = 1;
    localStorage.setItem("rating", rating)

    const target = e.target;

    if(target.matches('span')){
        target.style.backgroundColor = "#444d55"
        document.getElementById("rate-syle1").style.color = "white";
    }
})

document.querySelector("#rate-syle2").addEventListener('click', function(e){
    console.log('2 was clicked');

    let rating = 2;
    localStorage.setItem("rating", rating)

    const target = e.target;

    if(target.matches('span')){
        target.style.backgroundColor = "#444d55"
        document.getElementById("rate-syle2").style.color = "white";
    }
})

document.querySelector("#rate-syle3").addEventListener('click', function(e){
    console.log('3 was clicked');

    let rating = 3;
    localStorage.setItem("rating", rating)

    const target = e.target;

    if(target.matches('span')){
        target.style.backgroundColor = "#444d55"
        document.getElementById("rate-syle3").style.color = "white";
    }
})

document.querySelector("#rate-syle4").addEventListener('click', function(e){
    console.log('4 was clicked');

    let rating = 4;
    localStorage.setItem("rating", rating)

    const target = e.target;

    if(target.matches('span')){
        target.style.backgroundColor = "#444d55"
        document.getElementById("rate-syle4").style.color = "white";
    }
})

document.querySelector("#rate-syle5").addEventListener('click', function(e){
    console.log('5 was clicked');

    let rating = 5;
    localStorage.setItem("rating", rating)

    const target = e.target;

    if(target.matches('span')){
        target.style.backgroundColor = "#444d55"
        document.getElementById("rate-syle5").style.color = "white";
    }
})

function clickinner(target){
    location.href='submit-rating.html';
}

