package com.example.storage_service.service;

import java.io.File;
import java.io.InputStream;
import java.nio.file.Path;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.example.storage_service.client.StorageClient;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class StorageService {

  private final StorageClient client;

  @Value("${storage.media-root}")
  private final String mediaRoot;
  
  public void save(Long postId, InputStream content){
    Path outputPath = createDirectory(postId);
  }

  private Path createDirectory(Long name){
    File dir = new File(mediaRoot +"/" + name);
    return dir.toPath();
  }
}
