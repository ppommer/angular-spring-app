package com.example.demo.api;

import com.example.demo.model.AddResponse;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * RequestBody: Turn JSON object into User object
 */

@RequestMapping("api/user")
@RestController
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @CrossOrigin
  @PostMapping
  public AddResponse addUser(@RequestBody User user) {
    return userService.addUser(user);
  }

  @CrossOrigin
  @GetMapping
  public List<User> getAllUsers() {
    return userService.getAllUsers();
  }

}
