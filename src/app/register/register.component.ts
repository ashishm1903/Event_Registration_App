import { Component, OnInit } from '@angular/core';
import { EventlistComponent } from '../eventlist/eventlist.component';
import{EventregiService} from '../eventregi.service'
import{FormGroup,FormControl,Validators} from '@angular/forms'
import{Router}from '@angular/router'
import{ActivatedRoute} from '@angular/router';
declare let alertify:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  adduser = new FormGroup({
    Nameofevent: new FormControl(''),
    Name: new FormControl('', Validators.required),
    Address: new FormControl(''),
   
    adharno: new FormControl('', Validators.required),
    mobilenumber: new FormControl('', Validators.maxLength(10)),
   

  })
  constructor(private serv:EventregiService, private active:ActivatedRoute,private rout:Router) { }

  ngOnInit(): void {
   this.serv.getEventListforregistration(this.active.snapshot.params.id).subscribe((result)=>{
      this.adduser=new FormGroup({
       
       Nameofevent: new FormControl(result['eventtopic']),
       Name: new  FormControl(''),
       Address:new FormControl(''),
       adharno:new FormControl(''),
       mobilenumber:new FormControl('')
     })
    })
   
            
}
  addstud()
  {
    if (this.Name.value === "") {
      alertify.alert('Required...!', 'Name Can Not Blank....!!');
    }
    else if (this.adharno.value === "") {
      alertify.alert('Required...!', 'Adhar Number Can Not Blank....!!');
    }
    else{
    this.serv.savestudent(this.adduser.value).subscribe((result)=>{
      console.warn(result)
      console.warn(result['Nameofevent'])
      alertify.alert('Registration....!', 'Register for'+' '+result['Nameofevent']+' '+'is successfull....!!');
      this.rout.navigate(['/Eventlist']);
    })
  }
  }
  get Name() { return this.adduser.get('Name') };
  get adharno() { return this.adduser.get('adharno') };
  get mobilenumber() { return this.adduser.get('mobilenumber') };

}
