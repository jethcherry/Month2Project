CREATE OR ALTER PROCEDURE CancelBooking
@BookingId VARCHAR(255),
@UserId VARCHAR(255)
AS
BEGIN
    UPDATE BookingsTable
    SET IsCancelled = 1
    WHERE BookingId = @BookingId AND (UserId = @UserId OR EXISTS (SELECT 1 FROM Admins WHERE AdminId = @UserId));
END;
