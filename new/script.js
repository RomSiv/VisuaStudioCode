window.addEventListener("keydown", onKeyDown);
function onKeyDown({ keyCode }) {
  switch (true) {
    case keyCode === DIR.DOWN && direction === DIR.UP:
    case keyCode === DIR.UP && direction === DIR.DOWN:
    case keyCode === DIR.LEFT && direction === DIR.RIGHT:
    case keyCode === DIR.RIGHT && direction === DIR.LEFT:
      return;
  }

  lastKeyPressed = keyCode;
}

function setDirection(keyCode) {
  direction = keyCode;
}

function checkFood() {
  if (!food) return;

  if (food.x >= cellsNo) {
    food.x = cellsNo - 1;
  }

  if (food.y >= cellsNo) {
    food.y = cellsNo - 1;
  }
}

class RangeSlider {
  constructor(el, cb) {
    this.input = el.querySelector("input");
    this.slider = el.querySelector(".range_inputSlider");
    this.value = el.querySelector(".range_inputValue");

    this.input.addEventListener("input", (_) => this.onChange());
    this.input.addEventListener("keydown", (e) => {
      e.preventDefault();
    });

    this.onChangeCallback = cb;
    this.onChange();
  }

  onChange() {
    this.value.textContent = this.input.value;
    this.slider.style.transform = `scaleX(${
      this.input.value / this.input.step / 10
    })`;
    this.onChangeCallback(this.input.value);
  }
}

new RangeSlider(
  document.querySelector(".range-difficulty"),
  (value) => (difficulty = Number(value))
);

new RangeSlider(document.querySelector(".range-columns"), (value) => {
  cellsNo = Number(value);
  cellSize = 400 / cellsNo;
  checkFood();
});

// --- TOUCH CONTROLS
var isPointerDown, pointerStart, pointerPos;

function onTouchStart(e) {
  const { clientX, clientY } = e.touches[0];
  isPointerDown = true;
  pointerStart = { x: clientX, y: clientY };
  pointerPos = Object.assign({}, pointerStart);
}

function onTouchMove(e) {
  const { clientX, clientY } = e.touches[0];
  pointerPos = { x: clientX, y: clientY };
}

function onTouchEnd() {
  if (!isPointerDown) return;
  isPointerDown = false;

  const deltaX = pointerStart.x - pointerPos.x;
  const deltaY = pointerStart.y - pointerPos.y;
  const keyCode = touchToKeyCode(deltaX, deltaY);

  if (keyCode) onKeyDown({ keyCode });
}

function touchToKeyCode(x, y) {
  if (Math.abs(x) > Math.abs(y)) {
    if (x < -1) {
      keyCode = DIR.RIGHT;
    } else if (x > 1) {
      keyCode = DIR.LEFT;
    }
  } else {
    if (y < -1) {
      keyCode = DIR.DOWN;
    } else if (y > 1) {
      keyCode = DIR.UP;
    }
  }

  return keyCode;
}

canvas.addEventListener("touchstart", onTouchStart);
window.addEventListener("touchmove", onTouchMove);
window.addEventListener("touchend", onTouchEnd);
