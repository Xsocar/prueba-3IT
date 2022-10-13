package com.service.test.model.test.services;

import java.util.List;

import com.service.test.model.test.entity.Test;

public interface TestService {
     
     List<Test> getTests();
     void addTest(Test test);
}
