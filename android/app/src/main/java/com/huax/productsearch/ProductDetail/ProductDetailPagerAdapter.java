package com.huax.productsearch.ProductDetail;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentPagerAdapter;

public class ProductDetailPagerAdapter extends FragmentPagerAdapter {
    private ProductDetail.DetailData data;

    public ProductDetailPagerAdapter(FragmentManager fragmentManager, ProductDetail.DetailData data) {
        super(fragmentManager);
        this.data = data;
    }

    public ProductDetail.DetailData getData(){
        return data;
    }

    @NonNull
    @Override
    public Fragment getItem(int position) {
        switch (position) {
            case 0:
                return new ProductTabFragment();
            case 1:
                return new ShippingTabFragment();
            case 2:
                return new PhotoTabFragment();
            case 3:
                return new SimilarTabFragment();
        }
        return null;
    }

    @Override
    public int getCount() {
        return 4;
    }

}
