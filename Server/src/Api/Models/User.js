import { Model } from 'objection';
import Password from 'objection-password';

const PasswordModel = Password({
  allowEmptyPassword: true,
});

export default class User extends PasswordModel(Model) {
  static tableName = 'users';

  static get virtualAttributes() {
    return ['publicData'];
  }

  publicData() {
    const { id, email, username, displayName, googleProfile, facebookProfile } = this;
    return {
      id,
      email,
      username,
      displayName,
      googleProfile: JSON.parse(googleProfile || null),
      facebookProfile: JSON.parse(facebookProfile || null),
    };
  }

  static jsonSchema = {
    type: 'object',
    required: ['email'],

    properties: {
      id: { type: 'integer' },
      googleId: { type: 'string', minLength: 1, maxLength: 255 },
      facebookId: { type: 'string', minLength: 1, maxLength: 255 },
      email: { type: 'string', minLength: 1, maxLength: 255 },
      username: { type: 'string', minLength: 1, maxLength: 255 },
      password: { type: 'string', minLength: 1, maxLength: 255 },
      displayName: { type: 'string', minLength: 1, maxLength: 255 },
      googleProfile: { type: 'json' },
      facebookProfile: { type: 'json' },
      googleAccessToken: { type: 'text' },
      facebookAccessToken: { type: 'text' },
    },
  };
}
