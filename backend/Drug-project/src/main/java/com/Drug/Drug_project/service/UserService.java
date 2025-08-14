package com.Drug.Drug_project.service;

import com.Drug.Drug_project.config.JwtUtil;
import com.Drug.Drug_project.dto.LoginRequest;
import com.Drug.Drug_project.entity.User;
import com.Drug.Drug_project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    public String register(User user) {
        try {
            // Check if user already exists
            if (userRepository.findByEmail(user.getEmail()).isPresent()) {
                return "User already exists with this email";
            }

            // Set default values
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            user.setRole(User.Role.MEMBER); // Default role
            user.setActive(true);
            user.setCreatedAt(LocalDateTime.now());
            user.setUpdatedAt(LocalDateTime.now());

            userRepository.save(user);
            return "User registered successfully";
        } catch (Exception e) {
            return "Registration failed: " + e.getMessage();
        }
    }

    public Map<String, Object> login(LoginRequest request) {
        Optional<User> userOpt = userRepository.findByEmail(request.getEmail());

        if (userOpt.isEmpty()) {
            throw new RuntimeException("User not found");
        }

        User user = userOpt.get();

        if (!user.isActive()) {
            throw new RuntimeException("Account is deactivated");
        }

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        // Generate JWT token
        String token = jwtUtil.generateToken(user.getEmail());

        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("user", Map.of(
                "id", user.getId(),
                "name", user.getName(),
                "email", user.getEmail(),
                "role", user.getRole().toString()));

        return response;
    }
}