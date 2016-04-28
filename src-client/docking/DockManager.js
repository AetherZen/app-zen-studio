import { Point } from '../utils/point';

export class DockManager {
  constructor(element) {
    if (element === undefined)
        throw new Error('Invalid Dock Manager element provided');

    this.element = element;
    this.context = this.dockWheel = this.layoutEngine = this.mouseMoveHandler = undefined;
    this.layoutEventListeners = [];

    this.defaultDialogPosition = new Point(0, 0);
  }
}
