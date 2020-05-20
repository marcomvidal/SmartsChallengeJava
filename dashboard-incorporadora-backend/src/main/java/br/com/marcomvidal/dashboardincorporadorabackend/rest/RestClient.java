package br.com.marcomvidal.dashboardincorporadorabackend.rest;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class RestClient {

    @Autowired
    private OkHttpClient http;

    public RestClient(OkHttpClient http) {
        this.http = http;
    }

    public String get(String url) throws IOException {
        Request request = new Request.Builder().url(url).build();
        Response response = this.http.newCall(request).execute();

        return response.body().string();
    }
}
