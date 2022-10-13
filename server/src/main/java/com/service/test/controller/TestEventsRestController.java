package com.service.test.controller;

import com.service.test.model.test.entity.Test;
import com.service.test.model.test.services.TestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;

@RestController
@RequestMapping("/test")
public class TestEventsRestController {

    @Autowired
    private TestService testService;

    @Autowired
    public TestEventsRestController( TestService testService) {
        this.testService = testService;
    }

    public TestEventsRestController() {
    }

    @GetMapping("/all")
    public @ResponseBody List<Test> allTests(){   
        return testService.getTests();
    }

    @PostMapping("/")
    public void addTest(@RequestBody Test test) {
        testService.addTest(test);
    }
}
