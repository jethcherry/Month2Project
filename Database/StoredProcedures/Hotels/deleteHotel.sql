

CREATE OR ALTER PROCEDURE deleteHotel (
   @hotelId VARCHAR(255)
)
AS
BEGIN
   

    DELETE FROM HotelsTable WHERE  hotelId=  @hotelId
END;
