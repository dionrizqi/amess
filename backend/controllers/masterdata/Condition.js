import Condition from "../../models/masterdata/ConditionModel.js";

export const getCondition = async(req, res) =>{
    try {
        const response = await Condition.findAll({
            attributes:['id','uuid','name']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getConditionById = async(req, res) =>{
    try {
        const response = await Condition.findOne({
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

export const createCondition = async(req, res) =>{
    const {name} = req.body;
    try {
        await Condition.create({
            name: name
        });
        res.status(201).json({msg: "Data ditambah"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateCondition = async(req, res) =>{
    const condition = await Condition.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!condition) return res.status(404).json({msg: "Data tidak ditemukan"});
    const {name} = req.body;
    try {
        await Condition.update({
            name: name
        },{
            where:{
                id: condition.id
            }
        });
        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteCondition = async(req, res) =>{
    const condition = await Condition.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!condition) return res.status(404).json({msg: "Data tidak ditemukan"});
    try {
        await Condition.destroy({
            where:{
                id: condition.id
            }
        });
        res.status(200).json({msg: "Condition Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}