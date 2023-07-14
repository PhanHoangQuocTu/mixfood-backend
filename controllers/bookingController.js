const bookingModel = require('../model/booking')

class bookingController {
    //post : create booking
    async booking(req, res) {
        try {
            const { name, phone, email, date, time, note } = req.body;
            // Kiểm tra năm, tháng và ngày
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0
            const currentDay = currentDate.getDate();

            const bookingYear = new Date(date).getFullYear();
            const bookingMonth = new Date(date).getMonth() + 1;
            const bookingDay = new Date(date).getDate();

            if (
                bookingYear !== currentYear ||
                (bookingYear === currentYear && bookingMonth < currentMonth) ||
                (bookingYear === currentYear && bookingMonth === currentMonth && bookingDay < currentDay)
            ) {
                throw new Error('Invalid booking date');
            }
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