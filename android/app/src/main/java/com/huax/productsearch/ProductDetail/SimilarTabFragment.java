package com.huax.productsearch.ProductDetail;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.Spinner;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewpager.widget.ViewPager;
import com.huax.productsearch.R;

public class SimilarTabFragment extends Fragment {
    private SimilarItemAdapter similarItemAdapter;
    private int sortMethod = 0, sortOrder = 0;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View v = inflater.inflate(R.layout.fragment_similar, container, false);

        RecyclerView recyclerView = v.findViewById(R.id.view);
        recyclerView.setLayoutManager(new LinearLayoutManager(getContext()));

        ProductDetail.DetailData data = ((ProductDetailPagerAdapter)((ViewPager)container).getAdapter()).getData();

        Spinner sortMethodView = v.findViewById(R.id.sort_method);
        Spinner sortOrderView = v.findViewById(R.id.sort_order);

        if(data.itemDetail.similarProducts.length > 0) {
            similarItemAdapter = new SimilarItemAdapter(getContext(), data.itemDetail.similarProducts);
            recyclerView.setAdapter(similarItemAdapter);

            sortOrderView.setEnabled(false);
            sortMethodView.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
                @Override
                public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                    sortOrderView.setEnabled(position > 0);
                    sortMethod = position;
                    similarItemAdapter.resort(sortMethod, sortOrder);
                }

                @Override
                public void onNothingSelected(AdapterView<?> parent) {

                }
            });
            sortOrderView.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
                @Override
                public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                    sortOrder = position;
                    similarItemAdapter.resort(sortMethod, sortOrder);
                }

                @Override
                public void onNothingSelected(AdapterView<?> parent) {

                }
            });
        }
        else {
            v.findViewById(R.id.hint).setVisibility(View.VISIBLE);
            sortMethodView.setEnabled(false);
            sortOrderView.setEnabled(false);
        }
        return v;
    }
}
