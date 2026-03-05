package com.crochet.atelier.repository;

import com.crochet.atelier.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}