package com.service.test.model.test.services;

import com.service.test.model.test.entity.Test;
import com.service.test.model.test.repository.TestRepository;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TestServiceImp implements TestService {

    private final TestRepository testRepository;

    public TestServiceImp(TestRepository testRepository) {
        this.testRepository = testRepository;
    }

    @Override
    public List<Test> getTests() {
        return this.testRepository.findAll();
    }

    @Override
    public void addTest(Test test) {
        testRepository.save(test);
    }
}
