package com.example.storage_service.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.storage_service.client.StorageClient;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class FileSystemStorageService implements StorageService{

  private final StorageClient client;
  private final Path mediaRoot;

  @Autowired
  public FileSystemStorageService(StorageClient client, StorageProperties properties){
    this.client = client;
    this.mediaRoot = Paths.get(properties.getMediaroot());
  }

  @Override
  public void store(MultipartFile file, String filename) {
    try {
      Path destination = getDirectory(filename);
    } catch (IOException e) {
      // TODO
    }

  }

  private Path getDirectory(String filename) throws IOException {
    Path destination = this.mediaRoot.resolve(Paths.get(filename)).normalize().toAbsolutePath();
    Files.createDirectories(destination);
    return destination;
  }

  @Override
  public Stream<Path> loadAll() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'loadAll'");
  }

  @Override
  public Path load(String filename) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'load'");
  }

  @Override
  public Resource loadAsResource(String filename) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'loadAsResource'");
  }

  @Override
  public void deleteAll() {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'deleteAll'");
  }

}
