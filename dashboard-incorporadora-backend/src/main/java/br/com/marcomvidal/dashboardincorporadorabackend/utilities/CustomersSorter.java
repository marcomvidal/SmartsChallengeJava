package br.com.marcomvidal.dashboardincorporadorabackend.utilities;

import br.com.marcomvidal.dashboardincorporadorabackend.models.Customer;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class CustomersSorter {

    public List<Customer> orderBy(List<Customer> customers, String filter) {
        OrderBy orderBy = extractFilter(filter);

        switch (orderBy) {
            case HIGHERBUDGET: return this.byHigherBudget(customers);
            case LOWERBUDGET: return this.byLowerBudget(customers);
            case ATOZ: return this.byAToZ(customers);
            case ZTOA: return this.byZToA(customers);
            default: return customers;
        }
    }

    public OrderBy extractFilter(String filter) {
        return OrderBy.valueOf(filter);
    }

    private List<Customer> byHigherBudget(List<Customer> customers) {
        return customers
                .stream()
                .sorted(Comparator.comparing(Customer::budgetAsInt).reversed())
                .collect(Collectors.toList());
    }

    private List<Customer> byLowerBudget(List<Customer> customers) {
        return customers
                .stream()
                .sorted(Comparator.comparing(Customer::budgetAsInt))
                .collect(Collectors.toList());
    }

    private List<Customer> byAToZ(List<Customer> customers) {
        return customers
                .stream()
                .sorted(Comparator.comparing(Customer::getName))
                .collect(Collectors.toList());
    }

    private List<Customer> byZToA(List<Customer> customers) {
        return customers
                .stream()
                .sorted(Comparator.comparing(Customer::getName).reversed())
                .collect(Collectors.toList());
    }


}
