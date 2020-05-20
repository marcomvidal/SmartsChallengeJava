package br.com.marcomvidal.dashboardincorporadorabackend.services;

import br.com.marcomvidal.dashboardincorporadorabackend.models.Customer;
import br.com.marcomvidal.dashboardincorporadorabackend.rest.Env;
import br.com.marcomvidal.dashboardincorporadorabackend.rest.RestClient;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private RestClient client;

    @Autowired
    private Gson gson;

    public CustomerService(RestClient client, Gson gson) {
        this.client = client;
        this.gson = gson;
    }

    public List<Customer> all() throws IOException {
        String json = client.get(Env.URL + "/customers.json");

        return gson.fromJson(json, new TypeToken<ArrayList<Customer>>(){}.getType());
    }
}
