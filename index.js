/**
 *  fizzbuzz()
 *
 *  Returns 'fizz' if n is divisible by 3, 'buzz' if n is divisible by 5,
 *  'fizzbuzz' if n is divisible by both 3 and 5, and n otherwise.
 *
 *  ### Examples
 *  ```
 *  assert.equal(fizzbuzz(45), 'fizzbuzz');
 *  assert.equal(fizzbuzz(10), 'buzz');
 *  assert.equal(fizzbuzz(9), 'fizz');
 *  assert.equal(fizzbuzz(17), '17');
 *  ```
 *
 *  @api public
 */
function fizzbuzz(n) {
  if (n % 15 === 0) {
    return 'fizzbuzz';
  } else if (n % 5 === 0) {
    return 'buzz';
  } else if (n % 3 === 0) {
    return 'fizz';
  }
  return n.toString();
}

module.exports = fizzbuzz;
