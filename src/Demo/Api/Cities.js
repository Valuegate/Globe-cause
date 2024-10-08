const cities = [
  {
    id: 1,
    name: "New York",
    country: "Portugal",
    image:
      "https://i.natgeofe.com/n/874df281-d3e0-489a-98c0-6b840023b828/newyork_NationalGeographic_2328428_square.jpg",
    ratings: {
      overall: 4.5,
      food: 4.1,
      safety: 3.5,
      fun: 4.8,
      affordability: 4.0,
      weather: 3.0,
      internet: 3.7,
      Transport: 4.2,
    },
  },
  {
    id: 2,
    name: "London",
    country: "Portugal",
    image:
      "https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/bltf5fca6a3eec4d180/6139d40bec680b43eb02a9ee/US_London_UK_Header.jpg?width=1680&quality=70&auto=webp",
    ratings: {
      overall: 4.0,
      food: 2.1,
      safety: 3.5,
      fun: 4.3,
      affordability: 4.0,
      weather: 3.0,
      internet: 3.7,
      Transport: 4.2,
    },
  },
  {
    id: 3,
    name: "Paris",
    country: "Portugal",
    image:
      "https://travellersworldwide.com/wp-content/uploads/2022/06/shutterstock_667548661.png.webp",
    ratings: {
      overall: 3.7,
      food: 4.1,
      safety: 3.5,
      fun: 4.8,
      affordability: 2.0,
      weather: 3.0,
      internet: 3.7,
      Transport: 4.2,
    },
  },
  {
    id: 4,
    name: "Berlin",
    country: "Portugal",
    image: "https://media.timeout.com/images/105303515/750/422/image.jpg",
    ratings: {
      overall: 4.5,
      food: 4.1,
      safety: 3.5,
      fun: 4.8,
      affordability: 4.0,
      weather: 3.0,
      internet: 3.7,
      Transport: 4.2,
    },
  },
  {
    id: 5,
    name: "Madrid",
    country: "Portugal",
    image:
      "https://www.travelandleisure.com/thmb/bm51vTBcyGJ840aDyLWaIOLqrgQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/madrid-spain-MADRIDTG0621-b2347a98186a4281a0874992b213ade0.jpg",

    ratings: {
      overall: 4.5,
      food: 4.1,
      safety: 3.5,
      fun: 4.8,
      affordability: 4.0,
      weather: 3.0,
      internet: 3.7,
      Transport: 4.2,
    },
  },
  {
    id: 6,
    name: "Rome",
    country: "Romania",
    image: "https://media.timeout.com/images/105211673/image.jpg",
    ratings: {
      overall: 4.5,
      food: 4.1,
      safety: 3.5,
      fun: 4.8,
      affordability: 4.0,
      weather: 3.0,
      internet: 3.7,
      Transport: 4.2,
    },
  },
  {
    id: 7,
    name: "Barcelona",
    country: "Romania",
    image:
      "https://toposmagazine.com/wp-content/uploads/2022/05/dimitry-anikin-ECkAbFv_Nnc-unsplash-aspect-ratio-16-9.jpg",
    ratings: {
      overall: 4.5,
      food: 4.1,
      safety: 3.5,
      fun: 4.8,
      affordability: 4.0,
      weather: 3.0,
      internet: 3.7,
      Transport: 4.2,
    },
  },
  {
    id: 8,
    name: "Bucharest",
    country: "Romania",
    image:
      "https://content.r9cdn.net/rimg/dimg/02/2a/38330eba-city-25578-17f66349256.jpg?width=1366&height=768&xhint=1490&yhint=1292&crop=true",
    ratings: {
      overall: 4.5,
      food: 4.1,
      safety: 3.5,
      fun: 4.8,
      affordability: 4.0,
      weather: 3.0,
      internet: 3.7,
      Transport: 4.2,
    },
  },
  {
    id: 9,
    name: "Vienna",
    country: "Romania",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/70/f4/d5/photo4jpg.jpg?w=600&h=400&s=1",
    ratings: {
      overall: 4.5,
      food: 4.1,
      safety: 3.5,
      fun: 4.8,
      affordability: 4.0,
      weather: 3.0,
      internet: 3.7,
      Transport: 4.2,
    },
  },
  {
    id: 10,
    name: "Budapest",
    country: "Romania",
    image:
      "https://blog.goway.com/globetrotting/wp-content/uploads/2017/05/Buda-Castle-at-Night-Budapest-Hungary_581908810.jpg",
    ratings: {
      overall: 4.5,
      food: 4.1,
      safety: 3.5,
      fun: 4.8,
      affordability: 4.0,
      weather: 3.0,
      internet: 3.7,
      Transport: 4.2,
    },
  },
  {
    id: 11,
    name: "Warsaw",
    country: "Spain",
    image:
      "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/warsawhero.jpg?w=1600&h=900",
    ratings: {
      overall: 4.5,
      food: 4.1,
      safety: 3.5,
      fun: 4.8,
      affordability: 4.0,
      weather: 3.0,
      internet: 3.7,
      Transport: 4.2,
    },
  },
  {
    id: 12,
    name: "Bologna",
    country: "Spain",
    image:
      "https://www.tripsavvy.com/thmb/Wvjf4qly5Y8ewQo8730d4PGBy8A=/2119x1415/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1070080094-7bdba81b255b42b1884840372ec56211.jpg",
    ratings: {
      overall: 4.5,
      food: 4.1,
      safety: 3.5,
      fun: 4.8,
      affordability: 4.0,
      weather: 3.0,
      internet: 3.7,
      Transport: 4.2,
    },
  },
  {
    id: 13,
    name: "Milan",
    country: "Spain",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/636269102e3d4aa9da08fd12/0x0.jpg?format=jpg&width=1200",
    ratings: {
      overall: 4.5,
      food: 4.1,
      safety: 3.5,
      fun: 4.8,
      affordability: 4.0,
      weather: 3.0,
      internet: 3.7,
      Transport: 4.2,
    },
  },
  {
    id: 14,
    name: "Prague",
    country: "Spain",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/Prague_%286365119737%29.jpg",
    ratings: {
      overall: 4.5,
      food: 4.1,
      safety: 3.5,
      fun: 4.8,
      affordability: 4.0,
      weather: 3.0,
      internet: 3.7,
      Transport: 4.2,
    },
  },
  {
    id: 15,
    name: "Lisbon",
    country: "Spain",
    image:
      "https://www.back-packer.org/wp-content/uploads/best-things-to-do-in-lisbon-portugal-title.jpg",
    ratings: {
      overall: 4.5,
      food: 4.1,
      safety: 3.5,
      fun: 4.8,
      affordability: 4.0,
      weather: 3.0,
      internet: 3.7,
      Transport: 4.2,
    },
  },
];

export default cities;
