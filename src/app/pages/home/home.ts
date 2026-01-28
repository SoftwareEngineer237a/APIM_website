import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {

  // Founder info
  founderName = 'Bishop Guy Léonce BAYONG';
  founderBio1 = `L’Évêque Guy Léonce BAYONG, né le 18 décembre 1973, 
                est un leader apostolique et missionnaire avec plus 
                de 25 années de ministère, qu’il exerce aux côtés de 
                son épouse, le Pst Archange Mireille Bayong. Ensemble, 
                ils ont fondé l’A.P.I.M – Apostolic Prophetic Impact 
                Mission, une Ministère dédiée à l'impaction et à la 
                transformation des cités et des nations.`

  founderBio2 = `Diplômé en leadership, management organisationnel et 
                anthropologie, il est également auteur et enseignant, 
                engagé dans la formation de disciples et de leaders. 
                Son approche allie vision spirituelle, structuration 
                stratégique et transformation au service du Royaume de Dieu.`

  founderBio3 = `Fondateur d’initiatives telles que City Impact 
                International Agency (C.I.I.A) et Women Increase (W.I), 
                ayant déjà accompagné plus de 500 femmes, il est aussi 
                coach matrimonial et père de six enfants. Son ministère 
                se distingue par un fort caractère apostolique et 
                missionnaire.`;

  founderImage = '/assets/images/founder.jpg'; //  actual image

  // Church info
  churchName = 'APIM – Apostolic Prophetic Impact Mission';
  churchNameFr = 'Mission d\'Impact Apostolique et Prophétique (MIAP)';

  // Vision branches (enumerate)
  visionBranches = [
    { name: 'City International Impact Agency (C.I.I.A)', logo: '/assets/images/CIIA.jpg' },
    { name: 'Women Increase (W.I)', logo: '/assets/images/WI.jpg' },
    { name: 'Fondation Chrétienne et Universelle de Solidarité (FOCUS)', logo: '/assets/images/FOCUS.jpg' },
    { name: 'École Biblique', logo: '/assets/images/EB.png' },
    { name: 'Bibliothèque', logo: '/assets/images/Bibio.png' },
    { name: 'Complexe Scolaire et Secondaire', logo: '/assets/images/CS.jpg' },
    { name: 'Complexe Universitaire', logo: '/assets/images/CU.png' },
    { name: 'Radio et Télévision', logo: '/assets/images/TV.png' },
    { name: 'Hôpital', logo: '/assets/images/Hopital.png' },
    { name: 'Imprimerie', logo: '/assets/images/Imprimerie.jpg' },
    { name: 'Maison d’Edition', logo: '/assets/images/ME.png' },
  ];

  // Service times
  serviceTimes = [
    { day: 'Mardi', time: '18h', event: 'Étude Biblique' },
    { day: 'Vendredi', time: '18h', event: 'Prière' },
    { day: 'Dimanche', time: '9h', event: 'Culte de Louanges et Adoration' },
  ];

  constructor(private SeoService: SeoService) {}

  ngOnInit(): void {
    // SEO meta
    this.SeoService.setTitle('A.P.I.M. - Accueil');
    this.SeoService.setDescription('Bienvenue à l\'Église Nous sommes A.P.I.M. Rejoignez-nous pour grandir dans la foi, l\'adoration et le service sous le leadership de l\'Évêque Guy Léonce BAYONG.');
  }
}
