package com.satoripop.cleverharvest.service;

import com.google.zxing.WriterException;

import java.io.IOException;

public interface QRCodeService {

    void generateQRCodeImage(String url, int width, int height, String filePath) throws WriterException, IOException;

    byte[] getQRCodeImage(String url, int width, int height) throws WriterException, IOException;
}
