package com.fontmatrix;

/**
 * Created by lmy2534290808 on 2017/8/8.
 */

public class HZK12 implements Font{
    public static final int CHARACTER_BYTES = 2;
    public static final int FONT_MATRIX_BYTES = 24;
    public static final int FONT_MATRIX_HEIGHT = 12;
    public static final int FONT_MATRIX_WIDTH = 16;
    //public static final int RAW_FONT_MATRIX_RESOURCE = R.raw.hzk12;
    public static final String ASSETS_PATH="hzk12";
    private static HZK12 hzk12=null;
    public static HZK12 getInstance(){
        if(hzk12==null){
            hzk12=new HZK12();
        }
        return hzk12;
    }
    public static final int getFontMatrixOffset(int areaCode,int posCode) {
        return FONT_MATRIX_BYTES * ((areaCode-0xa0 - 1) * 94 + posCode-0xa0 - 1);
    }

    @Override
    public int getCharacterBytes() {
        return CHARACTER_BYTES;
    }

    @Override
    public int getFontMatrixBytes() {
        return FONT_MATRIX_BYTES;
    }

    @Override
    public int getFontMatrixHeight() {
        return FONT_MATRIX_HEIGHT;
    }

    @Override
    public int getFontMatrixWidth() {
        return FONT_MATRIX_WIDTH;
    }

    @Override
    public int getRawFontMatrixResource() {
        //return RAW_FONT_MATRIX_RESOURCE;
        return -1;
    }

    @Override
    public int getFontMatrixOffsetOfHZK(int areaCode, int posCode) {
        return FONT_MATRIX_BYTES * ((areaCode-0xa0 - 1) * 94 + posCode-0xa0 - 1);
    }

    @Override
    public int getFontMatrixOffsetOfASC(char char_) {
        return -1;
    }

    @Override
    public String getAssetsFontMatrixPath() {
        return ASSETS_PATH;
    }
}
