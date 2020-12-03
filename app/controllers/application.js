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
    const x = parseInt(this.location.x);
    const y = parseInt(this.location.y);
    const direction = parseInt(this.location.direction);

    // Direction 1-North 2-South 3-East 4-West
    if (direction === 1 && y != 4) {
      // move north until table edge
      this.location.y = y + 1;
    } else if (direction === 2 && x != 4) {
      // move east until table edge
      this.location.x = x + 1;
    } else if (direction === 3 && y != 0) {
      // move south until table edge
      this.location.y = y - 1;
    } else if (direction === 4 && x != 0) {
      // move west until table edge
      this.location.x = x - 1;
    }

    this.location = this.location;
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
