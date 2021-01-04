import { AfterViewInit, Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
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
  faSignOutAlt,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  plusIcon: IconDefinition = faPlusSquare;
  minusIcon: IconDefinition = faMinusSquare;
  barsIcon: IconDefinition = faBars;
  leftIcon: IconDefinition = faCaretSquareLeft;
  rightIcon: IconDefinition = faCaretSquareRight;
  powerIcon: IconDefinition = faPowerOff;

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
      isExpandable: true,
      isExpanded: false,
      subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Dealer Manager',
      faIcon: faSitemap,
      isExpandable: true,
      isExpanded: false,
      subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Resource Center',
      isExpandable: true,
      isExpanded: false,
      faIcon: faClipboard,
      subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'SEO',
      isExpandable: true,
      isExpanded: false,
      faIcon: faSearchPlus,
      subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Contact Manager',
      isExpandable: true,
      isExpanded: false,
      faIcon: faUser,
      subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Reputation Manager',
      faIcon: faStar,
      isExpanded: false,
      subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Blog',
      isExpandable: true,
      isExpanded: false,
      faIcon: faBlog,
      subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Client',
      isExpandable: true,
      isExpanded: false,
      faIcon: faAddressCard,
      subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Features',
      isExpandable: true,
      faIcon: faTools,
      isExpanded: false,
      subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Log Off',
      isExpandable: false,
      faIcon: faSignOutAlt,
      isMobileOnly: true, }
  ];

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
  isExpandable?: boolean;
  isExpanded?: boolean;
  subOptions?: string[];
  isMobileOnly?: boolean;
};
