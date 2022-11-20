import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diagnosis } from '../interfaces/Diagnosis';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {

  constructor(private http:HttpClient) { }


  getDiagnosisForUser(email:string):Observable<Diagnosis[]>{

return this.http.post<Diagnosis[]>('http://localhost:8000/api/diagnosis/user',{email})
  }

  addTreatment(
    name_treatment:string,
    drug_administered:string,
    doctor_name:string,
    patient_email:string,
    bill:number,
    date:string,
    description:string,
    patient_status:string):Observable<Diagnosis[]>{

      console.log(name_treatment,drug_administered,doctor_name,patient_email,bill,date,description,patient_status)

    return this.http.post<Diagnosis[]>('http://localhost:8000/api/diagnosis',
    {name_treatment,
      drug_administered,
      doctor_name,
      patient_email,
      bill,
      date,
      paid:0,
      description,
      patient_status
    })
  }
}
