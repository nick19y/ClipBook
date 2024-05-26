package ClipBook.api.employee;

import ClipBook.api.address.DataAddress;
import jakarta.validation.constraints.NotNull;

public record DataUpdateEmployee(
        @NotNull
        Long id,
        String name,
        String email,
        Double evaluation,
        String phone_number,

        DataAddress address
    ) {
}
