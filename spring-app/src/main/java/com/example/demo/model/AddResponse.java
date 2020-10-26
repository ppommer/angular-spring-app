package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class AddResponse {

  private final UUID id;
  private final String username;
  private final boolean alreadyExists;

  public AddResponse(@JsonProperty("id") UUID id,
              @JsonProperty("username") String username,
              @JsonProperty("alreadyExists") boolean alreadyExists) {
    this.id = id;
    this.username = username;
    this.alreadyExists = alreadyExists;
  }

  public UUID getId() {
    return id;
  }

  public String getUsername() {
    return username;
  }

  public boolean getAlreadyExists() {
    return alreadyExists;
  }
}
