/** @type {number} */
var latestX, latestY;

/** @type {HTMLElement} */
var latestHoveredElement;

/**
 * @param {MouseEvent} evt
 */
function onMouseMove (evt) {
  latestX = evt.pageX;
  latestY = evt.pageY;
  latestHoveredElement = document.elementFromPoint(latestX, latestY);
}

document.documentElement.addEventListener('mousemove', onMouseMove);
