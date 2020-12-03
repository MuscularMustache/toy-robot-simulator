import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | application', function (hooks) {
  setupTest(hooks);

  test('do not place robot if given invalid coordinates', function (assert) {
    let controller = this.owner.lookup('controller:application');

    assert.equal(controller.isPlaced, false);
    assert.deepEqual(controller.location, {});

    controller.send('placeRobot', { x: 9, y: 0, direction: 3 });

    assert.deepEqual(controller.location, {});
    assert.equal(controller.isPlaced, false);
  });

  test('place robot if given valid coordinates', function (assert) {
    let controller = this.owner.lookup('controller:application');

    assert.ok(controller);
    assert.equal(controller.isPlaced, false);
    assert.deepEqual(controller.location, {});

    controller.send('placeRobot', { x: 1, y: 0, direction: 3 });

    assert.equal(controller.isPlaced, true);
    assert.deepEqual(controller.location, { x: 1, y: 0, direction: 3 });
  });

  test('do not move robot forward if at edge of table ', function (assert) {
    let controller = this.owner.lookup('controller:application');

    controller.send('placeRobot', { x: 1, y: 0, direction: 3 });
    assert.deepEqual(controller.location, { x: 1, y: 0, direction: 3 });

    controller.send('move');
    assert.deepEqual(controller.location, { x: 1, y: 0, direction: 3 });
  });

  test('move robot forward if not at edge of table ', function (assert) {
    let controller = this.owner.lookup('controller:application');

    controller.send('placeRobot', { x: 1, y: 2, direction: 3 });
    assert.deepEqual(controller.location, { x: 1, y: 2, direction: 3 });

    controller.send('move');
    assert.deepEqual(controller.location, { x: 1, y: 1, direction: 3 });
  });

  test('turn robot left or right', function (assert) {
    let controller = this.owner.lookup('controller:application');

    controller.send('placeRobot', { x: 1, y: 0, direction: 3 });
    assert.deepEqual(controller.location, { x: 1, y: 0, direction: 3 });

    controller.send('turn', 'left');
    assert.deepEqual(controller.location, { x: 1, y: 0, direction: 2 });

    controller.send('turn', 'right');
    assert.deepEqual(controller.location, { x: 1, y: 0, direction: 3 });

    controller.send('turn', 'right');
    assert.deepEqual(controller.location, { x: 1, y: 0, direction: 4 });
  });

  test('show report ', function (assert) {
    let controller = this.owner.lookup('controller:application');

    controller.send('placeRobot', { x: 1, y: 2, direction: 3 });
    assert.deepEqual(controller.location, { x: 1, y: 2, direction: 3 });

    controller.send('report');
    assert.deepEqual(controller.location, {
      showReport: true,
      x: 1,
      y: 2,
      direction: 3
    });
  });
});
