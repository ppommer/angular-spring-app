package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class AddResponse {

  private final UUID id;
  private final boolean alreadyExists;

  public AddResponse(
    @JsonProperty("id") UUID id,
    @JsonProperty("alreadyExists") boolean alreadyExists) {
    this.id = id;
    this.alreadyExists = alreadyExists;
  }

  public UUID getId() {
    return this.id;
  }

  public boolean getAlreadyExists() {
    return this.alreadyExists;
  }
}
