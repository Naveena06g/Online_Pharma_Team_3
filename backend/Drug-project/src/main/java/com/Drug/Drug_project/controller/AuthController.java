package com.Drug.Drug_project.controller;

import com.Drug.Drug_project.dto.ApiResponse;
import com.Drug.Drug_project.dto.LoginRequest;
import com.Drug.Drug_project.dto.UserRegistrationRequest;
import com.Drug.Drug_project.entity.User;
import com.Drug.Drug_project.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<ApiResponse> register(@Valid @RequestBody UserRegistrationRequest request) {
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setMobile(request.getMobile());

        String message = userService.register(user);
        boolean success = !message.contains("already exists");

        return ResponseEntity.ok(new ApiResponse(success, message));
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse> login(@Valid @RequestBody LoginRequest request) {
        try {
            Map<String, Object> response = userService.login(request);
            return ResponseEntity.ok(new ApiResponse(true, "Login successful", response));
        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse(false, e.getMessage()));
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<ApiResponse> logout() {
        // In JWT, logout is typically handled client-side by removing the token
        return ResponseEntity.ok(new ApiResponse(true, "Logged out successfully"));
    }
}
