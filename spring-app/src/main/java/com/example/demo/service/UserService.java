package com.example.demo.service;

import com.example.demo.dao.UserDao;
import com.example.demo.model.AddResponse;
import com.example.demo.model.AuthResponse;
import com.example.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;


@Service // alternatively "@Component" -> instantiates bean
public class UserService {

  // UserDao not instantiated - no way for constructor to know about it
  private final UserDao userDao;

  @Autowired // injecting in the actual constructor (interface UserDao)
  public UserService(
    @Qualifier("fakeDao") UserDao userDao) {
    this.userDao = userDao;
  }


  public AddResponse addUser(User user) {
    return userDao.insertUser(user);
  }

  public List<User> getAllUsers() {
    return userDao.selectAllUsers();
  }

  public AuthResponse getAuthResponse(User user) {
    return userDao.createAuthResponse(user);
  }

}
