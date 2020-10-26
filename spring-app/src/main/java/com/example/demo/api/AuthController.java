package com.example.demo.api;

import com.example.demo.model.AuthResponse;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/auth")
@RestController
public class AuthController {

  private final UserService userService;

  public AuthController(UserService userService) {
    this.userService = userService;
  }

  @CrossOrigin
  @PostMapping
  public AuthResponse getAuthResponse(@RequestBody User user) {
    return userService.getAuthResponse(user);
  }

}
