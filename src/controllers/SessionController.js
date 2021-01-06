import User from '../models/User';

async function findOrCreateUserByEmail(email) {
  let user = await User.findOne({ email });

  if (!user) {
    user = await User.create({ email });
  }

  return user;
}

export default {
  async store(req, res) {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        error: 'Email is required',
      });
    }

    const user = await findOrCreateUserByEmail(email);

    return res.json(user);
  },
};
