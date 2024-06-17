USE TourBooking

CREATE TABLE ToursTable (
    TourId VARCHAR(255) PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description VARCHAR(255),
    Price DECIMAL(10, 2) NOT NULL,
    Duration INT NOT NULL,
    Location VARCHAR(100) NOT NULL,
    isDeleted BIT DEFAULT 0 
);
