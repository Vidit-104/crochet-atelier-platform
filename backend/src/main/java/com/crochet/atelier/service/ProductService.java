package com.crochet.atelier.service;

import com.crochet.atelier.entity.Product;
import com.crochet.atelier.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public Product updateProduct(Long id, Product product) {
        Product existing = productRepository.findById(id).orElse(null);

        if (existing != null) {
            existing.setName(product.getName());
            existing.setPrice(product.getPrice());
            return productRepository.save(existing);
        }

        return null;
    }

    public Product saveProductWithImage(Product product, MultipartFile file) throws IOException {

        String uploadDir = "uploads/";

        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();

        Path filePath = Paths.get(uploadDir + fileName);

        Files.createDirectories(filePath.getParent());
        Files.write(filePath, file.getBytes());

        product.setImageUrl(fileName);

        return productRepository.save(product);
    }
}