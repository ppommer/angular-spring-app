package com.example.demo.dao;

import com.example.demo.model.AddResponse;
import com.example.demo.model.AuthResponse;
import com.example.demo.model.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


@Repository("fakeDao") // alternatively "@Component" -> instantiates bean
public class FakeUserDataAccessService implements UserDao {

  // mock database for saving user data
  private static final List<User> DB = new ArrayList<>();
  // counting app id requests

  @Override
  public AddResponse insertUser(User user) {
    for (User user_db : DB) {
      if (user_db.getUsername().equals(user.getUsername())) {
        return new AddResponse(user.getId(), true);
      }
    }
    UUID id = UUID.randomUUID();
    DB.add(new User(id, user.getUsername(), user.getPassword()));
    return new AddResponse(id, false);
  }

  @Override
  public List<User> selectAllUsers() {
    return DB;
  }

  @Override
  public AuthResponse createAuthResponse(User user) {
    for (User user_db : DB) {
      if (user_db.getUsername().equals(user.getUsername())
        && user_db.getPassword().equals(user.getPassword())) {
        return new AuthResponse(user_db.getId(), true);
      }
    }
    return new AuthResponse(user.getId(), false);
  }

  @Override
  public int authenticateUser(UUID id) {
    for (User user_db : DB) {
      if (user_db.getId().equals(id)) {
        return 1;
      }
    }
    return 0;
  }

}
