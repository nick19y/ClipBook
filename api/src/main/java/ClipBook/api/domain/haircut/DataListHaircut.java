package ClipBook.api.domain.haircut;

import java.sql.Time;
import java.time.LocalDate;

public record DataListHaircut(Long id, String barber_name, LocalDate appointment_date, Time appointment_time, boolean finalized) {
    public DataListHaircut(Haircut haircut){
        this((long) haircut.getId(), haircut.getBarber_name(), haircut.getAppointment_date(), haircut.getAppointment_time(), haircut.isFinalized());
    }
}
