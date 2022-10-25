import Role from "../../models/masterdata/RoleModel.js";

export const getRole = async(req, res) =>{
    try {
        const response = await Role.findAll({
            attributes:['id','uuid','name']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getRoleById = async(req, res) =>{
    try {
        const response = await Role.findOne({
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

export const createRole = async(req, res) =>{
    const {name} = req.body;
    try {
        await Role.create({
            name: name
        });
        res.status(201).json({msg: "Data ditambah"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateRole = async(req, res) =>{
    const role = await Role.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!role) return res.status(404).json({msg: "Data tidak ditemukan"});
    const {name} = req.body;
    try {
        await Role.update({
            name: name
        },{
            where:{
                id: role.id
            }
        });
        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteRole = async(req, res) =>{
    const role = await Role.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!role) return res.status(404).json({msg: "Data tidak ditemukan"});
    try {
        await Role.destroy({
            where:{
                id: role.id
            }
        });
        res.status(200).json({msg: "Role Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}