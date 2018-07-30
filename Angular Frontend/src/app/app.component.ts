import { Component } from '@angular/core';
import { EventService } from './services/event.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterationOverviewComponent } from './registeration-overview/registeration-overview.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventService],
})

export class AppComponent {

  mainTitle = 'Registreringer for arrangementer';
  title: string;
  id: number;
  Events: any;
  validTitle = true;
  last_page: any;
  _last_page: number;
  current_page: number;
  total_Events: number;
  per_page: number;
  disablePrev: boolean;
  disableNext: boolean;
  inputFocused: boolean;
  isInEdit: boolean;
  index: number;


  constructor(private _eventService: EventService, private _modalService: NgbModal) {
    this.onLoad();
    this.inputFocused = false;
    this.index = 0;
  }



  onLoad() {
    var result = this._eventService.getEvents();
    result.subscribe((data) => {
      this.last_page = Array(data.last_page);
      this._last_page = data.last_page;
      this.current_page = data.current_page;
      this.per_page = data.per_page;
      this.Events = data.data;
      this.disableNext = true;
      this.disablePrev = false;
      this.total_Events = data.total;

    });

  }
  registerUser(Event) {
    const modal =  this._modalService.open(RegisterUserComponent);
    modal.componentInstance.Event = Event;
  }

   registerationOverview(Event) {
    const modal =  this._modalService.open(RegisterationOverviewComponent);
    modal.componentInstance.Event = Event;
  }

  pageNumber(_number) {
    this.current_page = _number;
    if (this.current_page == 1) {
        this.disablePrev = false;
        this.disableNext = true;
    } else if (this.current_page == this._last_page) {
        this.disableNext = false;
        this.disablePrev = true;
    } else {
        this.disablePrev = true;
        this.disableNext = true;
    }
    var result = this._eventService.getMoreEvents(this.current_page);
    result.subscribe((data) => {
        this.Events = data.data;
        });

  }









}
