import asAction from 'machine-as-action';
import User from 'Models/User';

const friendlyName = 'FitMonkey Signup';
const description = 'Signup a user locally.';
const inputs = {
  email: {
    type: 'string',
    description: 'The email address for the new account, e.g. m@example.com.',
    extendedDescription: 'Must be a valid email address.',
  },
  username: {
    type: 'string',
    example: 'fitnessg1rl',
    description: 'The username for the new user.',
  },
  password: {
    type: 'string',
    example: 'passwordlol',
    description: 'The unencrypted password to use for the new account.',
  },
};
const exits = {
  success: {
    responseType: 'payload',
    description: 'Signed up successfully.',
  },
  invalidInput: {
    responseType: 'appError',
    description: 'The provided username, password and/or email address are invalid.',
  },
  emailAlreadyInUse: {
    responseType: 'appError',
    description: 'The provided email address is already in use.',
  },
  usernameAlreadyInUse: {
    responseType: 'appError',
    description: 'The provided username is already in use.',
  },
  signUpError: {
    responseType: 'appError',
    description: 'An error occurred while attempting to sign up.',
  },
};

const validateInputs = ({ email, username, password }) => {
  // Validate that the input is empty, is not too big
  if (!email || !username || !password) {
    throw {
      error: new Error('invalid input'),
      message: 'Input is empty',
      email,
      username,
    };
  }
  if (email.length > 255 || username.length > 255 || password.length > 255) {
    throw {
      error: new Error('invalid input'),
      message: 'Input is too big',
      email,
      username,
    };
  }
  return true;
};

async function fn(inputs, exits) {
  try {
    validateInputs(inputs);
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }
    return exits.invalidInput(err);
  }

  const { email, username, password } = inputs;

  let emailExists = false;
  let usernameExists = false;

  const duplicateUsers = await User.query()
    .where({ email })
    .orWhere({ username });

  duplicateUsers.some(user => {
    emailExists = email === user.email;
    usernameExists = username === user.username;
    return emailExists || usernameExists;
  });

  if (emailExists) {
    return exits.emailAlreadyInUse({ email, username });
  }
  if (usernameExists) {
    return exits.usernameAlreadyInUse({ email, username });
  }

  try {
    const newUser = await User.query().insert({ email, username, password });
    return exits.success(newUser.toJSON().publicData);
  } catch (err) {
    throw err;
  }
}

export default asAction({
  friendlyName,
  description,
  inputs,
  exits,
  fn,
});
