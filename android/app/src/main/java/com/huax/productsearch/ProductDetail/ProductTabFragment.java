package com.huax.productsearch.ProductDetail;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TableRow;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.viewpager.widget.ViewPager;

import com.huax.productsearch.DataModel.Info;
import com.huax.productsearch.DataModel.ItemDetail;
import com.huax.productsearch.R;
import com.squareup.picasso.Picasso;

public class ProductTabFragment extends Fragment {
    private TextView title, price, shipping, subtitle, highlightsPrice, brand, specifications;
    private TableRow rowSubtitle, rowPrice, rowBrand;
    private LinearLayout images;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View v = inflater.inflate(R.layout.fragment_product, container, false);
        title = v.findViewById(R.id.title);
        price = v.findViewById(R.id.price);
        shipping = v.findViewById(R.id.shipping_cost);
        subtitle = v.findViewById(R.id.subtitle);
        highlightsPrice = v.findViewById(R.id.hightlights_price);
        brand = v.findViewById(R.id.brand);
        specifications = v.findViewById(R.id.specifications);

        rowSubtitle = v.findViewById(R.id.row_subtitle);
        rowPrice = v.findViewById(R.id.row_price);
        rowBrand = v.findViewById(R.id.row_brand);

        images = v.findViewById(R.id.images);
        updateView(((ProductDetailPagerAdapter) ((ViewPager) container).getAdapter()).getData());

        return v;
    }

    public void updateView(ProductDetail.DetailData data) {
        StringBuilder specification = new StringBuilder();
        boolean isSubtitle = false, isBrand = false, isPrice = false;
        for (Info.KeyPair pair : data.itemDetail.info.itemSpecifics) {
            if (pair.name.equals("Subtitle")) {
                subtitle.setText(pair.value);
                isSubtitle = true;
            } else if (pair.name.equals("Brand")) {
                brand.setText(pair.value);
                isBrand = true;
            } else if (pair.name.equals("Price")) {
                highlightsPrice.setText(pair.value);
                isPrice = true;
            } else
                specification.append("\u2022 " + pair.value + "\n");
        }
        specifications.setText(specification.toString());
        rowSubtitle.setVisibility(isSubtitle ? View.VISIBLE : View.GONE);
        rowBrand.setVisibility(isBrand ? View.VISIBLE : View.GONE);
        rowPrice.setVisibility(isPrice ? View.VISIBLE : View.GONE);

        images.removeAllViews();
        for (String image : data.itemDetail.info.image) {
            ImageView v = new ImageView(getContext());
            v.setLayoutParams(new LinearLayout.LayoutParams(LinearLayout.LayoutParams.WRAP_CONTENT, LinearLayout.LayoutParams.MATCH_PARENT));
            v.setAdjustViewBounds(true);
            Picasso.with(getContext()).load(image).into(v);
            images.addView(v);
        }
        title.setText(data.item.title);
        price.setText("$" + data.item.price);
        if (data.item.shippingDetail.shippingCost != null) {
            shipping.setText(Float.parseFloat(data.item.shippingDetail.shippingCost) == 0 ? "With Free Shipping" : ("With $" + data.item.shippingDetail.shippingCost + " Shipping"));
        }
    }
}
