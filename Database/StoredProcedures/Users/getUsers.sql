USE TourBooking
GO

CREATE OR ALTER PROCEDURE getUser
(
    @Email VARCHAR(255)
)
AS
BEGIN
    SELECT Id, Name, Email, Password, isAdmin
    FROM BookingUser
    WHERE Email = @Email;
END
