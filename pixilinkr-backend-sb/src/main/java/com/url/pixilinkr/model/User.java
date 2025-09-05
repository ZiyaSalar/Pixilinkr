package com.url.pixilinkr.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // the id set implicitly by DB (Not Hibernate)
    private Long id;
    private String email;
    private String username;
    private String password;
    private String role = "ROLE_USER";
}
