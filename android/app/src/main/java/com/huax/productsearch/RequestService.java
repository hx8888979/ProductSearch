package com.huax.productsearch;

import android.content.Context;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

public class RequestService {
    private static RequestService instance;
    private RequestQueue queue;
    private final String searchResultUrl = "http://hx8888979.us-west-1.elasticbeanstalk.com/search?";
    private final String productDetailUrl = "http://hx8888979.us-west-1.elasticbeanstalk.com/itemDetail?";
    private final String zipHintUrl = "http://hx8888979.us-west-1.elasticbeanstalk.com/zip?q=";
    private final String currentZipUrl = "http://ip-api.com/json";
    private RequestService(Context context) {
        queue = Volley.newRequestQueue(context);
    }

    static RequestService init(Context context) {
        if (instance == null) {
            instance = new RequestService(context);
        }
        return instance;
    }

    static public RequestService getInstance() {
        return instance;
    }

    public void requestCurrentZip( Response.Listener<String> response, Response.ErrorListener error){
        StringRequest request = new StringRequest(Request.Method.GET, currentZipUrl, response, error);
        queue.add(request);
    }

    public void requestZipHint(String q, Response.Listener<String> response, Response.ErrorListener error) {
        StringRequest request = new StringRequest(Request.Method.GET, zipHintUrl + q, response, error);
        queue.add(request);
    }

    public void requestSearchResult(String params, Response.Listener<String> response, Response.ErrorListener error) {
        StringRequest request = new StringRequest(Request.Method.GET, searchResultUrl + params, response, error);
        queue.add(request);
    }

    public void requestProductDetail(String params, Response.Listener<String> response, Response.ErrorListener error) {
        StringRequest request = new StringRequest(Request.Method.GET, productDetailUrl + params, response, error);
        queue.add(request);
    }
}
