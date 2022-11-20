import express from 'express';
import dotenv from 'dotenv'
import cron from 'node-cron'
import WelcomeEmail from './EmailService/WelcomeEmail';
import AppointmentEmail from './EmailService/AppointmentEmail';
import ReportEmail from './EmailService/AdmissionReport';
import diagnosisEmail from './EmailService/diagnosisEmail';


const app = express()


const run =() => {

    cron.schedule('* * * * *', () => {

        WelcomeEmail();
        AppointmentEmail();
        ReportEmail();
        diagnosisEmail();
       
        
    })

}

run();

app.listen(8001, () =>{

    console.log('Background services run on port 8001');
})