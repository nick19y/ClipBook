CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    street VARCHAR(255),
    neighborhood VARCHAR(255),
    postal_code VARCHAR(10),
    city VARCHAR(255),
    state VARCHAR(2),
    country VARCHAR(255),
    number VARCHAR(10),
    additional_info VARCHAR(255)
);