class user {
  constructor(username, password) {
    this._username = username;
    this._password = password;
  }
}

function getUserInfo(input1, input2, input3) {
  let newUser = new user(input1, input2);
  const userPassword = input2;
  const userName = input1;
  return newUser;
}

function login(input1, input2) {
  if (input1 == userName && input2 == userPassword);
  {
    document.write("correct");
  }
  elseif(input1 !== userName && input2 !== userPassword);
  {
    document.write("incorrect");
  }
}
