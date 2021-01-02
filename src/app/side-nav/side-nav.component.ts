import { Component, OnInit } from '@angular/core';
import {
  IconDefinition,
  faCog,
  faSitemap,
  faClipboard,
  faSearchPlus,
  faUser,
  faStar,
  faBlog,
  faAddressCard,
  faTools,
  faPlusSquare,
  faMinusSquare,
  faBars,
  faCaretSquareLeft,
  faCaretSquareRight,
  faTachometerAlt,
  faDesktop,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  plusIcon: IconDefinition = faPlusSquare;
  minusIcon: IconDefinition = faMinusSquare;
  barsIcon: IconDefinition = faBars;
  leftIcon: IconDefinition = faCaretSquareLeft;
  rightIcon: IconDefinition = faCaretSquareRight;

  smallMenuExpanded = false;
  largeMenuCondensed = false;

  plainOptions: NavItem[] = [
    { name: 'Dashboard',
      faIcon: faTachometerAlt },
    { name: 'Client Site',
      faIcon: faDesktop },
    { name: 'Feedback',
      faIcon: faComment },
  ];
  options: NavItem[] = [
    { name: 'Settings',
      faIcon: faCog,
      isExpanded: false,
      subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Dealer Manager',
      faIcon: faSitemap,
      isExpanded: false,
      subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Resource Center',
      isExpanded: false,
      faIcon: faClipboard,
      subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'SEO',
      isExpanded: false,
      faIcon: faSearchPlus,
      subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Contact Manager',
      isExpanded: false,
      faIcon: faUser,
      subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Reputation Manager',
      faIcon: faStar,
      isExpanded: false,
      subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Blog',
      isExpanded: false,
      faIcon: faBlog,
      subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Client',
      isExpanded: false,
      faIcon: faAddressCard,
      subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Features',
      faIcon: faTools,
      isExpanded: false,
      subOptions: ['Sub NavItem', 'Sub NavItem'] },
  ];

  ngOnInit(): void {
  }

  toggleDropdown(i: number): void {
    this.options[i].isExpanded = !this.options[i].isExpanded;
    this.resetCondensed();
  }

  resetCondensed(): void {
    this.largeMenuCondensed = false;
  }
}

type NavItem = {
  name: string;
  faIcon?: IconDefinition;
  isExpanded?: boolean;
  subOptions?: string[];
};
