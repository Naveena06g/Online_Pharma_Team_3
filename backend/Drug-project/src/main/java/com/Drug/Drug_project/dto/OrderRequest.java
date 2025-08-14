package com.Drug.Drug_project.dto;

import java.util.List;

public class OrderRequest {
    private List<OrderItemRequest> items;
    private String deliveryAddress;
    private String phoneNumber;

    public OrderRequest() {}

    public OrderRequest(List<OrderItemRequest> items, String deliveryAddress, String phoneNumber) {
        this.items = items;
        this.deliveryAddress = deliveryAddress;
        this.phoneNumber = phoneNumber;
    }

    public List<OrderItemRequest> getItems() {
        return items;
    }

    public void setItems(List<OrderItemRequest> items) {
        this.items = items;
    }

    public String getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
