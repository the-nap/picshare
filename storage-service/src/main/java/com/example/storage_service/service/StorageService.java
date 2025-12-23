package com.example.storage_service.service;

import java.io.InputStream;
import java.nio.file.Path;
import java.util.stream.Stream;

import org.springframework.core.io.Resource;

public interface StorageService {

  void store(InputStream file, String filename);

  Stream<Path> loadAll();

  Path load(String filename);

  Resource loadAsResource(String filename);

  void deleteAll();
  
}


