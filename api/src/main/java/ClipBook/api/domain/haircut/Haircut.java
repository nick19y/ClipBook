package ClipBook.api.domain.haircut;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.sql.Time;
import java.time.LocalDate;

@Table(name="haircut")
@Entity(name="Haircut")
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Haircut {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String barber_name;
    private BigDecimal price;
    private LocalDate appointment_date;
    private Time appointment_time;
    private int user_id;

    public Haircut(DataRegisterHaircut data){
        this.barber_name = data.barber_name();
        this.price = data.price();
        this.appointment_date = data.appointment_date();
        this.appointment_time = data.appointment_time();
        this.user_id = data.user_id();
    }

}
