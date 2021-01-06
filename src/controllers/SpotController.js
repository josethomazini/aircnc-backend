import Spot from '../models/Spot';
import User from '../models/User';

export default {
  async index(req, res) {
    const { tech } = req.query;

    const spots = await Spot.find({
      techs: tech,
    });

    return res.json(spots);
  },

  async store(req, res) {
    const userId = req.headers.user_id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ error: "User doesn't exist" });
    }

    const { filename } = req.file;
    const { company, techs, price } = req.body;

    const techList = techs.split(',').map((tech) => tech.trim());

    const spot = await Spot.create({
      user: userId,
      thumbnail: filename,
      techs: techList,
      company,
      price,
    });

    return res.json(spot);
  },
};
