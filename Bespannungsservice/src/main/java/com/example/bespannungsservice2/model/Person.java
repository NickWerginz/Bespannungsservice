package com.example.bespannungsservice2.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
@Data
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String vorname;
    private String mail;
    private int telefon;
    private String saite;
    private int bespannungLängs;
    private int bespannungQuer;
    private String dauer;
    private String abgabe;
}
