package com.example.storage_service.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.storage_service.client.StorageClient;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class StorageService {

  private final StorageClient client;

  @Value("${storage.media-root}")
  private final String mediaRoot;

  public void save(Long postId, MultipartFile file){
    Path dirPath = createDirectory(postId.toString());
  }

  private Path createDirectory(String name){
    Path path = Paths.get(mediaRoot, name);
    try {
      Files.createDirectories(path);
    } catch (IOException e) {
      e.printStackTrace();
    }
    return path;
  }
}
