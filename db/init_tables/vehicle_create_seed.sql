DROP TABLE IF EXISTS vehicles;

CREATE TABLE IF NOT EXISTS vehicles (
    id SERIAL PRIMARY KEY,
    make TEXT,
    model TEXT,
    year INTEGER,
    owner_id INTEGER references users(id)
);

INSERT INTO vehicles (make, model, year, owner_id)
VALUES ('Toyota', 'Camry', 1991, 1),
('Honda', 'Civic', 1995, 1),
('Ford', 'Focus', 2005, 1),
('Ford', 'Taurus', 2003, 1),
('VW', 'Bug', 2010, 1),
('Mini', 'Cooper', 2013, 3);