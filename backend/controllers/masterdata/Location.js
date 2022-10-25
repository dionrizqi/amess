import Location from "../../models/masterdata/LocationModel.js";

export const getLocation = async(req, res) =>{
    try {
        const response = await Location.findAll({
            attributes:['id','uuid','name']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getLocationById = async(req, res) =>{
    try {
        const response = await Location.findOne({
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

export const createLocation = async(req, res) =>{
    const {name} = req.body;
    try {
        await Location.create({
            name: name
        });
        res.status(201).json({msg: "Data ditambah"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateLocation = async(req, res) =>{
    const location = await Location.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!location) return res.status(404).json({msg: "Data tidak ditemukan"});
    const {name} = req.body;
    try {
        await Location.update({
            name: name
        },{
            where:{
                id: location.id
            }
        });
        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteLocation = async(req, res) =>{
    const location = await Location.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!location) return res.status(404).json({msg: "Data tidak ditemukan"});
    try {
        await Location.destroy({
            where:{
                id: location.id
            }
        });
        res.status(200).json({msg: "Location Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}