CREATE OR ALTER PROCEDURE GetHotels
AS
BEGIN
    SELECT hotelId, HotelName, HotelDescription, HotelLocation, HotelRating, Price
    FROM HotelsTable
    WHERE isDeleted = 0;  
END;
