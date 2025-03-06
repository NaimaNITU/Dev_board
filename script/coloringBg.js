document.getElementById('colorThemeBtn').addEventListener('click', function () {
    // creating a random color
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);


    document.getElementById("pageBody").style.backgroundColor = randomColor;
})


