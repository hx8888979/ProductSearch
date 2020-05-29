package com.huax.productsearch.ResultList;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import com.google.gson.Gson;
import com.huax.productsearch.DataModel.Item;
import com.huax.productsearch.R;

public class ResultsListFragment extends Fragment {
    private ResultsListAdapter resultsListAdapter = new ResultsListAdapter(this);
    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View v = inflater.inflate(R.layout.fragment_results_list, container, false);
        RecyclerView recyclerView = v.findViewById(R.id.view);

        recyclerView.setLayoutManager(new GridLayoutManager(getContext(), 2));

        recyclerView.setAdapter(resultsListAdapter);
        return v;
    }

    public int updateItemData(Item[] data) {
        resultsListAdapter.updateData(data);
        return data.length;
    }

    public void refresh(){
        resultsListAdapter.notifyDataSetChanged();
    }
    public int updateItemData(String jsonData) {
        Gson gson = new Gson();
        Item[] items = gson.fromJson(jsonData, Item[].class);
        resultsListAdapter.updateData(items);
        return items.length;
    }
}
