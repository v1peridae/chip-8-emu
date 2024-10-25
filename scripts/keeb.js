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
    this.keyspressed = [];
    this.onnexykeypress = null;

    window.addEventListener("keydown", this.onKeyDown.bind(this), false);
    window.addEventListener("keyup", this.onKeyUp.bind(this), false);
  }
  iskeypressed(key) {
    return this.keyspressed[key];
  }
  onKeyDown(event) {
    const key = this.keys[event.keyCode];
    if (key !== undefined) {
      this.keyspressed[key] = true;
      if (this.onnexykeypress) !== null && key{
        this.onnexykeypress(parseInt(key));
        this.onnexykeypress = null;
      }
      }
    }
    onKeyUp(event) {
      let key = this.KEYMAP[event.which];
      this.keysPressed[key] = false;
  }
  }

export default Keyboard;
