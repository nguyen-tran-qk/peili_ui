import logoNuori from "../assets/images/logo-nuori.png";
import logovamos from "../assets/images/logo-vamos.png";
// import logoR3 from "../assets/images/logoR3.png";
import eventImage from "../assets/images/organ.jpg";

const organizationsData = [
  {
    id: 1,
    logo: logoNuori,
    name: "nuorisoseurat",
    subtitle:
      "There are many variations of passages of Lorem Ipsum available, words which don't look even slightly believable.",
    address: "Vernissakatu 8, 01300 Vantaa",
    time: "08:00 - 18:00",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem is that it has a more-or-less normal of letters, as on to using 'Content here, content here', making it look like readable English. Many desktop publishes garlic now use Lorem Ipsum modern way onioniser.",
    events: [
      {
        id: 1,
        image: eventImage,
        time: "THU, OCT 31, 10:00 AM",
        title: "Board-game night",
        numberOfAttendees: 10
      },
      {
        id: 2,
        image: eventImage,
        time: "THU, OCT 31, 10:00 AM",
        title: "Dancing with us",
        numberOfAttendees: 13
      },
      {
        id: 3,
        image: eventImage,
        time: "THU, OCT 31, 10:00 AM",
        title: "Yoga",
        numberOfAttendees: 22
      }
    ]
  },
  {
    id: 2,
    logo: logovamos,
    name: "vamos",
    subtitle:
      "There are many variations of passages of Lorem Ipsum available, words which don't look even slightly believable.",
    address: "Vernissakatu 8, 01300 Vantaa",
    time: "08:00 - 18:00",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem is that it has a more-or-less normal of letters, as on to using 'Content here, content here', making it look like readable English. Many desktop publishes garlic now use Lorem Ipsum modern way onioniser.",
    events: [
      {
        id: 1,
        image: eventImage,
        time: "THU, OCT 31, 10:00 AM",
        title: "Board-game night",
        numberOfAttendees: 10
      },
      {
        id: 2,
        image: eventImage,
        time: "THU, OCT 31, 10:00 AM",
        title: "Dancing with us",
        numberOfAttendees: 13
      },
      {
        id: 3,
        image: eventImage,
        time: "THU, OCT 31, 10:00 AM",
        title: "Yoga",
        numberOfAttendees: 22
      }
    ]
  },
  {
    id: 3,
    logo: logoNuori,
    name: "r3",
    subtitle:
      "There are many variations of passages of Lorem Ipsum available, words which don't look even slightly believable.",
    address: "Vernissakatu 8, 01300 Vantaa",
    time: "08:00 - 18:00",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem is that it has a more-or-less normal of letters, as on to using 'Content here, content here', making it look like readable English. Many desktop publishes garlic now use Lorem Ipsum modern way onioniser.",
    events: [
      {
        id: 1,
        image: eventImage,
        time: "THU, OCT 31, 10:00 AM",
        title: "Board-game night",
        numberOfAttendees: 10
      },
      {
        id: 2,
        image: eventImage,
        time: "THU, OCT 31, 10:00 AM",
        title: "Dancing with us",
        numberOfAttendees: 13
      },
      {
        id: 3,
        image: eventImage,
        time: "THU, OCT 31, 10:00 AM",
        title: "Yoga",
        numberOfAttendees: 22
      }
    ]
  }
];

export default organizationsData;
