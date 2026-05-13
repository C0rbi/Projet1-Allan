package nc.allan.ldnc.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Autorise tous les chemins (api/produits, api/users, etc.)
                .allowedOrigins("http://localhost:4200") // L'adresse par défaut d'Angular
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Les actions autorisées
                .allowedHeaders("*"); // Autorise tous les headers
    }
}