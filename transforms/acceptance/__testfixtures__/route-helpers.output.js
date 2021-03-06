import { currentURL, currentPath, currentRouteName, visit } from '@ember/test-helpers';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('click');

test('visiting /foo', async function(assert) {
  await visit('/foo');
  assert.equal(currentURL(), '/foo');
  assert.equal(currentPath(), 'foo.index');
  assert.equal(currentRouteName(), 'foo');
});
