import { Component, OnInit } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { Patient } from '../interfaces/Patient';
import { PatientService } from '../services/patient.service';
import { DiagnosisService } from '../services/diagnosis.service';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent implements OnInit {
  constructor(private patientService:PatientService,private diagnosisService:DiagnosisService) {}

  form!:FormGroup;
  ngOnInit(): void {

    this.form = new FormGroup({
      name_treatment: new FormControl(null, [Validators.required]),
      drug_administered: new FormControl(null, [Validators.required]),
      doctor_name: new FormControl(null, [Validators.required]),

      bill: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      patient_status: new FormControl(null, [Validators.required]),
    
    });

    this.getPatients();
  }
  p: number = 1;
  searchText:string='';
  
  close: boolean = false;
  patient_email!:string;
  faAdd = faAdd;
  patients$!:Observable<Patient[]>;

  showAdd(email:string) {

    this.patient_email=email;
    this.close = !this.close;
  }


  getPatients(){

    this.patients$=this.patientService.getAllPatients();
  }
  setAvailability(){

    console.log(this.form.value)
  }

  Close(){
    this.close = !this.close;
  }

  onSubmit(){
    
    this.diagnosisService.addTreatment(
      this.form.value.name_treatment,
      this.form.value.drug_administered,
      this.form.value.doctor_name,
      this.patient_email,
      this.form.value.bill,
      this.form.value.date,
      this.form.value.description,
      this.form.value.patient_status
      ).subscribe(value => {

        console.log(value)
      });

      this.form.reset();
  }
}
