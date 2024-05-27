package ClipBook.api.domain.employee;

import ClipBook.api.domain.address.Address;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name="employee")
@Entity(name = "Employee")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Employee {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private double evaluation;
    private String phone_number;
    @Embedded
    private Address address;

    public Employee(DataRegisterEmployee data) {
        this.name = data.name();
        this.email = data.email();
        this.evaluation = (double) data.evaluation();
        this.phone_number = data.phone_number();
        this.address = new Address(data.address());
    }

    public void updateData(DataUpdateEmployee data) {
        if(data.name()!=null) {
            this.name = data.name();
        }
        if(data.email()!=null) {
            this.email = data.email();
        }
        if(data.evaluation()!=null) {
            this.evaluation = data.evaluation().doubleValue();
        }
        if(data.phone_number()!=null) {
            this.phone_number = data.phone_number();
        }
        if(data.address()!=null){
            this.address.updateData(data.address());
        }
    }
}
