export interface HotelPerNight {
  id: string;
  serviceName: string;
  serviceDescription: string;
  serviceLocation: string;
  servicePrice: number;
  serviceTimestamp: Date;
  numberOfNights: number;
  numberOfStars: number;
  numberOfRooms: number;
  allowedNumberOfPeoplePerRoom: number;
  checkoutTimestamp: Date;
}
