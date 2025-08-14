package com.Drug.Drug_project.controller;

import com.Drug.Drug_project.dto.ApiResponse;
import com.Drug.Drug_project.entity.Drug;
import com.Drug.Drug_project.service.DrugService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class DrugController {

    @Autowired
    private DrugService drugService;

    // Public endpoints - accessible to all authenticated users
    @GetMapping("/drugs")
    public ResponseEntity<List<Drug>> getAllDrugs() {
        return ResponseEntity.ok(drugService.getAllDrugs());
    }

    @GetMapping("/drugs/{id}")
    public ResponseEntity<Drug> getDrugById(@PathVariable Long id) {
        return ResponseEntity.ok(drugService.getDrugById(id));
    }

    @GetMapping("/drugs/search")
    public ResponseEntity<List<Drug>> searchDrugs(@RequestParam String name) {
        return ResponseEntity.ok(drugService.searchDrugsByName(name));
    }

    // Admin only endpoints
    @PostMapping("/admin/drugs")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse> addDrug(@RequestBody Drug drug) {
        Drug savedDrug = drugService.addDrug(drug);
        return ResponseEntity.ok(new ApiResponse(true, "Drug added successfully", savedDrug));
    }

    @PutMapping("/admin/drugs/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse> updateDrug(@PathVariable Long id, @RequestBody Drug drug) {
        Drug updatedDrug = drugService.updateDrug(id, drug);
        return ResponseEntity.ok(new ApiResponse(true, "Drug updated successfully", updatedDrug));
    }

    @DeleteMapping("/admin/drugs/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse> deleteDrug(@PathVariable Long id) {
        drugService.deleteDrug(id);
        return ResponseEntity.ok(new ApiResponse(true, "Drug deleted successfully"));
    }

    @PutMapping("/admin/drugs/{id}/stock")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse> updateStock(@PathVariable Long id, @RequestParam Integer quantity) {
        Drug updatedDrug = drugService.updateStock(id, quantity);
        return ResponseEntity.ok(new ApiResponse(true, "Stock updated successfully", updatedDrug));
    }
}