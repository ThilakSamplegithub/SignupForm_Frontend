const validatePassword = (value) => {
    if (value.length < 6) {
      return {message:"Minimum 6 characters required",color:'red'}
    }

    if (!/[a-z]/.test(value)) {
     return {message:"At least 1 lowercase letter required",color:'red'}
    }

    if (!/[A-Z]/.test(value)) {
     return {message:"At least 1 uppercase letter required",color:'red'}
    }

    if (!/\d/.test(value)) {
      return {message:"At least 1 number required",color:'red'}
    }

    if (!/[@$!%*?&#]/.test(value)) {
      return {message:"At least 1 special character required (@$!%*?&#)",color:'red'}
    }
    // ✅ All conditions passed
    // setMessage("✅ Strong password");
    // setColor("green");
    return {message:"✅ Strong password",color:'green'}
  };
  export default validatePassword;