export const validateEmail = (email: any) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

export const validate_password = (password: any) => {
    var re = {
      upperCase: /(?=.*[A-Z])/,
      lowerCase: /(?=.*[a-z])/,
      digit: /(?=.*[0-9])/,
      // specialChar: /^[^'"\\/\\@$#*%^&!() ]+$/,
      specialChar:/(?=.*?[#?!@$%^&*-])/,
      length: /(?=.{8,32}$)/,
    };
    let validation: any = [];
    let UpperCasevalidation: any = "Password must have a capital letter.";
    let lowerCasevalidation: any = "Password must have a small letter.";
    let digitvalidation: any = "Password must have a number.";
    let specialCharvalidation: any = "Password must have a special character.";
    let lengthvalidation: any = "Password length must be 8 characters long.";
    validation = [UpperCasevalidation, lowerCasevalidation, digitvalidation, specialCharvalidation, lengthvalidation]
  
    if (re.upperCase.test(password)) {
      var index = validation.indexOf(UpperCasevalidation);
      validation.splice(index, 1);
    }
  
    if (re.lowerCase.test(password)) {
      var index = validation.indexOf(lowerCasevalidation);
      validation.splice(index, 1);
    }
  
    if (re.digit.test(password)) {
      var index = validation.indexOf(digitvalidation);
      validation.splice(index, 1);
    }
  
    if (re.specialChar.test(password)) {
      var index = validation.indexOf(specialCharvalidation);
      validation.splice(index, 1);
    }
    if (re.length.test(password)) {
      var index = validation.indexOf(lengthvalidation);
      validation.splice(index, 1);
    }
  
    
    return validation
  };