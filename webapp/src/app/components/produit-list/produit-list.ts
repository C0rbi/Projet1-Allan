import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import important pour le *ngFor
import { Produit } from '../../models/produit.model';
import { ProduitService } from '../../services/produit';

@Component({
  selector: 'app-produit-list',
  standalone: true, // Si tu es sur Angular 17/18/19
  imports: [CommonModule],
  templateUrl: './produit-list.html',
  styleUrl: './produit-list.css'
})
export class ProduitListComponent implements OnInit {
  listeProduits: Produit[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    // Dès que le composant s'affiche, on appelle le backend
    this.produitService.getAllProduits().subscribe({
      next: (donnees) => {
        this.listeProduits = donnees;
        console.log('Produits reçus !', donnees);
      },
      error: (err) => console.error('Erreur de connexion au backend', err)
    });
  }
}