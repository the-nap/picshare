package com.example.storage_service.service.util;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Iterator;

import javax.imageio.IIOImage;
import javax.imageio.ImageIO;
import javax.imageio.ImageWriteParam;
import javax.imageio.ImageWriter;
import javax.imageio.stream.ImageOutputStream;

import org.imgscalr.Scalr;

public class WebpManager {

  public static void manage(InputStream in, OutputStream outMedia, OutputStream outThumbnail) throws IOException{
    BufferedImage tempImage = ImageIO.read(in);
    saveToDisk(tempImage, outMedia, 0.85f);
    tempImage = resize(tempImage, 300);
    saveToDisk(tempImage, outThumbnail, 0.45f);
  }


  private static BufferedImage resize(BufferedImage base, int width){
    return Scalr.resize(base, Scalr.Method.BALANCED, Scalr.Mode.AUTOMATIC, width);
  }

  private static void saveToDisk(BufferedImage image, OutputStream out, float quality) throws IOException{
    ImageWriter writer = getWriter();
    ImageWriteParam param = setQuality(writer, quality);

    writeToDisk(out, image, writer, param);
  }

  private static void writeToDisk(OutputStream out, BufferedImage image, ImageWriter writer, ImageWriteParam param)
      throws IOException {
      try(ImageOutputStream ios = ImageIO.createImageOutputStream(out)) {
        writer.setOutput(out);
        writer.write(null, new IIOImage(image, null, null), param);
      } finally {
        writer.dispose();
      }
  }

  private static ImageWriteParam setQuality(ImageWriter writer, float quality) {
    ImageWriteParam ret = writer.getDefaultWriteParam();
    ret.setCompressionMode(ImageWriteParam.MODE_EXPLICIT);
    ret.setCompressionQuality(quality);
    return ret;
  }

  private static ImageWriter getWriter() {
    return ImageIO.getImageWritersByFormatName("webp").next();
  }


}
