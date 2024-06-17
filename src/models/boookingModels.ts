export interface Booking {
    BookingId: string;
    BookingDate: Date;
    TotalAmount: number;
    IsCancelled: boolean;
    TourId: string;
    HotelId: string;
    UserId: string;
}
