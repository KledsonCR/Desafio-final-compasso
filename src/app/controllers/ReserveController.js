const ReserveService = require('../service/ReserveService');
const paginate = require('../helper/utils/paginate/ReservePaginate');

class ReserveCrontroller {
	async create(req, res) {
		const { id } = req.params;
		const payload = req.body;
		try {
			const result = await ReserveService.create(id, payload);
			return res.status(201).json(result);
		}catch(error){
			return res.status(400).json(error);
		}
	}

	async findAll(req, res) {
		const payload = req.query;
		try {
			const result = await ReserveService.findAll(payload);
			return res.status(200).json(paginate(result));
		}catch(error){
			return res.status(400).json(error);
		}
	}

	async findById(req, res) {
		const { id } = req.params;
		try {
			const result = await ReserveService.findById(id);
			return res.status(200).json(result);
		}catch(error){
			return res.status(400).json(error);
		}
	}

	async update(req, res) {
		const { id } = req.params;
		const  payload   = req.body;
		try {
			const result = await ReserveService.update(id, payload);
			return res.status(200).json(result);
		}catch(error){
			return res.status(400).json(error);
		}
	}

	async delete(req, res) {
		const { id } = req.params;
		try {
			const result = await ReserveService.delete(id);
			return res.status(204).json(result);
		}catch(error){
			return res.status(400).json(error);
		}
	}
}

module.exports = new ReserveCrontroller();