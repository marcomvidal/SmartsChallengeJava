package br.com.marcomvidal.dashboardincorporadorabackend.controllers;

import br.com.marcomvidal.dashboardincorporadorabackend.utilities.Paginator;
import br.com.marcomvidal.dashboardincorporadorabackend.models.Customer;
import br.com.marcomvidal.dashboardincorporadorabackend.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customers")
@EnableAutoConfiguration
public class CustomersController {

    @Autowired
    private CustomerService service;

    public CustomersController(CustomerService service) {
        this.service = service;
    }

    @GetMapping("")
    public ResponseEntity<Page<Customer>> index(@RequestParam("page") int page) {
        try {
            List<Customer> customers = this.service.all();
            Paginator paginator = new Paginator(customers, 10);

            return new ResponseEntity<>(paginator.getPage(page), HttpStatus.OK);
        } catch (IOException exception) {
            throw new ResponseStatusException(HttpStatus.SERVICE_UNAVAILABLE, exception.getMessage());
        }
    }

}
