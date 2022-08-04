// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

/**
 * Parameters - a number
 * Return - a number (count the ones in the binary representation of the input parameter)
 * Examples
 *  assert.strictEqual(countBits(0), 0);
    assert.strictEqual(countBits(4), 1);
    assert.strictEqual(countBits(7), 3);
    assert.strictEqual(countBits(9), 2);
    assert.strictEqual(countBits(10), 2);
 * Pseudocode
    make number a string
    use parseInt with a radix of 2 to turn it into binary
    then count the number of ones using reduce.
 */

    let countBits = function (n) {
        let binaryVersion = n.toString(2);
        return [...binaryVersion].filter((element) => element == "1").length;
    };
    