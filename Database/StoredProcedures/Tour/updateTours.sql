
USE TourBooking

CREATE OR ALTER PROCEDURE updateTour (
    @TourId VARCHAR(255) ,
    @Name VARCHAR(255),
    @Description VARCHAR(255),
    @Price DECIMAL(10, 2),
    @Duration INT,
    @Location VARCHAR(255)
)
AS
BEGIN


    UPDATE ToursTable
    SET Name = @Name,
        Description = @Description,
        Price = @Price,
        Duration = @Duration,
        Location = @Location
    WHERE TourId = @TourId;
END;
