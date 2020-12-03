import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ControlsComponent extends Component {
  @tracked location = {
    x: null,
    y: null,
    direction: null
  };

  @action
  setPlaceLocation(prop, event) {
    this.location[prop] = event.target.value;
  }
}
