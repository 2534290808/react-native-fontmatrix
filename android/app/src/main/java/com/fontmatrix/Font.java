package com.fontmatrix;

/**
 * Created by lmy2534290808 on 2017/8/8.
 */

interface Font {
    int getCharacterBytes();//得到单个字符的字节数
    int getFontMatrixBytes();//得到单个字模的字节数
    int getFontMatrixHeight();//得到字模的高度
    int getFontMatrixWidth();//得到字模的宽度
    int getRawFontMatrixResource();//得到字模的源文件
    int getFontMatrixOffsetOfHZK(int areaCode, int posCode);//得到HZK库的偏移量
    int getFontMatrixOffsetOfASC(char char_);//得到ASC库的偏移量
    String getAssetsFontMatrixPath();//得到字模库源文件路径
}
