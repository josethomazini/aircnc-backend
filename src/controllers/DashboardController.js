const Spot = require('../models/Spot');

module.exports = {
  async show(req, res) {
    const spots = await Spot.find({
      user: req.headers.user_id,
    });

    return res.json(spots);
  },
};
