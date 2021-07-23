var tamanoFuente = 1;

function zoomIn() {
    tamanoFuente += 0.1;
        document.body.style.tamanoFuente = tamanoFuente + "em";
}

function zoomOut() {
    tamanoFuente -= 0.1;
        document.body.style.tamanoFuente = tamanoFuente + "em";
}

