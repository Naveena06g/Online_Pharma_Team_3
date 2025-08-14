package com.Drug.Drug_project.controller;


import com.Drug.Drug_project.dto.ApiResponse;
import com.Drug.Drug_project.dto.OrderRequest;
import com.Drug.Drug_project.entity.Order;
import com.Drug.Drug_project.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class OrderController {

    @Autowired
    private OrderService orderService;

    // User endpoints - accessible to authenticated users
    @PostMapping("/user/orders")
    @PreAuthorize("hasAnyRole('ADMIN', 'MEMBER')")
    public ResponseEntity<ApiResponse> createOrder(@RequestBody OrderRequest orderRequest,
                                                   Authentication authentication) {
        String userEmail = authentication.getName();
        Order order = orderService.createOrder(orderRequest, userEmail);
        return ResponseEntity.ok(new ApiResponse(true, "Order created successfully", order));
    }

    @GetMapping("/user/orders")
    @PreAuthorize("hasAnyRole('ADMIN', 'MEMBER')")
    public ResponseEntity<List<Order>> getUserOrders(Authentication authentication) {
        String userEmail = authentication.getName();
        return ResponseEntity.ok(orderService.getUserOrders(userEmail));
    }

    @GetMapping("/user/orders/{id}")
    @PreAuthorize("hasAnyRole('ADMIN', 'MEMBER')")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id, Authentication authentication) {
        String userEmail = authentication.getName();
        return ResponseEntity.ok(orderService.getOrderById(id, userEmail));
    }

    @DeleteMapping("/user/orders/{id}")
    @PreAuthorize("hasAnyRole('ADMIN', 'MEMBER')")
    public ResponseEntity<ApiResponse> cancelOrder(@PathVariable Long id, Authentication authentication) {
        String userEmail = authentication.getName();
        orderService.cancelOrder(id, userEmail);
        return ResponseEntity.ok(new ApiResponse(true, "Order cancelled successfully"));
    }

    // Admin endpoints - accessible to admins only
    @GetMapping("/admin/orders")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @GetMapping("/admin/orders/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Order> getOrderByIdAdmin(@PathVariable Long id) {
        return ResponseEntity.ok(orderService.getOrderByIdAdmin(id));
    }

    @PutMapping("/admin/orders/{id}/status")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse> updateOrderStatus(@PathVariable Long id,
                                                         @RequestParam String status) {
        Order updatedOrder = orderService.updateOrderStatus(id, status);
        return ResponseEntity.ok(new ApiResponse(true, "Order status updated successfully", updatedOrder));
    }
}