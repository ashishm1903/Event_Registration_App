import { Component, OnInit } from '@angular/core';
import { Button } from 'selenium-webdriver';
import { EventregiService } from '../eventregi.service'

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  eventlist: any = [];
  dtOptions: DataTables.Settings = {};
  eventtopic: any;
  contactinfo: any;
  register:boolean=true;
  
  p: number = 1;
  clicked: boolean = false;
  constructor(private eventservice: EventregiService) {

  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 15, 25],
      processing: true

    };
    this.eventservice.getEventList().subscribe((result) => {
      console.warn(result)

      this.eventlist = result;
    })

  }
  search() {
    if (this.eventtopic == "") {
      this.ngOnInit();
    }
    else {
      this.eventlist = this.eventlist.filter(res => {
        return res.eventtopic.toLocaleLowerCase().match(this.eventtopic.toLocaleLowerCase());
      })
    }
  }
  contactinfosearch() {
    if (this.contactinfo == "") {
      this.ngOnInit();
    }
    else {
      this.eventlist = this.eventlist.filter(res => {
        return res.contactinfo.toLocaleLowerCase().match(this.contactinfo.toLocaleLowerCase());
      })
    }
  }
  key: string = 'id';
  revers: boolean = false;
  sort(key) {
    this.key = key;
    this.revers = !this.revers;
  }
  disable() {
    this.register=false;
    
  }



}
