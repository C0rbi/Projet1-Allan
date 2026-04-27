package nc.allan.ldnc.repository;

import nc.allan.ldnc.model.Produit; // Vérifie que le chemin vers ton entité est bon
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long> {
    //extends JpaRepository génère automatiquement le code pour Sauvegarder, Supprimer et Lire dans la table Produit
}