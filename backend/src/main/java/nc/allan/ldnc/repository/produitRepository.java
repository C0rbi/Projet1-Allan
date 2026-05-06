package nc.allan.ldnc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import nc.allan.ldnc.entity.Produit;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long> {
    //extends JpaRepository génère automatiquement le code pour Sauvegarder, Supprimer et Lire dans la table Produit
}