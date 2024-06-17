CREATE OR ALTER PROCEDURE UpdateHotel
    @hotelId VARCHAR(255),
    @HotelName VARCHAR(100),
    @HotelDescription VARCHAR(MAX),
    @HotelLocation VARCHAR(100),
    @HotelRating DECIMAL(3, 1),
    @Price DECIMAL(10, 2)
AS
BEGIN
    UPDATE HotelsTable
    SET HotelName = @HotelName,
        HotelDescription = @HotelDescription,
        HotelLocation = @HotelLocation,
        HotelRating = @HotelRating,
        Price = @Price
    WHERE hotelId = @hotelId;
END;
