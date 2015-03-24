QUnit.module('Object Creation');

QUnit.test('Create without new', function (assert) {
    expect(1);

    var ph = Phish.Phishin();
    assert.equal(ph instanceof Phish.Phishin, true, 'Should be an instance without the new keyword');
});

QUnit.test('Check for Methods', function (assert) {
    expect(6);

    var ph = Phish.Phishin();
    assert.equal(typeof ph.getEras, 'function', 'should be a function');
    assert.equal(typeof ph.getYears, 'function', 'should be a function');
    assert.equal(typeof ph.getSongs, 'function', 'should be a function');
    assert.equal(typeof ph.getTours, 'function', 'should be a function');
    assert.equal(typeof ph.getShows, 'function', 'should be a function');
    assert.equal(typeof ph.getTracks, 'function', 'should be a function');
});
