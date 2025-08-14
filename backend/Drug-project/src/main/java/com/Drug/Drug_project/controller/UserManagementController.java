package com.Drug.Drug_project.controller;

import com.Drug.Drug_project.dto.ApiResponse;
import com.Drug.Drug_project.entity.User;
import com.Drug.Drug_project.service.UserManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserManagementController {

    @Autowired
    private UserManagementService userManagementService;

    // User profile endpoints
    @GetMapping("/user/profile")
    @PreAuthorize("hasAnyRole('ADMIN', 'MEMBER')")
    public ResponseEntity<User> getUserProfile(Authentication authentication) {
        String userEmail = authentication.getName();
        return ResponseEntity.ok(userManagementService.getUserProfile(userEmail));
    }

    @PutMapping("/user/profile")
    @PreAuthorize("hasAnyRole('ADMIN', 'MEMBER')")
    public ResponseEntity<ApiResponse> updateProfile(@RequestBody User user, Authentication authentication) {
        String userEmail = authentication.getName();
        User updatedUser = userManagementService.updateUserProfile(userEmail, user);
        return ResponseEntity.ok(new ApiResponse(true, "Profile updated successfully", updatedUser));
    }

    @PutMapping("/user/change-password")
    @PreAuthorize("hasAnyRole('ADMIN', 'MEMBER')")
    public ResponseEntity<ApiResponse> changePassword(@RequestParam String oldPassword,
                                                      @RequestParam String newPassword,
                                                      Authentication authentication) {
        String userEmail = authentication.getName();
        userManagementService.changePassword(userEmail, oldPassword, newPassword);
        return ResponseEntity.ok(new ApiResponse(true, "Password changed successfully"));
    }

    // Admin user management endpoints
    @GetMapping("/admin/users")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userManagementService.getAllUsers());
    }

    @GetMapping("/admin/users/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userManagementService.getUserById(id));
    }

    @PutMapping("/admin/users/{id}/activate")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse> activateUser(@PathVariable Long id) {
        User user = userManagementService.activateUser(id);
        return ResponseEntity.ok(new ApiResponse(true, "User activated successfully", user));
    }

    @PutMapping("/admin/users/{id}/deactivate")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse> deactivateUser(@PathVariable Long id) {
        User user = userManagementService.deactivateUser(id);
        return ResponseEntity.ok(new ApiResponse(true, "User deactivated successfully", user));
    }

    @DeleteMapping("/admin/users/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable Long id) {
        userManagementService.deleteUser(id);
        return ResponseEntity.ok(new ApiResponse(true, "User deleted successfully"));
    }

    @GetMapping("/admin/users/pending")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<User>> getPendingUsers() {
        return ResponseEntity.ok(userManagementService.getPendingUsers());
    }

    @PutMapping("/admin/users/{id}/role")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse> updateUserRole(@PathVariable Long id, @RequestParam String role) {
        User user = userManagementService.updateUserRole(id, role);
        return ResponseEntity.ok(new ApiResponse(true, "User role updated successfully", user));
    }
}
