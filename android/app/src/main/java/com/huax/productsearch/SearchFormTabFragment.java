package com.huax.productsearch;

import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.*;

import com.google.gson.Gson;
import com.huax.productsearch.DataModel.IPAPI;

import java.io.Console;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;


public class SearchFormTabFragment extends Fragment {
    public static final String KEYWORD = "keyword", CATEGORY = "category", CONDITIONNEW = "conditionNew",
            CONDITIONUSED = "conditionUsed", CONDITIONSPECIFIED = "conditionSpecified", LOCALPICKUP = "localPickup",
            FREESHIPPING = "freeShipping", MILESFROM = "milesFrom", FROMZIP = "fromZip", NEARBYSEARCH = "nearBySearch";

    private EditText keyword, milesFrom;
    private AutoCompleteTextView zipcode;
    private Spinner category;
    private CheckBox conditionNew, conditionUsed, conditionSpecified, localPickup, freeShipping, nearBySearch;
    private RadioButton currentLocation, fromZip;
    private View keywordHint, zipcodeHint;
    private String currentZip;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_search_form, container, false);
        keyword = view.findViewById(R.id.keyword);
        milesFrom = view.findViewById(R.id.miles_from);
        zipcode = view.findViewById(R.id.zipcode);
        category = view.findViewById(R.id.category);
        conditionNew = view.findViewById(R.id.checkBox_new);
        conditionUsed = view.findViewById(R.id.checkBox_used);
        conditionSpecified = view.findViewById(R.id.checkBox_unspecifiied);
        localPickup = view.findViewById(R.id.checkBox_local_pickup);
        freeShipping = view.findViewById(R.id.checkBox_free_shipping);
        nearBySearch = view.findViewById(R.id.checkBox_nearby_search);
        currentLocation = view.findViewById(R.id.radio_here);
        fromZip = view.findViewById(R.id.radio_zip);
        keywordHint = view.findViewById(R.id.keyword_hint);
        zipcodeHint = view.findViewById(R.id.zipcode_hint);

        RequestService.getInstance().requestCurrentZip(response -> {
            Gson gson = new Gson();
            IPAPI ret = gson.fromJson(response, IPAPI.class);
            currentZip = ret.zip;
        }, error -> {
        });

        view.findViewById(R.id.search).setOnClickListener((v) -> {
            if (validCheck()) {
                Intent intent = new Intent(getActivity(), SearchResult.class);
                intent.putExtra(KEYWORD, keyword.getText());
                intent.putExtra(CATEGORY, getCategoryValue());
                intent.putExtra(CONDITIONNEW, conditionNew.isChecked());
                intent.putExtra(CONDITIONUSED, conditionUsed.isChecked());
                intent.putExtra(CONDITIONSPECIFIED, conditionSpecified.isChecked());
                intent.putExtra(LOCALPICKUP, localPickup.isChecked());
                intent.putExtra(FREESHIPPING, freeShipping.isChecked());
                intent.putExtra(NEARBYSEARCH, nearBySearch.isChecked());
                if (nearBySearch.isChecked()) {
                    intent.putExtra(MILESFROM, milesFrom.getText());
                    intent.putExtra(FROMZIP, currentLocation.isChecked() ? currentZip : zipcode.getText().toString());
                }
                startActivity(intent);
            } else
                Toast.makeText(getContext(), "Please fix all fields with errors", Toast.LENGTH_LONG).show();
        });

        view.findViewById(R.id.clear).setOnClickListener((v)->{
            keyword.setText("");
            category.setSelection(0);
            conditionNew.setChecked(false);
            conditionUsed.setChecked(false);
            conditionSpecified.setChecked(false);
            localPickup.setChecked(false);
            freeShipping.setChecked(false);
            milesFrom.setText("");
            zipcode.setText("");
            currentLocation.setChecked(true);
            nearBySearch.setChecked(false);
            keywordHint.setVisibility(View.GONE);
            zipcodeHint.setVisibility(View.GONE);

        });
        nearBySearch.setOnCheckedChangeListener((v, checked) ->
                view.findViewById(R.id.nearby_search).setVisibility(checked ? View.VISIBLE : View.GONE));

        CompoundButton.OnCheckedChangeListener fromRadioChangedListener = (v, checked) -> {
            if (checked) {
                (v == currentLocation ? fromZip : currentLocation).setChecked(false);
                zipcode.setEnabled(v == fromZip);
            }
        };
        zipcode.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                RequestService.getInstance().requestZipHint(s.toString(), response -> {
                    Gson gson = new Gson();
                    String[] ret = gson.fromJson(response, String[].class);
                    ArrayAdapter<String> adapter = new ArrayAdapter<>(getContext(), android.R.layout.simple_dropdown_item_1line, ret);
                    zipcode.setAdapter(adapter);
                    adapter.notifyDataSetChanged();
                }, error -> {
                });
            }

            @Override
            public void afterTextChanged(Editable s) {

            }
        });
        currentLocation.setOnCheckedChangeListener(fromRadioChangedListener);
        fromZip.setOnCheckedChangeListener(fromRadioChangedListener);
        return view;
    }

    private int getCategoryValue() {
        switch (category.getSelectedItemPosition()) {
            case 1:
                return 550;
            case 2:
                return 2984;
            case 3:
                return 267;
            case 4:
                return 11450;
            case 5:
                return 58058;
            case 6:
                return 26395;
            case 7:
                return 11233;
            case 8:
                return 1249;
        }
        return 0;
    }

    private boolean validCheck() {
        Boolean ret = true;
        if (keyword.getText().length() == 0) {
            keywordHint.setVisibility(View.VISIBLE);
            ret = false;
        }
        if (nearBySearch.isChecked() && zipcode.isEnabled() && zipcode.getText().length() == 0) {
            zipcodeHint.setVisibility(View.VISIBLE);
            ret = false;
        }
        return ret;
    }
}
