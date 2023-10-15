package com.springcourse.models;

import jakarta.persistence.*;
import lombok.Data;

@Data // insere os getters, setters e os construtor de forma automatica
@Entity // diz que esta classe reprsentara uma tabela
public class Course {

    @Id // primary key
    @GeneratedValue(strategy = GenerationType.AUTO  ) // create automatically
    private Long id;

    @Column(length = 200)
    private String name;

    @Column(length = 12)
    private String category;

}
