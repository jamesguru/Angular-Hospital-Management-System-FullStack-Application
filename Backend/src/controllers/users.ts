import { Request, RequestHandler, Response } from "express";

import bcrypt from "bcrypt";
import { loginSchema, registerSchema } from "../helpers/userValidation";
import jwt from "jsonwebtoken";

import Connection from "../helpers/database";

const db = new Connection();

export const signUp = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;
  console.log(name);

  try {
    const { error, value } = registerSchema.validate(req.body);

    if (error) {
      res.status(500).json(error.details[0].message);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.exec("signUp", {
      name,
      email,
      role,
      password: hashedPassword,
    });

    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: "server is unable to handle request" });
  }
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { error, value } = loginSchema.validate(req.body);

    const user = await db.exec("signin", { email });

    if (!user?.recordset[0]) {
      return res.status(200).json({ message: "not found" });
    }

    const userData = user?.recordset[0] as {
      id: number;
      name: string;
      email: string;
      password: string;
      role: string;
    };

    bcrypt.compare(password, userData.password, (err, data) => {
      if (data) {
        const { role, name, id, email, ...others } = userData;

        const user = { role, name, id, email };

        const token = jwt.sign(user, process.env.KEY as string, {
          expiresIn: "30days",
        });

        res.status(200).json({ user, token });
      } else {
        res.status(200).json({ message: "wrong password" });
      }
    });

    if (error) {
      res.status(500).json(error.details[0].message);
    }
  } catch (error) {

    res.status(400).json({error:error})
  }
};



export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await (await db.exec("getAllusers")).recordset;

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: "something went wrong" });
  }
};

export const deleteUsers: RequestHandler<{ id: string }> = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;

  try {
    await db.exec("deleteUsers", { id });
    res.status(201).json({ message: "user is deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Something went wrong" });
  }
};

export const getDoctors= async(req:Request,res:Response)=>{

  
try {
  
  const doctors = await (await db.exec('getDoctors')).recordset;
  res.status(200).json(doctors);
} catch (error) {
  res.status(400).json({error:"Something went wrong"});
}

}