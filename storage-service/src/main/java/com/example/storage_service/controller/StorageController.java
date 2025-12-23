package com.example.storage_service.controller;

import java.net.URI;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.storage_service.service.StorageService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class StorageController {

  private final StorageService storage;

  
  @PostMapping
  public ResponseEntity<Long> store(@RequestParam("file") MultipartFile file, @RequestParam("id") Long id){
    storage.store(file, id.toString());
    return ResponseEntity.created(URI.create("/data/media/" + id))
      .body(id);
  }
  
}
