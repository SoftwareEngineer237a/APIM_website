import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-give',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './give.html',
  styleUrls: ['./give.css']
})
export class Give implements OnInit {

  givingContacts = [
    {
      method: 'Orange Money',
      number: '+237 6 57 10 82 17',
      name: 'Ngo Yetna Pascale',
      icon: '/assets/icons/orange-money.svg',
      link: 'tel:+237657108217'
    },
    {
      method: 'MTN Mobile Money',
      number: '+237 675 08 55 91',
      name: 'Ngo Yetna Pascale',
      icon: '/assets/icons/mtn-momo.svg',
      link: 'tel:+237675085591'
    }
  ];

  givingDesignations = [
    { name: 'Dîmes et Offrandes', image: '/assets/images/tithes-offerings.jpg' },
    { name: 'Missions et Sensibilisation', image: '/assets/images/missions-outreach.jpg' },
    { name: 'Fonds de Construction', image: '/assets/images/building-fund.jpg' },
    { name: 'Projets Spéciaux', image: '/assets/images/special-projects.jpg' }
  ];

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setTitle('Donner | Nous sommes A.P.I.M.');
    this.seo.setDescription(
      'Soutenez la mission de Nous sommes A.P.I.M. par des dons transparents et sécurisés. Votre générosité contribue à transformer les villes et les nations.'
    );
  }
}
