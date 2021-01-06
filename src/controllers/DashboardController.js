import Spot from '../models/Spot';

export default {
  async show(req, res) {
    const spots = await Spot.find({
      user: req.headers.user_id,
    });

    return res.json(spots);
  },
};
