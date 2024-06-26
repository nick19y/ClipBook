package ClipBook.api.domain.user;

import jakarta.validation.constraints.NotBlank;
import org.aspectj.weaver.ast.Not;

import java.util.Date;

public record DataRegisterUser(
        @NotBlank
        String name,
        @NotBlank
        String user_password,
        @NotBlank
        String CPF,
        @NotBlank
        String birth_date,
        @NotBlank
        String phone_number,
        @NotBlank
        String CEP,
        @NotBlank
        String login
    ) {
}
