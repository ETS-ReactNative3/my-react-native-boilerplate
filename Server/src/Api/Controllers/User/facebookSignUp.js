import asAction from 'machine-as-action';
import Logger from 'Utils/Logger';
import generateToken from 'Utils/generateToken';
import User from 'Models/User';

const friendlyName = 'Facebook Signup';
const description = 'Signup a user using their Facebook data.';
const inputs = {
  user: {
    type: {},
    description: 'Facebook user info object from passport',
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
  // very similar to google signup, didn't couple the logic in case the logic
  // needs to change later on
  const { accessToken: facebookAccessToken, profile } = user;
  const { _json: profileJSON } = profile;
  const { id: facebookId, email, name: displayName } = profileJSON;

  try {
    // if a duplicate google id exists, this user has already signed up. Update our record with information from google.
    // if we have an email that matches the email from google, the user has
    // already signed up using another method. Add the data from google and
    // return success
    const userByFacebookId = await User.query().findOne({ facebookId });
    const userByEmail = await User.query().findOne({ email });
    if (userByFacebookId || userByEmail) {
      // the user in either result should be the same user
      const duplicateUser = userByFacebookId || userByEmail;
      Logger.info('duplicate user, updating user record');
      const updatedUser = await User.query().patchAndFetchById(duplicateUser.id, {
        facebookId,
        email,
        displayName,
        facebookProfile: JSON.stringify(profile),
        facebookAccessToken,
      });
      const publicUserData = updatedUser.toJSON().publicData;
      const accessToken = generateToken(publicUserData);
      return exits.updatedInfo({ user: publicUserData, accessToken });
    }

    const newUser = await User.query().insert({
      facebookId,
      email,
      displayName,
      facebookAccessToken,
    });
    const publicUserData = newUser.toJSON().publicData;
    const accessToken = generateToken(publicUserData);
    return exits.success({ user: publicUserData, accessToken });
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
