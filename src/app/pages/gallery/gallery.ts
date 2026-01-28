import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo';

interface GalleryImage {
  src: string;
  category: string;
  caption: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class Gallery implements OnInit {

  categories = ['Tous', 'Service du Dimanche', 'Women Increase', 'Sensibilisation', 'Conférences'];

  activeCategory = 'Tous';

  images: GalleryImage[] = [
    {
      src: 'assets/images/gallery/sunday-1.jpg',
      category: 'Service du Dimanche',
      caption: 'Louanges et adoration du dimanche'
    },
    {
      src: 'assets/images/gallery/sunday-2.jpg',
      category: 'Service du Dimanche',
      caption: 'Rassemblement de l\'église'
    },
    {
      src: 'assets/images/gallery/wi-1.jpg',
      category: 'Women Increase',
      caption: 'Communion des femmes - Women Increase'
    },
    {
      src: 'assets/images/gallery/outreach-1.jpg',
      category: 'Sensibilisation',
      caption: 'Activité de sensibilisation communautaire'
    },
    {
      src: 'assets/images/gallery/conf-1.jpg',
      category: 'Conférences',
      caption: 'Enseignement et impartition'
    }
  ];

  filteredImages: GalleryImage[] = [];

  lightboxImage: GalleryImage | null = null;

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.filteredImages = this.images;

    this.seo.setTitle('Galerie | APIM – Vie et Événements de l\'Église');
    this.seo.setDescription(
      'Explorez la vie de la Mission d\'Impact Apostolique et Prophétique par des images de services d\'adoration, de programmes de sensibilisation, de conférences et d\'événements de l\'église.'
    );
  }

  filter(category: string) {
    this.activeCategory = category;
    this.filteredImages =
      category === 'Tous'
        ? this.images
        : this.images.filter(img => img.category === category);
  }

  openLightbox(image: GalleryImage) {
    this.lightboxImage = image;
  }

  closeLightbox() {
    this.lightboxImage = null;
  }
}
