package com.finsight.finsightbackend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    private final JwtDecoder jwtDecoder;

    public SecurityConfig(
            JwtDecoder jwtDecoder
    ) {
        this.jwtDecoder = jwtDecoder;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http
    ) throws Exception {

        http
                .csrf(csrf -> csrf.disable())

                .cors(cors -> {})

                .sessionManagement(session ->
                        session.sessionCreationPolicy(
                                SessionCreationPolicy.STATELESS
                        )
                )

                .authorizeHttpRequests(auth -> auth

                        // Authentication APIs
                        .requestMatchers(
                                "/api/auth/**"
                        ).permitAll()

                        // Public OPTIONS requests
                        .requestMatchers(
                                HttpMethod.OPTIONS,
                                "/**"
                        ).permitAll()

                        // Everything else requires JWT
                        .anyRequest().authenticated()
                )

                .oauth2ResourceServer(
                        oauth2 -> oauth2
                                .jwt(jwt ->
                                        jwt.decoder(jwtDecoder)
                                )
                );

        return http.build();
    }
}
