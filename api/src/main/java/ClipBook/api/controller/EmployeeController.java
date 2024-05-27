package ClipBook.api.controller;

import ClipBook.api.domain.employee.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("employee")
public class EmployeeController {
    @Autowired
    private EmployeeRepository repository;
    @PostMapping
    @Transactional
    public void register(@RequestBody @Valid DataRegisterEmployee data){
        repository.save(new Employee(data));
    }
    @GetMapping
    public List<DataListEmployee> list(){
        return repository.findAll().stream().map(DataListEmployee::new).toList();
    }
    @PutMapping
    @Transactional
    public void update(@RequestBody @Valid DataUpdateEmployee data){
        var employee = repository.getReferenceById(data.id());
        employee.updateData(data);
    }
}
