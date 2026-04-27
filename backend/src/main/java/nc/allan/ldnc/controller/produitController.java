@RestController
@RequestMapping("/api/produits")
@CrossOrigin(origins = "http://localhost:4200") // pour angular
public class ProduitController {
    
    @Autowired
    private ProduitRepository repo;

    @GetMapping
    public List<Produit> getProduits() {
        return repo.findAll();
    }
}