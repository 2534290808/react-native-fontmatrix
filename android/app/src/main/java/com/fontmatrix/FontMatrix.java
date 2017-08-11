package com.fontmatrix;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by lmy2534290808 on 2017/8/8.
 * fontMatrix工具类，单例模式
 */

public class FontMatrix {
    private static FontMatrix fontMatrix = null;

    /**
     * 得到FontMatrix实例
     *
     * @return
     */
    public static FontMatrix getInstance() {
        if (fontMatrix == null) {
            fontMatrix = new FontMatrix();
        }
        return fontMatrix;
    }
    /**
     * 连接多个字节数组
     *
     * @param args
     * @return
     */
    public static byte[] contact(byte[]... args) {
        List list = new ArrayList();
        for (byte[] data : args) {
            list.addAll(Arrays.asList(byte2Integer(data)));
        }
        return integer2Byte((Integer[]) list.toArray(new Integer[0]));
    }
    /**
     * 将byte数组转换为Integer数组
     *
     * @param args
     * @return
     */
    private static Integer[] byte2Integer(byte[] args) {
        Integer[] answer = new Integer[args.length];
        for (int i = 0; i < args.length; i++) {
            answer[i] = (int) args[i];
        }
        return answer;
    }

    /**
     * 将Integer数组转换为byte数组
     *
     * @param args
     * @return
     */
    private static byte[] integer2Byte(Integer[] args) {
        byte[] answer = new byte[args.length];
        for (int i = 0; i < args.length; i++) {
            answer[i] = args[i].byteValue();
        }
        return answer;
    }
    /**
     *将字模数组按列生成字节
     * @param args
     * @return
     */
    public static byte[] reverseFont(byte[][] args){
        byte[] arr=new byte[2*args[0].length];
        int byteCount=0,k=3,data=0;
        Integer ext=240;
        for(int col=0;col<args[0].length;col++){
            for(int row=0;row<args.length;row++){
                data+=args[row][col]* Math.pow(2,k);
                k--;
                if(row==3){
                    arr[byteCount]=((Integer)(data+240)).byteValue();
                    data=0;
                    byteCount++;
                    k=7;
                }
                if(row==args.length-1){
                    arr[byteCount]=((Integer)data).byteValue();
                    data=0;
                    byteCount++;
                    k=3;
                }
            }
        }
        return arr;
    }
    /**
     * 解析字库
     *
     * @param font
     * @param args
     * @return
     */
    public static byte[][] resolveFont(Font font, byte[] args) {
        int byteCount = 0;
        byte[][] arr = new byte[font.getFontMatrixHeight()][font.getFontMatrixWidth()];
        for (int row = 0; row < font.getFontMatrixHeight(); row++) {
            int col = 0;
            for (int k = 0; k < font.getCharacterBytes(); k++) {
                for (int j = 0; j < 8; j++) {
                    if (((args[byteCount] >> (7 - j)) & 0x1) == 1) {
                        arr[row][col] = 0;
                    } else {
                        arr[row][col] = 1;
                    }
                    col++;
                }
                byteCount++;
            }
        }
        return arr;
    }

    /**
     * 获取汉字的区，位（ascii码不需要区码，位码）
     *
     * @param str
     * @return
     */
    public static int[] getByteCode(String str) {
        int[] byteCode = new int[2];
        try {
            byte[] data = str.getBytes("GBK");
            byteCode[0] = data[0] < 0 ? 256 + data[0] : data[0];
            byteCode[1] = data[1] < 0 ? 256 + data[1] : data[1];
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return byteCode;
    }

    /**
     * 读取汉字
     * @param font
     * @param fontResource
     * @param str
     * @return
     */
    public static byte[] read(Font font, InputStream fontResource, String str) {
        int[] byteCode = FontMatrix.getInstance().getByteCode(str);
        return read(font, fontResource, byteCode[0], byteCode[1]);
    }

    /**
     * 读取汉字库中的汉字
     *
     * @param font
     * @param fontResource
     * @param areaCode
     * @param posCode
     * @return
     */
    private static byte[] read(Font font, InputStream fontResource, int areaCode, int posCode) {
        byte[] data = null;
        try {
            long offset = font.getFontMatrixOffsetOfHZK(areaCode, posCode);//偏移量
            fontResource.skip(offset);
            data = new byte[font.getFontMatrixBytes()];
            fontResource.read(data, 0, font.getFontMatrixBytes());
            fontResource.close();
        } catch (Exception ex) {
        }
        return data;
    }

    /**
     * 读取ASC库中否非汉字
     *
     * @param font
     * @param fontResource
     * @param char_
     * @return
     */
    public  static byte[] read(Font font, InputStream fontResource, char char_) {
        byte[] data = null;
        int ascii = (int) char_;
        try {
            data = new byte[font.getFontMatrixBytes()];//定义缓存区大小
            long offset = font.getFontMatrixOffsetOfASC(char_);//asii码在字库里的偏移量
            fontResource.skip(offset);
            fontResource.read(data, 0, font.getFontMatrixBytes());
            fontResource.close();

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
        }
        return data;
    }
}
