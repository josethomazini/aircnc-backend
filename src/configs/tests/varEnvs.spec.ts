import { port } from '@configs/varEnvs';

test('Check port is 3333', () => {
  const expected = 3333;
  expect(port).toEqual(expected);
});
