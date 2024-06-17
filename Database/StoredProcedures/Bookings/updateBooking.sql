CREATE OR ALTER PROCEDURE UpdateBooking
@BookingId VARCHAR(255),
@BookingDate DATETIME,
@TotalAmount DECIMAL(10, 2),
@TourId VARCHAR(255),
@HotelId VARCHAR(255),
@UserId VARCHAR(255)
AS
BEGIN
    UPDATE BookingsTable
    SET BookingDate = @BookingDate, TotalAmount = @TotalAmount, TourId = @TourId, HotelId = @HotelId
    WHERE BookingId = @BookingId AND (UserId = @UserId OR EXISTS (SELECT 1 FROM Admins WHERE AdminId = @UserId));
END;
