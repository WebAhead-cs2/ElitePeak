BEGIN;

DROP TABLE IF EXISTS users CASCADE;

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

    

COMMIT;