import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  options: NavItem[] = [
    { name: 'Settings', isExpanded: false, subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Dealer Manager', isExpanded: false, subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Resource Center', isExpanded: false, subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'SEO', isExpanded: false, subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Contact Manager', isExpanded: false, subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Reputation Manager', isExpanded: false, subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Blog', isExpanded: false, subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Client', isExpanded: false, subOptions: ['Sub NavItem', 'Sub NavItem'] },
    { name: 'Features', isExpanded: false, subOptions: ['Sub NavItem', 'Sub NavItem'] },
  ];

  ngOnInit(): void {
  }

  toggleDropdown(i: number): void {
    this.options[i].isExpanded = !this.options[i].isExpanded;
  }
}

type NavItem = {
  name: string;
  isExpanded: boolean;
  subOptions: string[];
}
