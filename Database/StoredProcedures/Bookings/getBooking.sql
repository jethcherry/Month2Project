CREATE OR ALTER  PROCEDURE getBooking
@BookingId VARCHAR(255),
@UserId VARCHAR(255)
AS
BEGIN
    SELECT * FROM BookingsTable
    WHERE BookingId = @BookingId AND (UserId = @UserId OR EXISTS (SELECT 1 FROM Admins WHERE AdminId = @UserId));
END;
