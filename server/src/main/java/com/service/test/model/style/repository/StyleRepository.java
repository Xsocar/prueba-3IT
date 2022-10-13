package com.service.test.model.style.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.service.test.model.style.entity.Style;

@Repository
public interface StyleRepository extends JpaRepository<Style, Long> {
}
