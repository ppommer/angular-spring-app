package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AuthResponse {

  private final String username;
  private final boolean authenticated;

  public AuthResponse(@JsonProperty("username") String username,
                      @JsonProperty("authenticated") boolean authenticated) {
    this.username = username;
    this.authenticated = authenticated;
  }

  public String getUsername() {
    return username;
  }

  public boolean isAuthenticated() {
    return authenticated;
  }
}
