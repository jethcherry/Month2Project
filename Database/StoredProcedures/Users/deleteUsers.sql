


CREATE OR ALTER PROCEDURE deleteUser
(
    @Id VARCHAR(255)
)
AS
BEGIN
    UPDATE BookingUser
    SET isDeleted = 1
    WHERE Id = @Id;
END

