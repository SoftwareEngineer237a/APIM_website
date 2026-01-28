import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './connect.html',
  styleUrls: ['./connect.css']
})
export class Connect {

  activeMinistries = [
    {
      name: 'Women Increase (WI)',
      description: 'Une initiative axée sur les femmes dédiée à la croissance spirituelle, au développement du leadership et à l\'impact social.',
      image: '/assets/images/ministries/femmes.jpg',
      facebook: 'https://www.facebook.com/womenincreaseinternational'
    },
    {
      name: 'FOCUS – Fondation Chrétienne Universelle de Solidarité ',
      description: 'La branche de sensibilisation sociale de l\'église, activement impliquée dans des actions humanitaires et le soutien communautaire.',
      image: '/assets/images/ministries/actions-social.jpg',
      facebook: 'https://www.facebook.com/profile.php?id=100062810138444'
    },
    {
      name: 'C.I.I.A – City Impact Internationale Agency',
      description: 'La branche missionnaire axée sur la transformation des villes et des nations avec un caratère missionaire.',
      image: '/assets/images/ministries/voyages-missionaire.jpg',
      facebook: 'https://www.facebook.com/cityimpactagency'
    },
    {
      name: 'Aprogos Bible Institut',
      description: 'Une école biblique avec des enseignants qualifiés et plus de trois promotions diplômées réussies.',
      image: '/assets/images/ministries/bible-school.jpg',
      facebook: null
    }
  ];

  visionProjects = [
    'Bibliothèque',
    'Complexe Scolaire Primaire et Secondaire',
    'Complexe Universitaire',
    'Radio et Télévision',
    'Hôpital',
    'Imprimerie',
    'Maison d\'Édition'
  ];
}

