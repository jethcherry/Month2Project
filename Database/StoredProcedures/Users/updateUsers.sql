USE TourBooking
GO

CREATE OR ALTER PROCEDURE updateUser
(
    @Id VARCHAR(255),
    @Name VARCHAR(255),
    @Email VARCHAR(255),
    @Password VARCHAR(255),
    @isDeleted INT ,
    @isEmailSent INT,
    @isAdmin INT 
)
AS
BEGIN
    UPDATE BookingUser
    SET 
        Name = @Name,
        Email = @Email,
        Password = @Password,
        isDeleted = @isDeleted,
        isEmailSent = @isEmailSent,
        isAdmin = @isAdmin
    WHERE
        Id = @Id;
END
