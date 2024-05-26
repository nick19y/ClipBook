package ClipBook.api.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;
@Table(name="user")
@Entity(name = "User")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    private String CPF;
    private String birth_date;
    private String phone_number;
    private String CEP;

    public User(DataRegisterUser data){
        this.name = data.name();
        this.email = data.email();
        this.password = data.password();
        this.CPF = data.CPF();
        this.birth_date = data.birth_date();
        this.phone_number = data.phone_number();
        this.CEP = data.CEP();
    }
}
