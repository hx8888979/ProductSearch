package com.huax.productsearch.DataModel;

public class Info {
    public String[] image;
    public String url;
    public KeyPair[] itemSpecifics;
    public String globalShipping;
    public String returnsAccepted;
    public String refund;
    public String returnsWithin;
    public String shippingCostPaidBy;

    public class KeyPair {
        public String name;
        public String value;
    }
}