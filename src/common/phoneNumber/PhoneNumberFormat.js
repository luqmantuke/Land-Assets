export function phoneNumberFilter(userNumber) {
    if (userNumber[0] === "0") {
      var formattedNumber = userNumber.replace("0", "255");
      return formattedNumber;
    } else if (userNumber[0] === "+") {
      var formattedNumber = userNumber.substring(1);
      return formattedNumber;
    } else {
      return 'invalid format';
    }
  }