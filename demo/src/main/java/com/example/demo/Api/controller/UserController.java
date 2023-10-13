package com.example.demo.Api.controller; // Assuming your controller package should be "controllers" instead of "models"

import com.example.demo.Api.models.User;
import com.example.demo.Services.UserService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user")
    public Optional<User> getUser(@RequestParam Integer id) {
        Optional<User> user = userService.getuser(id);
        
        if (user.isPresent()){
            return user;
        }
        return null;
    }
}
