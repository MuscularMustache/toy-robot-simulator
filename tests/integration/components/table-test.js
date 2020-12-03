import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | table', function (hooks) {
  setupRenderingTest(hooks);

  test('table initializes with 5 rows with 5 cells and no robot', async function (assert) {
    await render(hbs`<Table />`);

    assert.equal(this.element.querySelectorAll('.robot-image').length, 0);
    assert.equal(this.element.querySelectorAll('.row').length, 5);
    assert.equal(this.element.querySelectorAll('.cell').length, 25);
    assert.equal(
      this.element.querySelectorAll('.row:first-child .cell').length,
      5
    );
  });

  test('Robot appears and is properly set if its been placed', async function (assert) {
    this.set('location', { x: 0, y: 2, direction: 2 });
    await render(hbs`<Table @isPlaced=true @location={{this.location}}  />`);

    assert.equal(
      this.element.querySelectorAll('.robot-image.x-0.y-2.direction-2').length,
      1
    );
  });
});
