import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked location = {};
  @tracked isPlaced = false; // NOTE use this to control available controls

  @action
  placeRobot(location) {
    const { x, y, direction } = location;

    if (
      x >= 0 &&
      x <= 4 &&
      y >= 0 &&
      y <= 4 &&
      direction >= 1 &&
      direction <= 4
    ) {
      // placement is valid
      this.location = location;
      this.isPlaced = true;
    } else {
      // placement is invalid valid
      this.location = {};
      this.isPlaced = false;
    }
  }

  @action
  move() {
    console.log('move');
  }

  @action
  turn(direction) {
    console.log(`turn ${direction}`);
  }

  @action
  report() {
    console.log('report');
  }
}
