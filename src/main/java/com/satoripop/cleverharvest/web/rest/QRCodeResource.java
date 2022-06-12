package com.satoripop.cleverharvest.web.rest;

import com.google.zxing.WriterException;
import com.satoripop.cleverharvest.service.QRCodeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("api/v1")
public class QRCodeResource {

    private static final String QR_CODE_IMAGE_PATH = "./src/main/resources/QRCode.png";

    private final QRCodeService qrCodeService;

    public QRCodeResource(QRCodeService qrCodeService) {
        this.qrCodeService = qrCodeService;
    }

    @RequestMapping(method = RequestMethod.GET, value = "generate-qr-code")
    public ResponseEntity<?> generateQRCode(@RequestParam("url") String url, @RequestParam("width") Integer width, @RequestParam("height") Integer height) throws IOException, WriterException {
        this.qrCodeService.generateQRCodeImage(url, width, height, QR_CODE_IMAGE_PATH);
        return ResponseEntity.noContent().build();
    }

    @RequestMapping(method = RequestMethod.GET, value = "qr-code-generator")
    public ResponseEntity<?> qRCodeGenerator(@RequestParam("url") String url, @RequestParam("width") Integer width, @RequestParam("height") Integer height) throws IOException, WriterException {
        this.qrCodeService.getQRCodeImage(url, width, height);
        return ResponseEntity.noContent().build();
    }

}
