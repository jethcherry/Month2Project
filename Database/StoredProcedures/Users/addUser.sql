

CREATE OR ALTER PROCEDURE addUser
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
    INSERT INTO BookingUser (Id, Name, Email, Password, IsDeleted, IsEmailSent, IsAdmin)
    VALUES (@Id, @Name, @Email, @Password, @IsDeleted, @IsEmailSent, @IsAdmin);
END
