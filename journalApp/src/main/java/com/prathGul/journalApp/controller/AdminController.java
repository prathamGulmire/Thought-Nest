package com.prathGul.journalApp.controller;

import com.prathGul.journalApp.entity.User;
import com.prathGul.journalApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private UserService userService;

    @GetMapping("/get-allUsers")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> all = userService.getAll();
        if(all != null && !all.isEmpty()) {
            return new ResponseEntity<>(all, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/create-new-admin")
    public void createNewAdmin(@RequestBody User user) {
        userService.saveAdmin(user);
    }
}
