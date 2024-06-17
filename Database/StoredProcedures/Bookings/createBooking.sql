CREATE OR ALTER PROCEDURE CreateBooking
@BookingId VARCHAR(255),
@BookingDate DATETIME,
@TotalAmount DECIMAL(10, 2),
@TourId VARCHAR(255),
@HotelId VARCHAR(255),
@UserId VARCHAR(255)
AS
BEGIN
    INSERT INTO BookingsTable (BookingId, BookingDate, TotalAmount, IsCancelled, TourId, HotelId, UserId)
    VALUES (@BookingId, @BookingDate, @TotalAmount, 0, @TourId, @HotelId, @UserId);
END;
