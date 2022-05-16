package com.example.bespannungsservice2.controller;

import com.example.bespannungsservice2.model.Person;
import com.example.bespannungsservice2.repository.PersonRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/person")
public class PersonController {

        private static Logger log = LogManager.getLogger();

        private PersonRepository personRepository;

    public PersonController(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }
        @PostMapping("/post")public Person createPerson(@RequestBody Person newPerson) {
            System.out.println("Post Request");
            log.fatal("Post Request");
        return personRepository.save(newPerson);
        }

    }


