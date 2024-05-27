package ClipBook.api.domain.address;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Address {
    private String street;
    private String neighborhood;
    private String postal_code;
    private String city;
    private String state;
    private String country;
    private String number;
    private String additional_info;

    public Address(DataAddress data) {
        this.street = data.street();
        this.neighborhood = data.neighborhood();
        this.postal_code = data.postal_code();
        this.city = data.city();
        this.state = data.state();
        this.country = data.country();
        this.number = data.number();
        this.additional_info = data.additional_info();
    }

    public void updateData(DataAddress data) {
        if(data.street()!=null){
            this.street = data.street();
        }
        if(data.neighborhood()!=null){
            this.neighborhood = data.neighborhood();
        }
        if(data.postal_code()!=null){
            this.postal_code = data.postal_code();
        }
        if(data.city()!=null){
            this.city = data.city();
        }
        if(data.state()!=null){
            this.state = data.state();
        }
        if(data.country()!=null){
            this.country = data.country();
        }
        if(data.number()!=null){
            this.number = data.number();
        }
        if(data.additional_info()!=null){
            this.additional_info = data.additional_info();
        }
    }
}
