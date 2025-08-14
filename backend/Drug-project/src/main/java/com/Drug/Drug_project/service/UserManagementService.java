package com.Drug.Drug_project.service;

import com.Drug.Drug_project.entity.User;
import com.Drug.Drug_project.exception.ResourceNotFoundException;
import com.Drug.Drug_project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserManagementService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User getUserProfile(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }

    public User updateUserProfile(String email, User userDetails) {
        User user = getUserProfile(email);
        user.setName(userDetails.getName());
        user.setMobile(userDetails.getMobile());
        return userRepository.save(user);
    }

    public void changePassword(String email, String oldPassword, String newPassword) {
        User user = getUserProfile(email);

        if (!passwordEncoder.matches(oldPassword, user.getPassword())) {
            throw new RuntimeException("Old password is incorrect");
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
    }

    public User activateUser(Long id) {
        User user = getUserById(id);
        user.setActive(true);
        return userRepository.save(user);
    }

    public User deactivateUser(Long id) {
        User user = getUserById(id);
        user.setActive(false);
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        User user = getUserById(id);
        user.setDeleted(true);
        userRepository.save(user);
    }

    public List<User> getPendingUsers() {
        return userRepository.findAll().stream()
                .filter(user -> !user.isActive() && !user.isDeleted())
                .toList();
    }

    public User updateUserRole(Long id, String role) {
        User user = getUserById(id);
        user.setRole(User.Role.valueOf(role.toUpperCase()));
        return userRepository.save(user);
    }
}
