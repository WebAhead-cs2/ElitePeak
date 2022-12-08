BEGIN;
DROP TABLE IF EXISTS paycard;

CREATE TABLE paycard(
    name_on_card VARCHAR(255) NOT NULL,
    card_number INTEGER NOT NULL,
    cvv INTEGER NOT NULL,
    expiration_date VARCHAR(12) NOT NULL
);
INSERT INTO paycard (name_on_card, card_number, cvv, expiration_date) VALUES ('muhamed ', 272833, 345, '12/22');
INSERT INTO paycard (name_on_card, card_number, cvv, expiration_date) VALUES ('kdufjv' , 275833, 333, '11/22');





COMMIT;