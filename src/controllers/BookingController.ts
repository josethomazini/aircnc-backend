import { Request, Response } from 'express';

import Booking from '@models/Booking';

export default {
  async store(req: Request, res: Response) {
    const { date } = req.body;

    const booking = await Booking.create({
      user: req.headers.user_id,
      spot: req.params.spot_id,
      date,
    });

    await booking.populate('spot').populate('user').execPopulate();

    return res.json(booking);
  },
};
