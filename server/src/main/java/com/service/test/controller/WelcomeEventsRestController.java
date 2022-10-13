package com.service.test.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/")
public class WelcomeEventsRestController {

    @GetMapping("/")
    public @ResponseBody String welcome(){   
        return "Welcome to my api";
    }
}
