package com.springcourse;


import com.springcourse.models.Course;
import com.springcourse.repository.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApp {

    public static void main(String[] args) {
        SpringApplication.run(CrudSpringApp.class, args);
    }

    @Bean // faz com que o spring gerencie todo o ciclo de vida
    CommandLineRunner initDatabase(CourseRepository courseRepository){
        return args -> {
            courseRepository.deleteAll();

            Course c = new Course();
            c.setName("Angular");
            c.setCategory("Front-end");
            courseRepository.save(c);
           // aqui eu simulo uma insercao de dados no meu objeto
        };
    }
}
