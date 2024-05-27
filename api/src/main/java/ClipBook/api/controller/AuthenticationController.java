package ClipBook.api.controller;

import ClipBook.api.domain.user.DataAuthentication;
import ClipBook.api.domain.user.User;
import ClipBook.api.infrastructure.security.DataTokenJWT;
import ClipBook.api.infrastructure.security.TokenService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class AuthenticationController {
    @Autowired
    private AuthenticationManager manager;
    @Autowired
    private TokenService tokenService;
    @PostMapping
    public ResponseEntity login(@RequestBody @Valid DataAuthentication data){
        var AuthenticationToken = new UsernamePasswordAuthenticationToken(data.login(), data.user_password());
        var authentication = manager.authenticate(AuthenticationToken);
        var tokenJWT = tokenService.generateToken((User) authentication.getPrincipal());
        return ResponseEntity.ok(new DataTokenJWT(tokenJWT));
    }
}
