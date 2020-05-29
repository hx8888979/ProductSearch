package com.huax.productsearch;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentPagerAdapter;
import androidx.viewpager.widget.PagerAdapter;
import androidx.viewpager.widget.ViewPager;
import com.huax.productsearch.DataModel.Item;
import com.huax.productsearch.ResultList.ResultsListFragment;

public class WishListTabFragment extends Fragment {

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_wish_list, container, false);
        ViewPager pager = view.findViewById(R.id.fragment);
        View hint = view.findViewById(R.id.nowishes_hint);
        TextView overall = view.findViewById(R.id.overall);
        TextView result = view.findViewById(R.id.result);

        pager.setAdapter(new FragmentPagerAdapter(getFragmentManager()) {
            @NonNull
            @Override
            public Fragment getItem(int position) {
                ResultsListFragment resultsListFragment = new ResultsListFragment();
                WishListDataHolder.getInstance().register((data -> {
                    int numOfResult = resultsListFragment.updateItemData(data);
                    hint.setVisibility(numOfResult > 0 ? View.GONE : View.VISIBLE);
                    overall.setText(String.format("Wishlist total(%d items):", numOfResult));
                    float total = 0;
                    for (Item item : data)
                        total += Float.parseFloat(item.price);
                    result.setText(String.format("$%.2f", total));
                }));
                return resultsListFragment;
            }
            @Override
            public int getCount() {
                return 1;
            }
        });
        return view;
    }
}
