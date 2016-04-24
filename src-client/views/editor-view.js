var viewCount = 0;

export class EditorView {
  constructor() {
    viewCount += 1;
    this.count = viewCount;
  }

  created(owningView, thisView) {
    console.log("Created:");
    console.log(thisView);
    console.log("my parent:")
    console.log(owningView);
  }

  activate(model) {
    // Keep track of this model
    this.model = model;
  }
}
