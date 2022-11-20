import express, { json, NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { appointmentRoute, diagnosisRoute, userRoute,patientRoute } from "./routes";

const app = express();
dotenv.config();
app.use(json());
app.use(cors())

const PORT = process.env.PORT;

app.use('/api/diagnosis',diagnosisRoute)
app.use('/api/users',userRoute)
app.use('/api/patients',patientRoute)
app.use('/api/appointments',appointmentRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err.message) {
    res.status(500).json({ message: err.message });
  }
});
