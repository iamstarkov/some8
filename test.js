import { equal } from 'assert';
import some8 from './index';

it('should some8', () =>
  equal(some8('unicorns'), 'unicorns'));

it('should some8 invalid input', () =>
  equal(some8(), undefined));
