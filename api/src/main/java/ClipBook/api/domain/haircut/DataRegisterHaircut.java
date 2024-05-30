package ClipBook.api.domain.haircut;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.sql.Time;
import java.time.LocalDate;
import java.util.Date;

public record DataRegisterHaircut(
    @NotBlank
    String barber_name,
    BigDecimal price,
    @NotNull
    LocalDate appointment_date,
    @NotNull
    Time appointment_time,
    int user_id
){
}
