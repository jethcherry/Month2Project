CREATE OR ALTER PROCEDURE GetHotel
    @hotelId VARCHAR(255)
AS
BEGIN
    SELECT hotelId, HotelName, HotelDescription, HotelLocation, HotelRating, Price
    FROM HotelsTable
    WHERE hotelId = @hotelId
      AND isDeleted = 0;  
END;
