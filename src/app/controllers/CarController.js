const CarService = require('../service/CarService');
const paginate = require('../helper/utils/paginate/CarPaginate');

class CarController {
	async create(req, res) {
		const payload = req.body;
		try{
			const result = await CarService.create(payload);
			return res.status(201).json(result);
		}catch(error){
			return res.status(400).json(error);
		}
	}

	async find(req, res) {
		try {
			const result = await CarService.find(req.query);
			return res.status(200).json(paginate(result));
		}catch(error){
			return res.status(400).json(error);
		}
	}
	async findById(req, res) {
		const { id } = req.params;
		try {
			const result = await CarService.findById(id);
			return res.status(200).json(result);
		}catch(error){
			return res.status(400).json(error);
		}
	}

	async update(req, res) {
		const { id } = req.params;
		const  payload   = req.body;
		try {
			const result = await CarService.update(id, payload);
			return res.status(200).json(result);
		}catch(error){
			return res.status(400).json(error);
		}
	}

	async delete(req, res) {
		const { id } = req.params;
		try {
			const result = await CarService.delete(id);
			return res.status(200).json(result);
		}catch(error){
			return res.status(400).json(error);
		}
	}

	async updateAccessories(req, res) {
		const { id, descriptionId } = req.params;
		const  payload   = req.body;
		try {
			const result = await CarService.updateAccessories(id, descriptionId, payload);
			return res.status(200).json(result);
		}catch(error){
			return res.status(400).json(error);
		}
	}
}

module.exports = new CarController();