var viewCount = 0;

export class EditorView {
  constructor() {
    viewCount += 1;
    this.count = viewCount;
  }

  activate(model) {
    // Keep track of this model
    this.model = model;
  }
}
