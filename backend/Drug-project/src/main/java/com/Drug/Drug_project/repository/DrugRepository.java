package com.Drug.Drug_project.repository;

import com.Drug.Drug_project.entity.Drug;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface DrugRepository extends JpaRepository<Drug, Long> {
    List<Drug> findByNameContainingIgnoreCase(String name);
}