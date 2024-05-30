package ClipBook.api.controller;

import ClipBook.api.domain.haircut.DataRegisterHaircut;
import ClipBook.api.domain.haircut.HaicutRepository;
import ClipBook.api.domain.haircut.Haircut;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
