package com.springcourse.controller;

import com.springcourse.models.Course;
import com.springcourse.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController // diz que esta classe contem um end point que pela qual sera acessada pela a api
@RequestMapping("/api/courses") // o end poit que ira ficar exposto
public class CoursesController {



    private CourseRepository courseRepository; //injetando dependencia via construtor

    @Autowired
    public void setCourseRepository(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @GetMapping
     public List<Course> list(){
         return courseRepository.findAll()  ;
     }
}
