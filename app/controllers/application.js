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
      // NOTE make sure direction is a number, this is for report checking
      this.location = { x, y, direction: parseInt(direction) };
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

    // NOTE: this is in here to make sure the tracked location obj is updated
    this.location = this.location;
  }

  @action
  turn(turnDirection) {
    const direction = parseInt(this.location.direction);
    if (turnDirection === 'left') {
      this.location.direction = direction - 1 < 1 ? 4 : direction - 1;
    } else if (turnDirection === 'right') {
      this.location.direction = direction + 1 > 4 ? 1 : direction + 1;
    }

    // NOTE: this is in here to make sure the tracked location obj is updated
    this.location = this.location;
  }

  @action
  report() {
    this.location = { showReport: true, ...this.location };
  }
}
