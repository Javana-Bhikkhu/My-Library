var isPalindrome = function(str) {
    var reversedString = str
      .split('')
      .reverse()
      .join('');
  
    if (reversedString === str) {
      return true;
    } else {
      return false;
    }
  };
  