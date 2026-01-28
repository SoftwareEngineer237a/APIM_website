import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  // Navigation links
  navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'Donner', path: '/give'},
    { label: 'Connecter', path: '/connect'},
    { label: 'Galerie', path: '/gallery'},
    { label: 'Contact', path: '/contact'}
  ];

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
