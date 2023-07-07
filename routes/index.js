const authRoute = require('./auth')
const bookingRoute = require('./booking')
const reviewRoute = require('./review')
function route(app) {
    app.use('/api/auth', authRoute)
    app.use('/api/booking', bookingRoute)
    app.use('/api/review', reviewRoute)
}

module.exports = route;