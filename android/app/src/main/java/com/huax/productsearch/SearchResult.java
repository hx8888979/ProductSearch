package com.huax.productsearch;

import android.content.Intent;
import android.os.Bundle;
import android.text.Html;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.fragment.app.FragmentManager;
import com.huax.productsearch.ResultList.ResultsListFragment;

import java.net.URLEncoder;

public class SearchResult extends AppCompatActivity {
    private ResultsListFragment resultsListFragment;

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        if(resultCode ==1){
            resultsListFragment.refresh();
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_search_result);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        FragmentManager manager = getSupportFragmentManager();
        resultsListFragment = (ResultsListFragment) manager.findFragmentById(R.id.fragment);
        TextView searchResult = findViewById(R.id.result);
        View loading = findViewById(R.id.loading);

        StringBuilder params = new StringBuilder();
        try {
            Bundle bundle = getIntent().getExtras();
            params.append("keywords=" + URLEncoder.encode(bundle.getCharSequence(SearchFormTabFragment.KEYWORD).toString(), "UTF-8") + "&");
            if(bundle.getInt(SearchFormTabFragment.CATEGORY) > 0){
                params.append("category=" + bundle.getInt(SearchFormTabFragment.CATEGORY) + "&");
            }
            if(bundle.getBoolean(SearchFormTabFragment.CONDITIONNEW))
                params.append("conditionNew=true&");
            if(bundle.getBoolean(SearchFormTabFragment.CONDITIONUSED))
                params.append("conditionUsed=true&");
            if(bundle.getBoolean(SearchFormTabFragment.CONDITIONSPECIFIED))
                params.append("conditionUnspecified=true&");
            if(bundle.getBoolean(SearchFormTabFragment.LOCALPICKUP))
                params.append("shippingLocal=true&");
            if(bundle.getBoolean(SearchFormTabFragment.FREESHIPPING))
                params.append("shippingFree=true&");
            if(bundle.getBoolean(SearchFormTabFragment.NEARBYSEARCH)){
                params.append("location="+bundle.getString(SearchFormTabFragment.FROMZIP)+"&");
                String miles = bundle.getCharSequence(SearchFormTabFragment.MILESFROM).toString();
                if(!miles.isEmpty())
                    params.append("distance="+miles+"&");
            }
        } catch (Exception e) {

        }
        RequestService.getInstance().requestSearchResult(params.toString(), response -> {
            int numOfResult = resultsListFragment.updateItemData(response);
            loading.setVisibility(View.GONE);
            if(numOfResult > 0) {

                searchResult.setText(Html.fromHtml(String.format("Show <font color=\"#F84B1F\">%d</font> results for <font color=\"#F84B1F\">%s</font>", numOfResult,
                        getIntent().getExtras().getCharSequence(SearchFormTabFragment.KEYWORD).toString())));
            }
            else {
                TextView hint = findViewById(R.id.hint);
                hint.setText("No results");
                hint.setVisibility(View.VISIBLE);
            }
        }, (error) -> {
            loading.setVisibility(View.GONE);
            TextView hint = findViewById(R.id.hint);
            hint.setText("Something error");
            hint.setVisibility(View.VISIBLE);
            Toast.makeText(this,"Error occur when fetching data. Please try again",Toast.LENGTH_LONG).show();
        });
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        if(item.getItemId() == android.R.id.home)
            finish();
        return true;
    }

}
