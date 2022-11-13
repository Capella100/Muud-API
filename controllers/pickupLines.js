const PickupLine = require('../models/pickupLines')

const getPickupline = (req, res, next) => {
    try {
        PickupLine.findRandom(function (err, result) {
            if (!err) {
                // console.log("hhh", result);
                res.status(200).json({ result })
            }
        });
        // res.status(200).json({ pickupLine })

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getPickupline
}
