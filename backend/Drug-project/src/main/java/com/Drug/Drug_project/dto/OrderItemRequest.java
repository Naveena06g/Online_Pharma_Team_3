package com.Drug.Drug_project.dto;

public class OrderItemRequest {
    private Long drugId;
    private Integer quantity;

    public OrderItemRequest() {}

    public OrderItemRequest(Long drugId, Integer quantity) {
        this.drugId = drugId;
        this.quantity = quantity;
    }

    public Long getDrugId() {
        return drugId;
    }

    public void setDrugId(Long drugId) {
        this.drugId = drugId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
