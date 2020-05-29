package com.huax.productsearch.ProductDetail;

import android.content.Intent;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.text.Html;
import android.text.method.LinkMovementMethod;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TableRow;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.core.content.ContextCompat;
import androidx.core.graphics.drawable.DrawableCompat;
import androidx.fragment.app.Fragment;
import androidx.viewpager.widget.ViewPager;

import com.huax.productsearch.R;
import com.wssholmes.stark.circular_score.CircularScoreView;

public class ShippingTabFragment extends Fragment {

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        TextView storeName, feedbackScore, shippingCost, globalShipping, handlingTime, condition, policy, returnWithin, refund, shippingBy;
        CircularScoreView popularity;
        ImageView star;
        View v = inflater.inflate(R.layout.fragment_shipping, container, false);
        storeName = v.findViewById(R.id.store_name);
        storeName.setMovementMethod(LinkMovementMethod.getInstance());
        feedbackScore = v.findViewById(R.id.feedback_score);
        shippingCost = v.findViewById(R.id.shipping_cost);
        globalShipping = v.findViewById(R.id.global_shipping);
        handlingTime = v.findViewById(R.id.handling_time);
        condition = v.findViewById(R.id.condition);
        policy = v.findViewById(R.id.policy);
        returnWithin = v.findViewById(R.id.return_within);
        refund = v.findViewById(R.id.refund);
        shippingBy = v.findViewById(R.id.shipping_by);
        popularity = v.findViewById(R.id.popularity);
        star = v.findViewById(R.id.star);
        ProductDetail.DetailData data = ((ProductDetailPagerAdapter) ((ViewPager) container).getAdapter()).getData();

        //update view
        if (data.itemDetail.seller.popularity == null) {
            ((TableRow) popularity.getParent()).setVisibility(View.GONE);
        } else popularity.setScore(Math.round(Float.parseFloat(data.itemDetail.seller.popularity)));
        if (data.itemDetail.seller.storeName == null) {
            ((TableRow) storeName.getParent()).setVisibility(View.GONE);
        } else
            storeName.setText(Html.fromHtml(String.format("<a href='%s'>%s</a>", data.itemDetail.seller.buyProductAt, data.itemDetail.seller.storeName)));
        if (data.itemDetail.seller.feedbackScore != null) {
            int color = Integer.parseInt(data.itemDetail.seller.feedbackScore);
            Drawable wrappedDrawable = DrawableCompat.wrap(ContextCompat.getDrawable(getContext(),
                    color > 10000 ? R.drawable.ic_star_circle : R.drawable.ic_star_circle_outline));
            Drawable mutableDrawable = wrappedDrawable.mutate();
            if (color < 50)
                color = R.color.yellow;
            else if (color < 100)
                color = R.color.blue;
            else if (color < 500)
                color = R.color.turquoise;
            else if (color < 1000)
                color = R.color.purple;
            else if (color < 5000)
                color = R.color.red;
            else if (color < 10000)
                color = R.color.green;
            else if (color < 25000)
                color = R.color.yellow;
            else if (color < 50000)
                color = R.color.turquoise;
            else if (color < 100000)
                color = R.color.purple;
            else if (color < 500000)
                color = R.color.red;
            else if (color < 1000000)
                color = R.color.green;
            else
                color = R.color.silver;
            DrawableCompat.setTint(mutableDrawable, ContextCompat.getColor(getContext(), color));
            star.setImageDrawable(mutableDrawable);
        } else
            ((TableRow) star.getParent().getParent()).setVisibility(View.GONE);
        setText(feedbackScore, data.itemDetail.seller.feedbackScore);
        setText(shippingCost, data.item.shippingDetail.shippingCost != null ? (Float.parseFloat(data.item.shippingDetail.shippingCost) == 0 ? "Free Shipping" : ("$" + data.item.shippingDetail.shippingCost)) : null);
        setText(globalShipping, data.itemDetail.info.globalShipping);
        setText(handlingTime, data.item.shippingDetail.handlingTime);
        setText(condition, data.item.condition);
        setText(policy, data.itemDetail.info.returnsAccepted);
        setText(returnWithin, data.itemDetail.info.returnsWithin);
        setText(refund, data.itemDetail.info.refund);
        setText(shippingBy, data.itemDetail.info.shippingCostPaidBy);
        int field = 0;
        if (data.itemDetail.seller.storeName == null && data.itemDetail.seller.feedbackScore == null && data.itemDetail.seller.popularity == null && data.itemDetail.seller.feedbackScore == null)
            v.findViewById(R.id.sold_by).setVisibility(View.GONE);
        else ++field;
        if (data.item.shippingDetail.shippingCost == null && data.itemDetail.info.globalShipping == null && data.item.shippingDetail.handlingTime == null && data.item.condition == null)
            v.findViewById(R.id.shipping_info).setVisibility(View.GONE);
        else ++field;
        if (data.itemDetail.info.returnsAccepted == null && data.itemDetail.info.returnsWithin == null && data.itemDetail.info.refund == null && data.itemDetail.info.shippingCostPaidBy == null)
            v.findViewById(R.id.return_policy).setVisibility(View.GONE);
        else ++field;
        if(field == 0)
            v.findViewById(R.id.hint).setVisibility(View.VISIBLE);
        return v;
    }

    private void setText(TextView v, String text) {
        if (text == null) {
            ((TableRow) v.getParent()).setVisibility(View.GONE);
        } else v.setText(text);

    }
}
