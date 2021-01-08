import { Component, OnInit } from '@angular/core';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import {
  IconDefinition,
  faTrash,
  faPlus,
  faAngleRight,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleDoubleLeft,
  faQuoteRight,
  faTag,
  faPhoneAlt,
  faStar,
  faEnvelope,
  faCalendarPlus,
  faReply,
  faQuestionCircle,
  faClipboardList,
  faStickyNote,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'content-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.scss']
})
export class ContactManagerComponent implements OnInit {
  // add, delete, help
  addIcon: IconDefinition = faPlus;
  deleteIcon: IconDefinition = faTrash;
  helpIcon: IconDefinition = faQuestionCircle;

  // Table navigation
  firstPageIcon: IconDefinition = faAngleDoubleLeft;
  prevPageIcon: IconDefinition = faAngleLeft;
  nextPageIcon: IconDefinition = faAngleRight;
  lastPageIcon: IconDefinition = faAngleDoubleRight;

  // Contact Actions
  surveyIcon: IconDefinition = faClipboardList;
  reviewIcon: IconDefinition = faStar;
  emailIcon: IconDefinition = faEnvelope;
  appointmentIcon: IconDefinition = faCalendarPlus;
  replyIcon: IconDefinition = faReply;
  noteIcon: IconDefinition = faStickyNote;

  // Lead
  quoteIcon: IconDefinition = faQuoteRight;
  callIcon: IconDefinition = faPhoneAlt;
  estimateIcon: IconDefinition = faTag;

  constructor() { }

  ngOnInit(): void {
  }

}
