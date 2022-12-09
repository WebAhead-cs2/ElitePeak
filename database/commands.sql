BEGIN;

DROP TABLE IF EXISTS users, paycard  CASCADE, reservation;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255),
  birthdate VARCHAR(12),
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  country VARCHAR(255),
  phone VARCHAR(11),
  gender VARCHAR(6)

);


CREATE TABLE paycard(
    name_on_card VARCHAR(255) NOT NULL,
    card_number VARCHAR(255) NOT NULL,
    cvv VARCHAR(255) NOT NULL,
    expiration_date VARCHAR(255) NOT NULL
);
CREATE TABLE reservation(
    hotel_id VARCHAR(255) NOT NULL,
    departure_date VARCHAR(255) NOT NULL,
    arrival_date VARCHAR(255) NOT NULL,
    rec_guest_qty VARCHAR(255) NOT NULL
);

    

COMMIT;