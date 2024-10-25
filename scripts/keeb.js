class Keyboard {
  constructor() {
    this.keys = {
      49: 0x1,
      50: 0x2,
      51: 0x3,
      52: 0xc,
      81: 0x4,
      87: 0x5,
      69: 0x6,
      82: 0xd,
      65: 0x7,
      83: 0x8,
      68: 0x9,
      70: 0xe,
      90: 0xa,
      88: 0x0,
      67: 0xb,
      86: 0xf,
    };
    this.keysPressed = [];
    this.onNextKeyPress = null;

    window.addEventListener("keydown", this.onKeyDown.bind(this), false);
    window.addEventListener("keyup", this.onKeyUp.bind(this), false);
  }

  isKeyPressed(key) {
    return this.keysPressed[key];
  }

  onKeyDown(event) {
    const key = this.keys[event.keyCode];
    if (key !== undefined) {
      this.keysPressed[key] = true;
      if (this.onNextKeyPress !== null) {
        this.onNextKeyPress(parseInt(key));
        this.onNextKeyPress = null;
      }
    }
  }

  onKeyUp(event) {
    const key = this.keys[event.keyCode];
    if (key !== undefined) {
      this.keysPressed[key] = false;
    }
  }
}

export default Keyboard;
