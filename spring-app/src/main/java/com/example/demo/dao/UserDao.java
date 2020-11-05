package com.example.demo.dao;

import com.example.demo.model.AddResponse;
import com.example.demo.model.AuthResponse;
import com.example.demo.model.User;

import java.util.List;
import java.util.UUID;

public interface UserDao {

  AddResponse insertUser(User user);

  List<User> selectAllUsers();

  AuthResponse createAuthResponse(User user);

  int authenticateUser(UUID id);
}
