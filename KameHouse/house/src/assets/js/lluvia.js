var nbDrop = 858;

// Función para generar un número aleatorio dentro de un rango.
function randRange(minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// Función para generar gotas de lluvia.
function createRain() {
  for (var i = 1; i <= nbDrop; i++) {
    var dropLeft = randRange(0, 1600);
    var dropTop = randRange(-1000, 1400);

    var drop = document.createElement('div');
    drop.className = 'drop';
    drop.id = 'drop' + i;
    drop.style.left = dropLeft + 'px';
    drop.style.top = dropTop + 'px';

    document.querySelector('.rain').appendChild(drop);
  }
}

// ¡Que llueva!
createRain();