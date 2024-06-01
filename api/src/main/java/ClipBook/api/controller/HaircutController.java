package ClipBook.api.controller;

import ClipBook.api.domain.haircut.DataListHaircut;
import ClipBook.api.domain.haircut.DataRegisterHaircut;
import ClipBook.api.domain.haircut.HaicutRepository;
import ClipBook.api.domain.haircut.Haircut;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/haircut")
public class HaircutController {
    @Autowired
    HaicutRepository repository;
    @PostMapping
    @Transactional
    public void register(@RequestBody @Valid DataRegisterHaircut data){
        repository.save(new Haircut(data));
    }
    @GetMapping
    public List<DataListHaircut> getHaircuts() {
        List<Haircut> haircuts = repository.findAll();
        return haircuts.stream()
                .map(DataListHaircut::new)
                .collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void delete(@PathVariable Long id){
        repository.deleteById(id);
    }
    @GetMapping("/finalized")
    public List<DataListHaircut> getFinalizedHaircuts() {
        List<Haircut> haircuts = repository.findByFinalizedTrue();
        return haircuts.stream()
                .map(DataListHaircut::new)
                .collect(Collectors.toList());
    }
}
