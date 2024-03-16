import { v4 as uuid } from "uuid";
import { formatDate } from "../../utils/authUtlis";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Saket",
    lastName: "Kumar",
    email: "kumarsaket123@gmail.com",
    avatarURL:
      "https://res.cloudinary.com/ddory4nqe/image/upload/v1684911554/samples/people/bicycle.jpg",
    username: "saketkum11",
    password: "saket147",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Anish",
    lastName: "Kumar",
    email: "anishkumar123@gmail.com",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1315352003468427264/Q5l6KmxO_400x400.jpg",
    username: "anish654",
    password: "anish123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
