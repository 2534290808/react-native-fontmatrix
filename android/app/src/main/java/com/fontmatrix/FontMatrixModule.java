package com.fontmatrix;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;

import java.io.IOException;

import static com.fontmatrix.FontMatrix.contact;
import static com.fontmatrix.FontMatrix.resolveFont;
import static com.fontmatrix.FontMatrix.reverseFont;

/**
 * Created by lmy2534290808 on 2017/8/7.
 */

public class FontMatrixModule extends ReactContextBaseJavaModule {
    private static final String MODULE_NAME = "FontMatrix";

    public FontMatrixModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @ReactMethod
    public void drawString(String content, Promise promise) {
        WritableArray array_row = Arguments.createArray();
        try {
            byte[] result = drawString12(content);
            for (int i = 0; i < result.length; i++) {
                array_row.pushInt(result[i]);
            }
            promise.resolve(array_row);
        } catch (IOException e) {
            e.printStackTrace();
            promise.reject("code1",e.getMessage());
        }
    }

    public byte[] drawString12(String str) throws IOException {
        byte[][] temp = new byte[str.length()][];

        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) < 0x80) {
                byte[] characterData = FontMatrix.read(ASC12.getInstance(), this.getReactApplicationContext().getAssets().open(ASC12.ASSETS_PATH), str.charAt(i));
                temp[i] = reverseFont(resolveFont(ASC12.getInstance(), characterData));
            } else {
                byte[] characterData = FontMatrix.read(HZK12.getInstance(), this.getReactApplicationContext().getAssets().open(HZK12.ASSETS_PATH), str.substring(i, i + 1));
                temp[i] = reverseFont(resolveFont(HZK12.getInstance(), characterData));
            }
        }
        return contact(temp);
    }
}
