import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSort, faSortDown, faSortUp, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SortType } from '../../types/sort-type.enum';

@Component({
  selector: 'app-sort-icon',
  templateUrl: './sort-icon.component.html',
  styleUrls: ['./sort-icon.component.scss']
})
export class SortIconComponent implements OnInit {
  // Sort
  sortNeutral: IconDefinition = faSort;
  sortAsc: IconDefinition = faSortUp;
  sortDesc: IconDefinition = faSortDown;

  // State
  @Input() sortState: SortType = SortType.SortNone;
  @Output() sortStateChange: EventEmitter<SortType> = new EventEmitter<SortType>();

  ngOnInit(): void {
  }

  toggle(): void {
    if (this.sortState === SortType.SortNone) {
      this.sortState = SortType.SortAscending;
    } else if (this.sortState === SortType.SortAscending) {
      this.sortState = SortType.SortDescending;
    } else {
      this.sortState = SortType.SortNone;
    }
  }

}
