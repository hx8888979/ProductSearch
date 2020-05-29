package com.huax.productsearch;

import android.content.Context;
import android.content.SharedPreferences;
import android.widget.Toast;

import com.google.gson.Gson;
import com.huax.productsearch.DataModel.Item;

import java.util.HashMap;
import java.util.LinkedList;

public class WishListDataHolder {
    public interface OnDataUpdateListener {
        void updateData(Item[] data);
    }

    private static WishListDataHolder instance;
    private LinkedList<Item> data;
    private HashMap<String, Item> lookup;
    private OnDataUpdateListener listener;
    private SharedPreferences.Editor editor;
    private Context context;

    public static void init(Context context) {
        instance = new WishListDataHolder(context);
    }

    public static WishListDataHolder getInstance() {
        return instance;
    }

    public void register(OnDataUpdateListener listener) {
        this.listener = listener;
        updateData();
    }

    private void updateData() {
        Gson gson = new Gson();
        Item[] temp = data.toArray(new Item[data.size()]);
        editor.putString("wishlist",gson.toJson(temp));
        editor.commit();
        if (listener != null)
            listener.updateData(temp);
    }

    public Boolean check(String id) {
        return lookup.containsKey(id);
    }

    public void add(Item item) {
        data.add(item);
        lookup.put(item.itemID, item);
        updateData();
        Toast.makeText(context, item.title.substring(0, Math.min(40, item.title.length())) + " was added to wish list", Toast.LENGTH_LONG).show();
    }

    public void remove(String id) {
        if (lookup.containsKey(id)) {
            Toast.makeText(context, lookup.get(id).title.substring(0, Math.min(40, lookup.get(id).title.length())) + " was removed from wish list", Toast.LENGTH_LONG).show();
            data.remove(lookup.get(id));
            lookup.remove(id);
            updateData();
        }
    }

    private WishListDataHolder(Context context) {
        SharedPreferences preferences = context.getSharedPreferences("wishlist", Context.MODE_PRIVATE);
        this.context = context;
        editor = preferences.edit();
        Gson gson = new Gson();
        Item[] items = gson.fromJson(preferences.getString("wishlist", "[]"), Item[].class);
        data = new LinkedList<>();
        lookup = new HashMap<>(items.length);
        for (Item item : items) {
            data.add(item);
            lookup.put(item.itemID, item);
        }
    }
}
