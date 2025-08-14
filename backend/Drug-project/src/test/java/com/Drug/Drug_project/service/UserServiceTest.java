package com.Drug.Drug_project.service;

import com.Drug.Drug_project.config.JwtUtil;
import com.Drug.Drug_project.dto.LoginRequest;
import com.Drug.Drug_project.entity.User;
import com.Drug.Drug_project.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private JwtUtil jwtUtil;

    @InjectMocks
    private UserService userService;

    private User testUser;
    private LoginRequest loginRequest;

    @BeforeEach
    void setUp() {
        testUser = new User();
        testUser.setId(1L);
        testUser.setName("Test User");
        testUser.setEmail("test@example.com");
        testUser.setPassword("encodedPassword");
        testUser.setMobile("1234567890");
        testUser.setRole(User.Role.MEMBER);
        testUser.setActive(true);

        loginRequest = new LoginRequest();
        loginRequest.setEmail("test@example.com");
        loginRequest.setPassword("password");
    }

    @Test
    void testRegisterUser_Success() {
        when(userRepository.findByEmail("test@example.com")).thenReturn(Optional.empty());
        when(passwordEncoder.encode(any())).thenReturn("encodedPassword");
        when(userRepository.save(any())).thenReturn(testUser);

        String result = userService.register(testUser);

        assertEquals("User registered successfully", result);
    }

    @Test
    void testRegisterUser_AlreadyExists() {
        when(userRepository.findByEmail("test@example.com")).thenReturn(Optional.of(testUser));

        String result = userService.register(testUser);

        assertEquals("User already exists with this email", result);
    }

    @Test
    void testLogin_Success() {
        when(userRepository.findByEmail("test@example.com")).thenReturn(Optional.of(testUser));
        when(passwordEncoder.matches("password", "encodedPassword")).thenReturn(true);
        when(jwtUtil.generateToken("test@example.com")).thenReturn("jwtToken");

        var result = userService.login(loginRequest);

        assertNotNull(result);
        assertEquals("jwtToken", result.get("token"));
    }

    @Test
    void testLogin_UserNotFound() {
        when(userRepository.findByEmail("test@example.com")).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> userService.login(loginRequest));
    }

    @Test
    void testLogin_InvalidPassword() {
        when(userRepository.findByEmail("test@example.com")).thenReturn(Optional.of(testUser));
        when(passwordEncoder.matches("password", "encodedPassword")).thenReturn(false);

        assertThrows(RuntimeException.class, () -> userService.login(loginRequest));
    }
}