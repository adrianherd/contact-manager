import { Component, OnInit } from '@angular/core';
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
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  viewIcon: IconDefinition = faEye;

  // Lead
  quoteIcon: IconDefinition = faQuoteRight;
  callIcon: IconDefinition = faPhoneAlt;
  estimateIcon: IconDefinition = faTag;

  constructor(private modalService: NgbModal) {}

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
  ngOnInit(): void {
  }

}
