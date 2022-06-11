const RentalService = require('../service/RentalService');

class RentalController {
	async create(req, res) {
		const payload = req.body;
		try {
			const result = await RentalService.create(payload);
			return res.status(201).json(result);
		}catch(error){
			return res.status(500).json(error);		
		}
	}
	async findAll(req, res) {
		const payload = req.query;
		try {
			const result = await RentalService.findAll(payload);
			return res.status(200).json(result);
		}catch(error){
			return res.status(500).json(error);
		}
	}

	async findById(req, res) {
		const { id } = req.params;
		try {
			const result = await RentalService.findById(id);
			return res.status(200).json(result);
		}catch(error){
			return res.status(500).json(error);
		}
	}
}


module.exports = new RentalController();