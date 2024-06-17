CREATE OR ALTER PROCEDURE createHotel
    @hotelId VARCHAR(255),
    @HotelName VARCHAR(100),
    @HotelDescription VARCHAR(500),
    @HotelLocation VARCHAR(100),
    @HotelRating DECIMAL(3, 1),
    @Price DECIMAL(10, 2)
AS
BEGIN
    INSERT INTO HotelsTable (hotelId, HotelName, HotelDescription, HotelLocation, HotelRating, Price)
    VALUES (@hotelId, @HotelName, @HotelDescription, @HotelLocation, @HotelRating, @Price);
END;
