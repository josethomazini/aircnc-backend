import { Request, Response } from 'express';

import Spot from '@models/Spot';

export default {
  async show(req: Request, res: Response) {
    const spots = await Spot.find({
      user: req.headers.user_id,
    });

    return res.json(spots);
  },
};
