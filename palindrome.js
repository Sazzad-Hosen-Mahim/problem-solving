function isPalindrome(str) {
  const string = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversedString = string.split("").reverse().join("");

  return string === reversedString;
}

console.log(isPalindrome("civic"));
