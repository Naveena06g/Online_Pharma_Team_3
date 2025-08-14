package com.Drug.Drug_project.service;

import com.Drug.Drug_project.dto.OrderRequest;
import com.Drug.Drug_project.dto.OrderItemRequest;
import com.Drug.Drug_project.entity.Order;
import com.Drug.Drug_project.entity.OrderItem;
import com.Drug.Drug_project.entity.Drug;
import com.Drug.Drug_project.entity.User;
import com.Drug.Drug_project.exception.ResourceNotFoundException;
import com.Drug.Drug_project.repository.OrderRepository;
import com.Drug.Drug_project.repository.UserRepository;
import com.Drug.Drug_project.repository.DrugRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.ArrayList;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DrugRepository drugRepository;

    @Transactional
    public Order createOrder(OrderRequest orderRequest, String userEmail) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Order order = new Order();
        order.setUser(user);

        List<OrderItem> orderItems = new ArrayList<>();
        double totalAmount = 0.0;

        for (OrderItemRequest itemRequest : orderRequest.getItems()) {
            Drug drug = drugRepository.findById(itemRequest.getDrugId())
                    .orElseThrow(
                            () -> new ResourceNotFoundException("Drug not found with id: " + itemRequest.getDrugId()));

            if (drug.getQuantity() < itemRequest.getQuantity()) {
                throw new RuntimeException("Insufficient stock for drug: " + drug.getName());
            }

            OrderItem orderItem = new OrderItem();
            orderItem.setDrug(drug);
            orderItem.setQuantity(itemRequest.getQuantity());
            orderItem.setPrice(drug.getPrice());
            orderItem.setOrder(order);

            orderItems.add(orderItem);
            totalAmount += drug.getPrice() * itemRequest.getQuantity();

            // Update drug stock
            drug.setQuantity(drug.getQuantity() - itemRequest.getQuantity());
            drugRepository.save(drug);
        }

        order.setItems(orderItems);
        order.setTotalAmount(totalAmount);

        return orderRepository.save(order);
    }

    public List<Order> getUserOrders(String userEmail) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return orderRepository.findByUserOrderByOrderDateDesc(user);
    }

    public Order getOrderById(Long id, String userEmail) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found with id: " + id));

        if (!order.getUser().getEmail().equals(userEmail)) {
            throw new RuntimeException("Access denied: This order doesn't belong to you");
        }

        return order;
    }

    public void cancelOrder(Long id, String userEmail) {
        Order order = getOrderById(id, userEmail);

        // Restore drug quantities
        for (OrderItem item : order.getItems()) {
            Drug drug = item.getDrug();
            drug.setQuantity(drug.getQuantity() + item.getQuantity());
            drugRepository.save(drug);
        }

        orderRepository.delete(order);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrderByIdAdmin(Long id) {
        return orderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found with id: " + id));
    }

    public Order updateOrderStatus(Long id, String status) {
        Order order = getOrderByIdAdmin(id);
        // In a real application, you might have an OrderStatus enum
        // For now, we'll just return the order as is
        return order;
    }
}
