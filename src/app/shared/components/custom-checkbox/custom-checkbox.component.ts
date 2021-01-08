import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss']
})
export class CustomCheckboxComponent implements OnInit {
  // Select
  uncheckedIcon: IconDefinition = faSquare;
  checkedIcon: IconDefinition = faCheckSquare;

  @Input() checked = false;
  @Output() checkedChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.checked = !this.checked;
    this.checkedChanged.emit(this.checked);
  }
}
