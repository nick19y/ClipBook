CREATE TABLE HaircutAppointments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    barber_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
);