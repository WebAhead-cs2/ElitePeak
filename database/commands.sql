BEGIN;

DROP TABLE IF EXISTS users, paycard, rooms  CASCADE;

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

 CREATE TABLE hotels(
  id SERIAL PRIMARY KEY,
    hotel_id INTEGER  NOT NULL,
    departure_date VARCHAR(255),
    arrival_date VARCHAR(255), 
    rec_guest_qty INTEGER

 );

 CREATE TABLE rooms(
  id SERIAL PRIMARY KEY,
    hotel_id INTEGER  NOT NULL,
    departure_date VARCHAR(255),
    arrival_date VARCHAR(255), 
    rec_guest_qty INTEGER

 );
   INSERT INTO rooms (hotel_id, departure_date, arrival_date, rec_guest_qty) VALUES (8231537, '2022-12-20', '2022-12-12', 1); 



COMMIT;