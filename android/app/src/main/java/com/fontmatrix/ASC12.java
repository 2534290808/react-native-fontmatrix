package com.fontmatrix;

/**
 * Created by lmy2534290808 on 2017/8/8.
 */

public class ASC12 implements Font{
    public static final int CHARACTER_BYTES = 1;
    public static final int FONT_MATRIX_BYTES = 12;
    public static final int FONT_MATRIX_HEIGHT = 12;
    public static final int FONT_MATRIX_WIDTH = 8;
   // public static final int RAW_FONT_MATRIX_RESOURCE = R.raw.asc12;
    public static final String ASSETS_PATH="asc12";
    private static ASC12 asc12=null;
    public static ASC12 getInstance(){
        if(asc12==null){
            asc12=new ASC12();
        }
        return asc12;
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
        return -1;
    }

    @Override
    public int getFontMatrixOffsetOfASC(char char_) {
        return ((int) char_ - 32) * FONT_MATRIX_BYTES;
    }

    @Override
    public String getAssetsFontMatrixPath() {
        return ASSETS_PATH;
    }
}
