import { Request, Response } from 'express';

import User from '../models/User';

async function findOrCreateUserByEmail(email: string) {
  let user = await User.findOne({ email });

  if (!user) {
    user = await User.create({ email });
  }

  return user;
}

export default {
  async store(req: Request, res: Response) {
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
