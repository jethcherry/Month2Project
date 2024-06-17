
USE TourBooking

CREATE OR ALTER PROCEDURE getTour(
    @TourId VARCHAR(255)
)
AS
BEGIN
    SET NOCOUNT ON;

    SELECT * FROM ToursTable WHERE TourId = @TourId;
END;

