package com.example.storage_service.service;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.storage_service.client.StorageClient;
import com.example.storage_service.service.exceptions.StorageException;
import com.example.storage_service.service.util.WebpManager;

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
      Path destination = createDirectory(filename);
      Path[] paths = getPaths(destination);
      try(InputStream inputStream = file.getInputStream();
          OutputStream outputStreamMedia = Files.newOutputStream(paths[0], StandardOpenOption.CREATE);
          OutputStream outputStreamThumbnail = Files.newOutputStream(paths[1], StandardOpenOption.CREATE)){

        WebpManager.manage(inputStream, outputStreamMedia, outputStreamThumbnail);

          } catch (IOException e) {
            throw new StorageException("Error while writing file", e);
          }

  }

  private Path[] getPaths(Path destination) {
      Path[] paths = new Path[2];
      paths[0] = destination.resolve("media");
      paths[1] = destination.resolve("thumbnail");
      return paths;
  }

  private Path createDirectory(String filename){
    Path destination = this.mediaRoot.resolve(Paths.get(filename)).normalize().toAbsolutePath();
    try {
      Files.createDirectories(destination);
    } catch (IOException e) {
      throw new StorageException("File cannot be saved");
    }
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
