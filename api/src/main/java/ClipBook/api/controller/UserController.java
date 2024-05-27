package ClipBook.api.controller;

import ClipBook.api.domain.user.DataRegisterUser;
import ClipBook.api.domain.user.User;
import ClipBook.api.domain.user.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    private UserRepository repository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @PostMapping
    @Transactional
    public void register(@RequestBody @Valid DataRegisterUser data){
        String hashedPassword = passwordEncoder.encode(data.user_password());
        repository.save(new User(data.name(), hashedPassword, data.CPF(), data.birth_date(), data.phone_number(), data.CEP(), data.login()));
    }

}
