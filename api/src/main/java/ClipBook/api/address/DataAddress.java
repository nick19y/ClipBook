package ClipBook.api.address;

import jakarta.validation.constraints.NotBlank;

public record DataAddress(
        @NotBlank
        String street,
        @NotBlank
        String neighborhood,
        @NotBlank
        String postal_code,
        @NotBlank
        String city,
        @NotBlank
        String state,
        @NotBlank
        String country,
        @NotBlank
        String number,
        @NotBlank
        String additional_info) {
}
