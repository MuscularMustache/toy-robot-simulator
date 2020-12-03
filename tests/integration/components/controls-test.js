import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | controls', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders proper control structure', async function (assert) {
    this.set('report', function () {});
    this.set('move', function () {});
    this.set('turn', function () {});
    this.set('placeRobot', function () {});

    await render(hbs`<Controls 
      @report={{this.report}} 
      @move={{this.move}} 
      @turn={{this.turn}} 
      @placeRobot={{this.placeRobot}}
    />`);

    assert.equal(this.element.querySelectorAll('input').length, 2);
    assert.equal(this.element.querySelectorAll('select').length, 1);
    assert.equal(this.element.querySelectorAll('button').length, 5);
    assert.equal(this.element.querySelectorAll('[data-test="add-robot"]').length, 1);
    assert.equal(this.element.querySelectorAll('[data-test="move-robot"]').length, 1);
    assert.equal(this.element.querySelectorAll('[data-test="turn-left"]').length, 1);
    assert.equal(this.element.querySelectorAll('[data-test="turn-right"]').length, 1);
    assert.equal(this.element.querySelectorAll('[data-test="show-report"]').length, 1);
  });
});
