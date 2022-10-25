import Group from "../../models/masterdata/GroupModel.js";

export const getGroup = async(req, res) =>{
    try {
        const response = await Group.findAll({
            attributes:['id','uuid','name']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getGroupById = async(req, res) =>{
    try {
        const response = await Group.findOne({
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

export const createGroup = async(req, res) =>{
    const {name} = req.body;
    try {
        await Group.create({
            name: name
        });
        res.status(201).json({msg: "Data ditambah"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateGroup = async(req, res) =>{
    const group = await Group.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!group) return res.status(404).json({msg: "Data tidak ditemukan"});
    const {name} = req.body;
    try {
        await Group.update({
            name: name
        },{
            where:{
                id: group.id
            }
        });
        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteGroup = async(req, res) =>{
    const group = await Group.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!group) return res.status(404).json({msg: "Data tidak ditemukan"});
    try {
        await Group.destroy({
            where:{
                id: group.id
            }
        });
        res.status(200).json({msg: "Group Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}