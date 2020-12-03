import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ControlsComponent extends Component {
  @tracked initLocation = {
    x: null,
    y: null,
    direction: null
  };

  @action
  setPlaceLocation(prop, event) {
    this.initLocation[prop] = event.target.value;
  }
}
