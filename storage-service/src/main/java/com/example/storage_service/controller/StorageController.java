package com.example.storage_service.controller;

import java.io.IOException;
import java.io.InputStream;
import java.net.URI;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.storage_service.service.StorageService;
import com.example.storage_service.service.exceptions.StorageException;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class StorageController {

  private final StorageService storage;
  
  @PostMapping
  public ResponseEntity<Long> store(@RequestParam("file") MultipartFile file, @RequestParam("id") Long id){
    try(InputStream is = file.getInputStream()){
      storage.store(is, id.toString());
    } catch(IOException e) {
      throw new StorageException("Error while reading resource");
    }
    return ResponseEntity.created(URI.create("/data/media/" + id))
      .body(id);
  }
  
}
