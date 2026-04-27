package nc.allan.ldnc.entity;

import jakarta.persistence.*; // Importe @Entity, @Id, etc.
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity 
@Table(name = "produits")
@Getter // getter et setter au-dessus de la classe pour générer les getters pour tous les champs
@Setter
@NoArgsConstructor // Génère un constructeur vide (obligatoire pour JPA)
@AllArgsConstructor // Génère un constructeur avec tous les champs
public class Produit {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nom;
    private Double prix;
    
    @Column(name = "image_url") // Optionnel : précise le nom exact de la colonne en DB si besoin
    private String imageUrl;
}