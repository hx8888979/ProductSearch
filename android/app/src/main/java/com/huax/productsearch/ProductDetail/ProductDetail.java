package com.huax.productsearch.ProductDetail;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.viewpager.widget.ViewPager;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.tabs.TabLayout;
import com.google.gson.Gson;
import com.huax.productsearch.DataModel.Item;
import com.huax.productsearch.DataModel.ItemDetail;
import com.huax.productsearch.R;
import com.huax.productsearch.RequestService;
import com.huax.productsearch.WishListDataHolder;

import java.net.URLEncoder;

public class ProductDetail extends AppCompatActivity {
    public class DetailData {
        public ItemDetail itemDetail;
        public Item item;
    }

    private DetailData detailData;

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case R.id.facebook:
                if (detailData.itemDetail != null) {
                    String url = "https://www.facebook.com/dialog/share?app_id=420004688576679&display=popup&redirect_uri=http%3A%2F%2Flocalhost&quote=Buy " +
                            detailData.item.title + " at $" + detailData.item.price + " from link below.&href=" + detailData.itemDetail.info.url;
                    Uri uri = Uri.parse(url);
                    startActivity(new Intent(Intent.ACTION_VIEW, uri));
                }
                break;
            case android.R.id.home:
                finish();
        }
        return true;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getIntent().getStringExtra("item") != null) {
            Gson gson = new Gson();
            detailData = new DetailData();
            detailData.item = gson.fromJson(getIntent().getStringExtra("item"), Item.class);
        } else {
            finish();
        }

        setContentView(R.layout.activity_product_detail);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        setTitle(detailData.item.title);

        final ViewPager view = findViewById(R.id.view);
        FloatingActionButton cart = findViewById(R.id.cart);
        cart.setImageResource(WishListDataHolder.getInstance().check(detailData.item.itemID) ? R.drawable.ic_cart_remove : R.drawable.ic_cart_plus);
        cart.setOnClickListener(v -> {
            setResult(1);
            if (WishListDataHolder.getInstance().check(detailData.item.itemID)) {
                cart.setImageResource(R.drawable.ic_cart_plus);
                WishListDataHolder.getInstance().remove(detailData.item.itemID);
            } else {
                cart.setImageResource(R.drawable.ic_cart_remove);
                WishListDataHolder.getInstance().add(detailData.item);
            }
        });
        TabLayout tabLayout = findViewById(R.id.action_bar_tabs);
        view.addOnPageChangeListener(new TabLayout.TabLayoutOnPageChangeListener(tabLayout));
        tabLayout.addOnTabSelectedListener(new TabLayout.OnTabSelectedListener() {
            @Override
            public void onTabSelected(TabLayout.Tab tab) {
                if (tab != null) {
                    view.setCurrentItem(tab.getPosition());
                }
            }

            @Override
            public void onTabUnselected(TabLayout.Tab tab) {

            }

            @Override
            public void onTabReselected(TabLayout.Tab tab) {

            }
        });
        String params;
        try {
            params = String.format("itemID=%s&itemTitle=%s", detailData.item.itemID, URLEncoder.encode(detailData.item.title, "UTF-8"));
        } catch (Exception e) {
            params = "";
        }

        RequestService.getInstance().requestProductDetail(params, response -> {
                    Gson gson = new Gson();
                    detailData.itemDetail = gson.fromJson(response, ItemDetail.class);
                    ProductDetailPagerAdapter adapter = new ProductDetailPagerAdapter(getSupportFragmentManager(), detailData);
                    view.setAdapter(adapter);
                    findViewById(R.id.loading).setVisibility(View.GONE);
                }, (error) -> {
                    Toast.makeText(this, "Error occur when fetching data. Please try again", Toast.LENGTH_LONG).show();
                }
        );
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.product_detail, menu);
        return true;
    }
}
