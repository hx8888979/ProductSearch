package com.huax.productsearch;

import android.content.Intent;
import android.os.Handler;
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;

public class SplashActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        new Handler().postDelayed(()->{
            Intent intent = new Intent(this,MainActivity.class);
            startActivity(intent);
            finish();
        },3000);
    }
}
