package ClipBook.api.controller;

import ClipBook.api.user.DataRegisterUser;
import ClipBook.api.user.User;
import ClipBook.api.user.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("employee")
public class UserController {
    @Autowired
    private UserRepository repository;
    @PostMapping
    @Transactional
    public void register(@RequestBody @Valid DataRegisterUser data){
        repository.save(new User(data));
    }
}
