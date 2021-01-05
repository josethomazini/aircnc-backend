const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
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
