package br.com.marcomvidal.dashboardincorporadorabackend.utilities;

import br.com.marcomvidal.dashboardincorporadorabackend.models.Customer;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Component
public class CustomersFilter {


    public List<Customer> byStartDate(List<Customer> customers, String date) throws ParseException {
        List<Customer> filteredCustomers = new ArrayList<>();
        Date comparedDate = new SimpleDateFormat("yyyy-MM-dd").parse(date);

        for (Customer customer : customers) {
            if (customer.registeredAsDate().after(comparedDate)) {
                filteredCustomers.add(customer);
            }
        }

        return filteredCustomers;
    }

    public List<Customer> byEndDate(List<Customer> customers, String date) throws ParseException {
        List<Customer> filteredCustomers = new ArrayList<>();
        Date comparedDate = new SimpleDateFormat("yyyy-MM-dd").parse(date);

        for (Customer customer : customers) {
            if (customer.registeredAsDate().before(comparedDate)) {
                filteredCustomers.add(customer);
            }
        }

        return filteredCustomers;
    }

}
