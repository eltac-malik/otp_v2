export interface IMonitoring {
  roomNumber: string;
  device: string;
  person: string;
  time: string;
  type: string;
  image: string | null;
}

export interface IUsers {
  active: null;
  cardId: string;
  createdAt: string;
  id: string;
  modifiedAt: string;
  roomNumber: string;
  surname: string;
  userType: string;
  username: string;
  personPin: string;
  roomNumber: string;
  image: string | null;
}
