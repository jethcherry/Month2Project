USE TourBooking

CREATE OR ALTER PROCEDURE deleteTour (
    @TourId INT
)
AS
BEGIN
   

    DELETE FROM ToursTable WHERE TourId = @TourId;
END;
