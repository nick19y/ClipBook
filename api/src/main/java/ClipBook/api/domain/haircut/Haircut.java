package ClipBook.api.domain.haircut;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.sql.Time;
import java.util.Date;

@Table(name="HaircutAppointments")
@Entity(name="Haircut")
@NoArgsConstructor
@AllArgsConstructor
public class Haircut {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String barberName;
    private BigDecimal price;
    private Date appointmentDate;
    private Time appointmentTime;
    private int userId;
}
