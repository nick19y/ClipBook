package ClipBook.api.domain.haircut;

import jakarta.validation.constraints.NotBlank;

import java.math.BigDecimal;
import java.sql.Time;
import java.util.Date;

public record DataRegisterHaircut(
    @NotBlank
    String barber_name,
    @NotBlank
    BigDecimal price,
    @NotBlank
    Date appointment_date,
    @NotBlank
    Time appointment_time,
    int user_id
){
}
