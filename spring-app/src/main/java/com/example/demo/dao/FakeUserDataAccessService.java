package com.example.demo.dao;

import com.example.demo.model.AddResponse;
import com.example.demo.model.AuthResponse;
import com.example.demo.model.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository("fakeDao") // alternatively "@Component" -> instantiates bean
public class FakeUserDataAccessService implements UserDao {

  // mock database for saving user data
  private static List<User> DB = new ArrayList<>();
//  private static List<AuthResponse> AUTH_LOG = new ArrayList<>();

  @Override
  public AddResponse insertUser(User user) {
    for (User user_db : DB) {
      if (user_db.getUsername().equals(user.getUsername())) {
        return new AddResponse(user.getId(), user.getUsername(), true);
      }
    }
    DB.add(new User(user.getId(), user.getUsername(), user.getPassword()));
    return new AddResponse(user.getId(), user.getUsername(), false);
  }

  @Override
  public List<User> selectAllUsers() {
    return DB;
  }

  @Override
  public AuthResponse selectAuthResponse(User user) {
    for (User user_db : DB) {
      if (user_db.getUsername().equals(user.getUsername())
        && user_db.getPassword().equals(user.getPassword())) {
        return new AuthResponse(user.getUsername(), true);
      }
    }
    return new AuthResponse(user.getUsername(), false);
  }

}
