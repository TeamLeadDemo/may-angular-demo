import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  @Input() colorInfo = {colorId: 0, colorName: ""};
  @Output() removeEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeInChild(colorId: any){
    // here in child we do not handle the delete event
    // instead we propogate the click event to the parent 
    // component using EventEmitter
    this.removeEvent.emit(colorId);
  }
}
