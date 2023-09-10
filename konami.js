var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

var current = 0;

var keyHandler = function (event) {
    if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
        current = 0;
        return;
    }

    current++;

    if (pattern.length === current) {
        current = 0;
         window.location.replace(window.location.href+"pmmm");
    }
};

document.addEventListener('keydown', keyHandler, false);
