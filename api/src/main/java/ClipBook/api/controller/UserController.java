package ClipBook.api.controller;

import ClipBook.api.domain.user.DataRegisterUser;
import ClipBook.api.domain.user.User;
import ClipBook.api.domain.user.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

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

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        Optional<User> user = repository.findById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
