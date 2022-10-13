package com.service.test.controller;

import com.service.test.model.style.entity.Style;
import com.service.test.model.style.service.StyleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;

@RestController
@RequestMapping("/style")
public class StyleEventsRestController {

    @Autowired
    private StyleService styleService;

    @Autowired
    public StyleEventsRestController( StyleService styleService) {
        this.styleService = styleService;
    }

    public StyleEventsRestController() {
    }

    @GetMapping("/all")
    public @ResponseBody List<Style> allStyles(){   
        return styleService.getAllStyles();
    }
}
