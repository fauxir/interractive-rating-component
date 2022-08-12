window.onload = function exampleFunction() {
    document.getElementById("rating-result").innerHTML = "You've selected " + localStorage.getItem("rating") + " out of 5";
}