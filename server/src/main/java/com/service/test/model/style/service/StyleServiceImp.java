package com.service.test.model.style.service;

import com.service.test.model.style.entity.Style;
import com.service.test.model.style.repository.StyleRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class StyleServiceImp implements StyleService {

    @Autowired
    private final StyleRepository styleRepository;

    public StyleServiceImp(StyleRepository styleRepository) {
        this.styleRepository = styleRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Style> getAllStyles() {
        return styleRepository.findAll();
    }
}
