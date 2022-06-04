const CarService = require('../service/CarService');

class CarController {
	create(req, res) {
		try{
			const result = CarService.create(req.body);
			return res.status(201).json(result);
		}catch(error){
			return res.status(400).json(error);
		}
	}
}

module.exports = new CarController();