const bookingModel = require('../model/booking')

class bookingController {
    //post : create booking
    async booking(req, res) {
        try {
            const { name, phone, email, date, time, note } = req.body;
            const newBooking = new bookingModel({ name, phone, email, date, time, note });
            const savedBooking = await newBooking.save();
            res.status(200).json(savedBooking);
        } catch (error) {
            console.error('Error creating booking', error);
            res.status(500).json({ error: 'Failed to create booking' });
        }
    }
}

module.exports = new bookingController;