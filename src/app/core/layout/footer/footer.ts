import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
  currentYear: number = new Date().getFullYear();

  // Footer links
  footerLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'Donner', path: '/give'},
    { label: 'Connecter', path: '/connect'},
    { label: 'Galerie', path: '/gallery'},
    { label: 'Contact', path: '/contact'},
    { label: 'Politique de Confidentialité', path: '/privacy-policy'}
  ];
  
}
