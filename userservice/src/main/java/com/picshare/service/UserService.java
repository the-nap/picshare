package com.picshare.service;

import org.springframework.stereotype.Service;

import com.picshare.repository.UserRepository;

@Service
public class UserService {
  private final UserRepository userRepository;
}
