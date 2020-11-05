package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class AuthResponse {

  private final UUID id;
  private final boolean authenticated;

  public AuthResponse(@JsonProperty("id") UUID id,
                      @JsonProperty("authenticated") boolean authenticated) {
    this.id = id;
    this.authenticated = authenticated;
  }

  public UUID getId() {
    return this.id;
  }

  public boolean isAuthenticated() {
    return this.authenticated;
  }
}
