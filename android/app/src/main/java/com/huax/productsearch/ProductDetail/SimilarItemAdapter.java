package com.huax.productsearch.ProductDetail;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import com.huax.productsearch.DataModel.SimilarProduct;
import com.huax.productsearch.R;
import com.squareup.picasso.Picasso;

import java.util.Arrays;

public class SimilarItemAdapter extends RecyclerView.Adapter<SimilarItemAdapter.ViewHolder> {
    private Context context;
    private SimilarProduct[] similarProducts;
    private SimilarProduct[] sortedProducts;

    public SimilarItemAdapter(Context context, SimilarProduct[] similarProducts) {
        this.context = context;
        this.similarProducts = similarProducts;
        sortedProducts = similarProducts.clone();
        notifyDataSetChanged();
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(context).inflate(R.layout.list_item_similar, parent, false);
        return new ViewHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Picasso.with(context).load(sortedProducts[position].image).fit().into(holder.image);
        holder.title.setText(sortedProducts[position].productName);
        holder.price.setText("$" + sortedProducts[position].price);
        if (sortedProducts[position].shippingCost != null)
            holder.shippingCost.setText(Float.parseFloat(sortedProducts[position].shippingCost) == 0 ? "Free Shipping" : ("$" + sortedProducts[position].shippingCost));
        if (sortedProducts[position].daysLeft != null)
            holder.dayLeft.setText(sortedProducts[position].daysLeft + (Integer.parseInt(sortedProducts[position].daysLeft) <= 1 ? " Day Left" : " Days Left"));
        holder.view.setOnClickListener((v) -> {
            Uri uri = Uri.parse(sortedProducts[position].url);
            v.getContext().startActivity(new Intent(Intent.ACTION_VIEW, uri));
        });
    }

    @Override
    public int getItemCount() {
        return sortedProducts.length;
    }

    public static class ViewHolder extends RecyclerView.ViewHolder {
        private TextView title, shippingCost, dayLeft, price;
        private ImageView image;
        private View view;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            view = itemView;
            title = itemView.findViewById(R.id.title);
            shippingCost = itemView.findViewById(R.id.shipping_cost);
            dayLeft = itemView.findViewById(R.id.dayleft);
            price = itemView.findViewById(R.id.price);
            image = itemView.findViewById(R.id.image);
        }
    }

    public void resort(int method, int order) {
        switch (method) {
            case 0:
                sortedProducts = similarProducts.clone();
                break;
            case 1:
                Arrays.sort(sortedProducts, (a, b) -> (order == 0 ? 1 : -1) * a.productName.compareTo(b.productName));
                break;
            case 2:
                Arrays.sort(sortedProducts, (a, b) -> (order == 0 ? 1 : -1) * (Float.compare(Float.parseFloat(a.price), Float.parseFloat(b.price))));
                break;
            case 3:
                Arrays.sort(sortedProducts, (a, b) -> (order == 0 ? 1 : -1) * (Integer.compare(Integer.parseInt(a.daysLeft), Integer.parseInt(b.daysLeft))));
                break;
        }
        notifyDataSetChanged();
    }
}
