import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormsModule} from '@angular/forms'
import { RequiredValidator } from '@angular/forms/src/directives/validators';

import { FormatWidth } from '@angular/common/src/i18n/locale_data_api';
import {States} from '../statedata';
import {Country} from '../countrydata';
import {City} from '../citydata';
import {User} from '../user';

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  userList: User[]=[];
  myform:FormGroup;
  states=States;
  country=Country;
  city=City;
  constructor()
  {this.myform = new FormGroup({
                                  Name: new FormControl('',[Validators.required,Validators.minLength(3)]),
                                  LastName:new FormControl('',Validators.required),
                                  Email: new FormControl('',[Validators.required,Validators.email]),
                                  Date:new FormControl(),
                              
                                 
                                  BuildingName: new FormControl('',Validators.required),
                                  StreetAddress: new FormControl('',Validators.required),
                                  Country: new FormControl('',Validators.required),
                                  State: new FormControl('',Validators.required),
                                  City: new FormControl('',Validators.required)
                                  })}
                             
ngOnInit()
    {
       }
       onFormSubmit(myform)
       {/* console.log(this.myform.value) */
         this.userList.push(this.myform.value)

             }
}
