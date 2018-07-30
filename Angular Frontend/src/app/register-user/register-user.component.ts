import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  providers: [EventService]
})
export class RegisterUserComponent implements OnInit {

  constructor(public _eventService: EventService, public activeModal: NgbActiveModal) {}
  eventId: number;
  fullname: string;
  email;
  phone;
  formdata;
  Events: any;
  successMessage: boolean;
  errorMessage: boolean;
  successMessageText: string;
  errorMessageText: string;
  @Input() Event;


  ngOnInit() {
      this.formdata = new FormGroup({
         fullname: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(2)
         ])),
         email: new FormControl("", Validators.compose([
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
         ])),
         phone: new FormControl("")
      });
      this.successMessage = false;
      this.errorMessage = false;
  }

  closeUserRegisterModal()
  {
    this.activeModal.close();
  }


  onClickSubmit(userData) {
    this.successMessage = false;
    this.errorMessage = false;
    userData.eventid = this.Event.id; 
    let result = this._eventService.saveUser(userData);
        result.subscribe((data) => {
            if (data.success === "true"){
                this.successMessage = true;
                this.successMessageText = "Success, vi har modtaget tilmelding";
                setTimeout (() => {
                    this.activeModal.close();
                }, 3000);
            } else {
                this.errorMessage = true;
                this.errorMessageText = data.msg;
            }


        },
      (errorData) => {

      });
  }

}

