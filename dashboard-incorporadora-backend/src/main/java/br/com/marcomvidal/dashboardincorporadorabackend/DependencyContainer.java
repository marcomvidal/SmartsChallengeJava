package br.com.marcomvidal.dashboardincorporadorabackend;

import com.google.gson.Gson;
import okhttp3.OkHttpClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class DependencyContainer {

    @Bean
    public OkHttpClient okHttpClient() {
        return new OkHttpClient();
    }

    @Bean
    public Gson gson() {
        return new Gson();
    }
}
