package com.Drug.Drug_project.repository;

import com.Drug.Drug_project.entity.Order;
import com.Drug.Drug_project.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserOrderByOrderDateDesc(User user);
}