function stringCalculator(input) {
  if (input === "") {
    return 0;
  }

  let delimiter = ",";
  if (input.startsWith("//")) {
    const delimiterEndIndex = input.indexOf("\n");
    delimiter = input.substring(2, delimiterEndIndex);
    input = input.substring(delimiterEndIndex + 1);
  }

  const numbers = input.split(new RegExp(`[${delimiter}\n]`));
  const negativeNumbers = numbers.filter((num) => parseInt(num) < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed: ${negativeNumbers.join(",")}`
    );
  }

  return numbers.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = stringCalculator;
