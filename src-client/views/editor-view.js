export class EditorView {
  constructor() {
  }

  created(owningView, thisView) {
    this.view = thisView;
    this.parentView = owningView;
  }

  activate(model) {
    // Keep track of this model
    this.model = model;
  }

  attached() {
    console.log(this.myMessage);
  }
}
