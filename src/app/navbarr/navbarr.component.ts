import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-navbarr',
  standalone: true,
  imports: [CommonModule, AppRoutingModule],
  templateUrl: './navbarr.component.html',
  styleUrls: ['./navbarr.component.css'],
})
export class NavbarrComponent {}
