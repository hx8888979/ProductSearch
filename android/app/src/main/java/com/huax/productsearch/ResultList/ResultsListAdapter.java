package com.huax.productsearch.ResultList;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.RecyclerView;

import com.google.gson.Gson;
import com.huax.productsearch.DataModel.Item;
import com.huax.productsearch.ProductDetail.ProductDetail;
import com.huax.productsearch.R;
import com.huax.productsearch.WishListDataHolder;
import com.squareup.picasso.Picasso;


public class ResultsListAdapter extends RecyclerView.Adapter<ResultsListAdapter.ViewHolder> {
    private Item[] resultData;
    private Fragment context;

    public ResultsListAdapter(Fragment context) {
        this.resultData = new Item[0];
        this.context = context;
    }

    public void updateData(Item[] items) {
        resultData = items;
        notifyDataSetChanged();
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(context.getContext()).inflate(R.layout.list_item_result, parent, false);
        return new ViewHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        holder.title.setText(resultData[position].title);
        if (!resultData[position].zip.isEmpty())
            holder.zip.setText("Zip: " + resultData[position].zip);
        if (!resultData[position].shipping.equals("N/A"))
            holder.shippingCost.setText(Float.parseFloat(resultData[position].shipping) == 0 ? "Free Shipping" : ("$" + resultData[position].shipping));
        if (resultData[position].condition != null)
            holder.condition.setText(resultData[position].condition);
        holder.price.setText("$" + resultData[position].price);
        Picasso.with(context.getContext()).load(resultData[position].image).resize(200, 200).into(holder.picture);
        holder.view.setOnClickListener((view) -> {
            Intent intent = new Intent(context.getContext(), ProductDetail.class);
            Gson gson = new Gson();
            intent.putExtra("item", gson.toJson(resultData[position]));
            context.startActivityForResult(intent, 12345);
        });
        holder.cart.setImageResource(WishListDataHolder.getInstance().check(resultData[position].itemID) ? R.drawable.ic_cart_remove : R.drawable.ic_cart_plus);
        holder.cart.setOnClickListener(v -> {
            if (WishListDataHolder.getInstance().check(resultData[position].itemID)) {
                holder.cart.setImageResource(R.drawable.ic_cart_plus);
                WishListDataHolder.getInstance().remove(resultData[position].itemID);
            } else {
                holder.cart.setImageResource(R.drawable.ic_cart_remove);
                WishListDataHolder.getInstance().add(resultData[position]);
            }
        });
    }

    @Override
    public int getItemCount() {
        return resultData.length;
    }

    public static class ViewHolder extends RecyclerView.ViewHolder {
        public TextView title, zip, shippingCost, condition, price;
        public ImageView picture, cart;
        public View view;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            view = itemView;
            title = itemView.findViewById(R.id.title);
            zip = itemView.findViewById(R.id.zip);
            shippingCost = itemView.findViewById(R.id.shipping_cost);
            condition = itemView.findViewById(R.id.condition);
            price = itemView.findViewById(R.id.price);
            picture = itemView.findViewById(R.id.picture);
            cart = itemView.findViewById(R.id.cart);
        }
    }
}
