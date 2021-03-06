import * as t from 'io-ts';
import * as tt from 'io-ts-types';

import { Id } from './Id';

export const Solution = t.type({
  playerId: Id,
  puzzleId: Id,
  code: tt.NonEmptyString,
});
