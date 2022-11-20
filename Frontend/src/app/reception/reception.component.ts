import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faAdd} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Patient } from '../interfaces/Patient';
import { PatientService } from '../services/patient.service';


@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {
  form!: FormGroup;
  constructor(private patientService:PatientService) { }
  searchText:string="";
  ngOnInit(): void {


    this.getPatients();
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      resident_area: new FormControl(null, [Validators.required]),

      admission_no: new FormControl(null, [Validators.required]),
      id_no: new FormControl(null, [Validators.required]),
      room_admitted: new FormControl(null, [Validators.required]),
    
    });
  }

  p: number = 1;
  collection: any[] = [1]; 
  close:boolean = false;
faAdd=faAdd;

patients$!:Observable<Patient[]>;
  showAdd(){


    this.close=!this.close;
  }

getPatients(){

  this.patients$ = this.patientService.getAllPatients();
}

  onSubmit(){

    this.patientService.addPatient(
      this.form.value.name,
      this.form.value.email,
      this.form.value.resident_area,
      this.form.value.admission_no,
      this.form.value.id_no,
      this.form.value.room_admitted).subscribe((value) =>{

        console.log(value)
      })

      this.form.reset();
      this.getPatients();
  }

}
