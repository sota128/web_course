for (let i = 1; i <= 9; ++i) {
    document.write("&lt" + i + "の段" + "&gt<br>");
    for (let j = 1; j <= 9; ++j) {
        document.write(i + "×" + j + "=" + (i * j).toString().padStart(2, "0") + " ");
    }
    document.write("<br>");
}
