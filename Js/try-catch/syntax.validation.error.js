class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidataionError";
  }
}
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
  if (!user.name) {
    throw new PropertyRequiredError("name");
  }

  return user;
}

try {
    let user = readUser("{'age':25}");
} catch (error) {
    if(error instanceof ValidationError){
        console.log("Invalid data:" , error.message);
    }
    else if(error instanceof SyntaxError){
        console.log("JSON Syntax Error" , error.message);
    }
    else{
        throw new "Farkli bir hata bu aq..."
    }
}
