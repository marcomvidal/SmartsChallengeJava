package br.com.marcomvidal.dashboardincorporadorabackend.utilities;

import br.com.marcomvidal.dashboardincorporadorabackend.models.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.List;

public class Paginator {

    private List collection;
    private int size;
    private Pageable pageable;

    public Paginator(List collection, int size) {
        this.collection = collection;
        this.size = size;
    }

    public Page<Customer> getPage(int page) {
        Page<Customer> pager = new PageImpl(this.collection, PageRequest.of(0, 2), this.collection.size());
        Pageable pageable = PageRequest.of(page, this.size);
        int start = this.getStart(pageable);

        return new PageImpl<>(
                this.collection.subList(start, this.getEnd(start, pageable)),
                pageable,
                this.collection.size());
    }

    private int getStart(Pageable pageable) {
        return (int) pageable.getOffset();
    }

    private int getEnd(int start, Pageable pageable) {
        return (start + pageable.getPageSize()) > this.collection.size() ?
                this.collection.size() :
                (start + pageable.getPageSize());
    }
}
