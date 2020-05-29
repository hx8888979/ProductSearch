package com.huax.productsearch.ProductDetail;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.viewpager.widget.ViewPager;
import com.huax.productsearch.R;
import com.squareup.picasso.Picasso;

public class PhotoTabFragment extends Fragment {

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View v = inflater.inflate(R.layout.fragment_photos, container, false);
        LinearLayout images = v.findViewById(R.id.images);

        ProductDetail.DetailData data = ((ProductDetailPagerAdapter) ((ViewPager) container).getAdapter()).getData();

        for (String image : data.itemDetail.photos) {
            View card = inflater.inflate(R.layout.list_item_photo, images, false);
            ImageView view = card.findViewById(R.id.image);
            Picasso.with(getContext()).load(image).into(view);
            images.addView(card);
        }
        return v;
    }
}
