export class ZenStudio {
  constructor() {
    // List of all of the open views (these items are used as view models)
    this.openViews = [
      { message: "View 1", viewType: ""},
      { message: "View 2", viewType: ""}
    ];
  }

  getViewFromType(view) {
    // TOOD Load plugins and use the views defined by plugins
    return "./views/editor-view.html";
  }
}
