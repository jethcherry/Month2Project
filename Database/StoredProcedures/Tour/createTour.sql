

CREATE OR ALTER PROCEDURE createTour (
    @Name VARCHAR(255),
    @Description VARCHAR(255),
    @Price DECIMAL(10, 2),
    @Duration INT,
    @Location VARCHAR(255)
)
AS
BEGIN

    INSERT INTO ToursTable (Name, Description, Price, Duration, Location)
    VALUES (@Name, @Description, @Price, @Duration, @Location);

END
