class ListBinding {
  constructor(element) {
    this.listElement = element;
    this.textList = ["muhammet", "ahmet", "seher"];
  }

  update() {
    while (this.listElement.firstChild.nodeName) {
      this.listElement.removeChild(this.listElement.firstChild.nodeName);
    }
  }
}
