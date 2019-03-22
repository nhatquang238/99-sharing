function signupApi(user, cb) {
  setTimeout(function() {
    const newUser = {
      ...user,
      id: 'xyz',
    };
    cb(null, newUser);
  }, 100);
}

function signup(data, cb) {
  const { username, email } = data;
  let errors = [];

  if (typeof username !== 'string') {
    errors.push({
      type: 'username',
      message: 'Please enter a valid user name',
    });
  }

  if (typeof email !== 'string') {
    errors.push({
      type: 'email',
      message: 'Please enter a valid email',
    });
  }

  if (errors.length > 0) {
    return cb(errors, null);
  }

  signupApi(data, cb);
}

let newUser = {
  username: 99,
  email: 'co@99.co',
};

signup(newUser, function callback(errors, user) {
  if (errors && errors.length > 0) {
    errors.forEach(function (error) {
      console.log('error', error.message);
    });
    return null;
  }
  console.log(user);
});
