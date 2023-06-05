setRandomBackgroundColor();

// Belirli bir süre aralığında arka plan rengi rastgele olarak değişir
setInterval(function() {
    setRandomBackgroundColor();
}, 1000); // 1000 milisaniye = 1 saniye



// Sayfa yüklendiğinde arka plan rengi rastgele olarak ayarlanır
function setRandomBackgroundColor() {
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}

// Rastgele renk üretme fonksiyonu
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Tıklandığında arka plan rengi rastgele olarak ayarlanır
document.getElementById("clickButton").addEventListener("click", function() {
    setRandomBackgroundColor();
});

// Üzerine gelindiğinde arka plan rengi rastgele olarak ayarlanır
document.getElementById("hoverButton").addEventListener("mouseover", function() {
    setRandomBackgroundColor();
});