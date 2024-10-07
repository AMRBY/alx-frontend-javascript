import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arrayOfClassRoom = [];
  arrayOfClassRoom.push(new ClassRoom(19));
  arrayOfClassRoom.push(new ClassRoom(20));
  arrayOfClassRoom.push(new ClassRoom(34));
  return arrayOfClassRoom;
}
