import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact implements OnInit {

  address = 'Yaoundé, Awae Maison Rouge, face École Privée NDEMA';

  phoneNumbers = [
    '+237 699 49 16 03',
    '+237 677 55 36 75',
    '+237 675 04 21 91'
  ];

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setTitle(
      'Nous Contacter | APIM – Mission d\'Impact Apostolique et Prophétique'
    );

    this.seo.setDescription(
      'Contactez la Mission d\'Impact Apostolique et Prophétique (APIM) à Yaoundé. Trouvez notre adresse, nos numéros de téléphone, les directions et les informations de stationnement.'
    );
  }
}
