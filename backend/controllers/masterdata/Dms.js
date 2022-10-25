import Dms from "../../models/masterdata/DmsModel.js";
import path from "path";
import fs from "fs";

export const getDms = async(req, res) =>{
    try {
        const response = await Dms.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getDmsById = async(req, res) =>{
    try {
        const response = await Dms.findOne({
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createDms = async(req, res) =>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.name;
    const note = req.body.notes;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/dms/${fileName}`;
    const allowedType = ['.pdf', '.doc', '.docx'];
    
    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid File"});
    if(fileSize > 5000000) return res.status(422).json({msg: "File too large!"});
    file.mv(`./public/dms/${fileName}`, async(err) => {
        if(err) return res.status(500).json({msg: err.message});
        try{
            await Dms.create({name:name, file: fileName, path:url, notes: note});
            res.status(201).json({msg: "File uploaded"});
        }catch(error){
            console.log(error.message);
        }
    });

}

export const updateDms = async(req, res) =>{
    const dms = await Dms.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!dms) return res.status(404).json({msg: "Data tidak ditemukan"});
    let fileName = "";
    if(req.files === null){
        fileName = Dms.file;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        const fileName = file.md5 + ext;
        const allowedType = ['.pdf', '.doc', '.docx'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid File"});
        if(fileSize > 5000000) return res.status(422).json({msg: "File too large!"});

        // const filepath = `./public/dms/${dms.file}`;
        // fs.unlinkSync(filepath);

        file.mv(`./public/dms/${fileName}`, async(err) => {
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.name;
    const note = req.body.notes;
    const url = `${req.protocol}://${req.get("host")}/dms/${fileName}`;
    try {
        await Dms.update({
            name: name, file: fileName, path:url, notes: note
        },{
            where:{
                id: dms.id
            }
        });
        res.status(200).json({msg: "Data Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteDms = async(req, res) =>{
    const dms = await Dms.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!dms) return res.status(404).json({msg: "Data tidak ditemukan"});
    try {
        const filepath = `./public/dms/${dms.file}`;
        fs.unlinkSync(filepath);
        await Dms.destroy({
            where:{
                id: dms.id
            }
        });
        res.status(200).json({msg: "DMS Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const downloadDms = async(req, res) =>{
    const dms = await Dms.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!dms) return res.status(404).json({msg: "Data tidak ditemukan"});
    try {
        const filepath = `./public/dms/${dms.file}`;
        res.download(filepath);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}