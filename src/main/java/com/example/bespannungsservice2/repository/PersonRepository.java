package com.example.bespannungsservice2.repository;

import com.example.bespannungsservice2.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long> {
}
