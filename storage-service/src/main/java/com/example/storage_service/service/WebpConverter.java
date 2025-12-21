package com.example.storage_service.service;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Iterator;

import javax.imageio.IIOImage;
import javax.imageio.ImageIO;
import javax.imageio.ImageWriteParam;
import javax.imageio.ImageWriter;
import javax.imageio.stream.ImageOutputStream;

import org.imgscalr.Scalr;

public class WebpConverter {

  public static BufferedImage getWebP(InputStream input){
    return getBaseImage(input);
  }

  public static BufferedImage resize(BufferedImage base, int width){
    return Scalr.resize(base, Scalr.Method.BALANCED, Scalr.Mode.AUTOMATIC, width);
  }

  public static void saveToDisk(BufferedImage image, Path output, float quality) throws IOException{
    ImageWriter writer = getWriter();
    ImageWriteParam param = setQuality(writer, quality);

    writeToDisk(output, image, writer, param);
  }

  private static void writeToDisk(Path output, BufferedImage image, ImageWriter writer, ImageWriteParam param)
      throws IOException {
    try(ImageOutputStream ios = ImageIO.createImageOutputStream(Files.newOutputStream(output))){
      writer.setOutput(ios);
      
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
    Iterator<ImageWriter> writers = ImageIO.getImageWritersByFormatName("webp");

    if(!writers.hasNext())
      throw new IllegalStateException("No WebP ImageWriter");
    return writers.next();
  }

  private static BufferedImage getBaseImage(InputStream input){
      try {
        return ImageIO.read(input);
      } catch (IOException e) {
        // TODO 
        e.printStackTrace();
      }
      return null;
  }
  
}
