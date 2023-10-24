document.getElementById('fanCounter').addEventListener('click', function() {
    let count = parseInt(document.getElementById('fanCountDisplay').innerText.split(": ")[1], 10);
    count++;
    document.getElementById('fanCountDisplay').innerText = "Total Fans: " + count;
});
