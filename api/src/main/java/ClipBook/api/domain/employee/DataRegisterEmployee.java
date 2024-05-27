package ClipBook.api.domain.employee;

import ClipBook.api.domain.address.DataAddress;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;

public record DataRegisterEmployee(
        @NotBlank
        String name,
        @NotBlank @Email
        String email,
        Double evaluation,
        @NotBlank
        String phone_number,
        @NotNull @Valid
        DataAddress address
        ) {
}
