// TODO Get this list from someplace; for example, restore the views from
// the previous time particular project was opened.

var openViews = [
  { viewType: "", model: { message: "View 1"}},
  { viewType: "", model: { message: "View 2"}},
  { viewType: "", model: { message: "View 3"}}
];

export class ZenStudio {
  constructor() {
  }

  created() {
  }

  get openViews() {
    return openViews;
  }

  getViewFromType(view) {
    // TOOD Load plugins and use the views defined by plugins
    return "./views/editor-view";
  }
}
