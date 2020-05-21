package br.com.marcomvidal.dashboardincorporadorabackend.models;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

public class Customer {
    public String _id;
    public String budget;
    public List<Picture> pictures;
    public int age;
    public Name name;
    public String company;
    public String email;
    public String phone;
    public String address;
    public String about;
    public String registered;
    public String latitude;
    public String longitude;
    public List<Contact> contactTimeline;
    public String channel;

    public String getName() {
        return this.name.first + " " + this.name.last;
    }

    public int budgetAsInt() {
        String rawBudget = this.budget
                .replace("$", "")
                .replace(".", "")
                .replace(",", "");

        return Integer.parseInt(rawBudget);
    }

    // "Wed Aug 24 2016 05:53:06 GMT+0000"
    // Wed, 4 Jul 2001 12:08:56 -0700
    public Date registeredAsDate() throws ParseException {
        String[] splittedData = this.registered.split(" ");
        String dateAsString = splittedData[3] + "/" + splittedData[1] + "/" + splittedData[2];

        return new SimpleDateFormat("yyyy/MMM/dd", Locale.ENGLISH).parse(dateAsString);
    }
}
