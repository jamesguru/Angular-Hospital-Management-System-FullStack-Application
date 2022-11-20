import { Request, RequestHandler, Response } from "express";
import Connection from "../helpers/database";
const db = new Connection()
export const createPatient = async (req:Request,res:Response) =>{

    const {name,resident_area,room_admitted,admission_no,id_no,email} = req.body;

    
    try {
        await db.exec('addPatient',{name,resident_area,room_admitted,admission_no,id_no,email})

        res.status(201).json({message:'Patient added successfully '})
    } catch (error) {
        res.status(400).json({error:error})
    }
}

export const deletePatient:RequestHandler<{id:string}> = async (req:Request,res:Response) =>{
const id = req.params.id;

try {
    await db.exec('deletePatient',{id});
    res.status(201).json({message:'deleted successfully'})
} catch (error) {
    res.status(400).json({error:"Something went wrong"})
}
    
}

export const updatePatient:RequestHandler<{id:string}> = async (req:Request,res:Response) => {
    const id =req.params.id;
    const {status} = req.body;
    try {
        await db.exec('updatePatient',{id,status});
        res.status(201).json({message:"patient updated successfully"})
    } catch (error) {
        res.status(400).json({error:"Something went wrong"})
    }

}

export const getPatients = async(req:Request,res:Response) => {

    try{

        const patients = await (await db.exec('getAllpatients')).recordset;
        res.status(200).json(patients);

    }catch(error){

        res.status(400).json({error:"something went wrong"})

    }
}