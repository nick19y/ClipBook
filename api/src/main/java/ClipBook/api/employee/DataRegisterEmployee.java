package ClipBook.api.employee;

import ClipBook.api.address.DataAddress;
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
