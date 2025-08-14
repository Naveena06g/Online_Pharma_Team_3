package com.Drug.Drug_project.service;

import com.Drug.Drug_project.entity.Drug;
import com.Drug.Drug_project.exception.ResourceNotFoundException;
import com.Drug.Drug_project.repository.DrugRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DrugService {

    @Autowired
    private DrugRepository drugRepository;

    public List<Drug> getAllDrugs() {
        return drugRepository.findAll();
    }

    public Drug getDrugById(Long id) {
        return drugRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Drug not found with id: " + id));
    }

    public List<Drug> searchDrugsByName(String name) {
        return drugRepository.findByNameContainingIgnoreCase(name);
    }

    public Drug addDrug(Drug drug) {
        return drugRepository.save(drug);
    }

    public Drug updateDrug(Long id, Drug drugDetails) {
        Drug drug = getDrugById(id);
        drug.setName(drugDetails.getName());
        drug.setDescription(drugDetails.getDescription());
        drug.setPrice(drugDetails.getPrice());
        drug.setQuantity(drugDetails.getQuantity());
        return drugRepository.save(drug);
    }

    public void deleteDrug(Long id) {
        Drug drug = getDrugById(id);
        drugRepository.delete(drug);
    }

    public Drug updateStock(Long id, Integer quantity) {
        Drug drug = getDrugById(id);
        drug.setQuantity(quantity);
        return drugRepository.save(drug);
    }
}
