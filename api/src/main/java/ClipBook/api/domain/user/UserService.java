package ClipBook.api.domain.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional
    public User createUser(DataRegisterUser data) {
        String hashedPassword = passwordEncoder.encode(data.user_password());
        User user = new User(data.name(), hashedPassword, data.CPF(), data.birth_date(), data.phone_number(), data.CEP(), data.login());
        return userRepository.save(user);
    }
}
