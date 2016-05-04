// import {DockManager} from 'aurelia-dock/aurelia-dock';

// TODO Get this list from someplace; for example, restore the views from
// the previous time particular project was opened.
var openViews = [
  { viewType: "", model: { message: "View 1"}},
  { viewType: "", model: { message: "View 2"}},
  { viewType: "", model: { message: "View 3"}}
];

// TODO Possibly this should be a class instead of just JSON
var global_workspace = {
  panels: [
    {
      view: "aurelia-dock/dock-hsplitter",
      split: 200,
      left:
        {
          view: "app-zen-studio/views/editor-view",
          message: "Hello from the west!"
        },
      right:
        {
          view: "aurelia-dock/dock-vsplitter",
          split: 200,
          top: {
            view: "aurelia-dock/dock-hsplitter",
            split: 200,
            left: {
              view: "app-zen-studio/views/editor-view",
              message: "Hello, from the middle!"
            },
            right: {
              view: "app-zen-studio/views/editor-view",
              message: "Hello, from the far east!"
            }
          },
          bottom: {
            view: "app-zen-studio/views/editor-view",
            message: "Hello, from the south!"
          }
        }
    }
  ]
};

export class ZenStudio {
  constructor() {
  }

  created() {
  }

  attached() {
    // this.dockManager = new DockManager(this.dockManagerElement)
  }

  detached() {
    // this.dockManager = null;
  }

  get workspace() {
    return global_workspace;
  }

  get openViews() {
    return openViews;
  }

  getViewFromType(view) {
    // TOOD Load plugins and use the views defined by plugins
    return "./views/editor-view";
  }
}
