 USE TourBooking

CREATE TABLE HotelsTable (
    hotelId VARCHAR(255) PRIMARY KEY,
    HotelName VARCHAR(100) NOT NULL,
    HotelDescription VARCHAR(MAX),
    HotelLocation VARCHAR(100) NOT NULL,
    HotelRating DECIMAL(3, 1), 
    Price DECIMAL(10, 2) NOT NULL,
    isDeleted BIT DEFAULT 0
);
