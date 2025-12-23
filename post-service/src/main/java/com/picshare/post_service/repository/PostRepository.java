package com.picshare.post_service.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.picshare.post_service.entity.PostEntity;

@Repository
public interface PostRepository extends JpaRepository<PostEntity, Long> {

  PostEntity findByPostId(Long id);

  List<PostEntity> findByUserId(Long id);

}
