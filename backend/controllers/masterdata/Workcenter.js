import Workcenter from "../../models/masterdata/WorkcenterModel.js";

export const getWorkcenter = async(req, res) =>{
    try {
        const response = await Workcenter.findAll({
            attributes:['id','uuid','name']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getWorkcenterById = async(req, res) =>{
    try {
        const response = await Workcenter.findOne({
            attributes:['id','uuid','name'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createWorkcenter = async(req, res) =>{
    const {name} = req.body;
    try {
        await Workcenter.create({
            name: name
        });
        res.status(201).json({msg: "Data ditambah"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateWorkcenter = async(req, res) =>{
    const workcenter = await Workcenter.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!workcenter) return res.status(404).json({msg: "Data tidak ditemukan"});
    const {name} = req.body;
    try {
        await Workcenter.update({
            name: name
        },{
            where:{
                id: workcenter.id
            }
        });
        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteWorkcenter = async(req, res) =>{
    const workcenter = await Workcenter.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!workcenter) return res.status(404).json({msg: "Data tidak ditemukan"});
    try {
        await Workcenter.destroy({
            where:{
                id: workcenter.id
            }
        });
        res.status(200).json({msg: "Workcenter Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}