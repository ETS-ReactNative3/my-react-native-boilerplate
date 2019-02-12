import asAction from 'machine-as-action';
import Logger from 'Utils/Logger';
import generateToken from 'Utils/generateToken';
import User from 'Models/User';

const friendlyName = 'Google Signup';
const description = 'Signup a user using their Google data.';
const inputs = {
  user: {
    type: {},
    description: 'Google user info object from passport',
  },
};
const exits = {
  success: {
    responseType: 'payload',
    description: 'Signed up successfully.',
  },
  updatedInfo: {
    responseType: 'payload',
    description: 'You have already registered, so we updated your information.',
  },
  signUpError: {
    responseType: 'appError',
    description: 'An error occurred while attempting to sign up.',
  },
};

async function fn({ user }, exits) {
  const { accessToken: googleAccessToken, profile } = user;
  const { _json: profileJSON } = profile;
  const { id: googleId, email, name: displayName } = profileJSON;

  try {
    // if a duplicate google id exists, this user has already signed up. Update our record with information from google.
    // if we have an email that matches the email from google, the user has
    // already signed up using another method. Add the data from google and
    // return success
    const userByGoogleId = await User.query().findOne({ googleId });
    const userByEmail = await User.query().findOne({ email });
    if (userByGoogleId || userByEmail) {
      // the user in either result should be the same user
      const duplicateUser = userByGoogleId || userByEmail;
      Logger.info('duplicate user, updating user record');
      const updatedUser = await User.query().patchAndFetchById(duplicateUser.id, {
        googleId,
        email,
        displayName,
        googleProfile: JSON.stringify(profile),
        googleAccessToken,
      });
      const publicUserData = updatedUser.toJSON().publicData;
      const accessToken = generateToken(publicUserData);
      return exits.updatedInfo({ user: publicUserData, accessToken });
    }

    Logger.info('creating new user through google: %o', profileJSON);
    const newUser = await User.query().insert({
      googleId,
      email,
      displayName,
      googleProfile: JSON.stringify(profile),
      googleAccessToken,
    });
    const publicUserData = newUser.toJSON().publicData;
    const accessToken = generateToken(publicUserData);
    return exits.success({ user: publicUserData, accessToken });
  } catch (err) {
    return exits.signUpError(err);
  }
}

export default asAction({
  friendlyName,
  description,
  inputs,
  exits,
  fn,
});
