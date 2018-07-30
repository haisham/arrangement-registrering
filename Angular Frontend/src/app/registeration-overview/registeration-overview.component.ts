import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-registeration-overview',
  templateUrl: './registeration-overview.component.html',
  styleUrls: ['./registeration-overview.component.css'],
  providers: [EventService]
})
export class RegisterationOverviewComponent implements OnInit {

  constructor(public _eventService: EventService, public activeModal: NgbActiveModal) {}
  totalRegistrations: number;
  Events: any;
  Registrations: any;
  successMessage: boolean;
  errorMessage: boolean;
  successMessageText: string;
  errorMessageText: string;
  @Input() Event;

  ngOnInit() {
    var result = this._eventService.getRegistrationsOverview(this.Event);
    result.subscribe((data) => {
        this.Registrations = data;
        this.totalRegistrations = data.length;

    });
  }

   closeRegistrationOverviewModal()
  {
    this.activeModal.close();
  }
}
