//Make some arrays of objects based on the schema design

//Books
const books = [
  {
    title: "Harry Potter and the Dealthy Hallows",
    author: "J.K. Rowling",
    pub_year: "2007",
    genre: "Fantasy",
    status: "available",
    img_url:
      "https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/1280x1280/products/9024/830083/35483-1024__35143.1683454081.jpg?c=2?imbypass=on",
    description:
      "After years of battling against the evil Lord Voldemort, 17-year-old Harry Potter is finally an adult wizard, and he and his best friends Ron Weasley and Hermione Granger must set out on a dangerous mission to stop Voldemort once and for all.",
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    pub_year: "2010",
    genre: "Mystery",
    status: "borrowed",
    img_url: "https://images.penguinrandomhouse.com/cover/9780307588371",
    description:
      "In Carthage, Mo., former New York-based writer Nick Dunne (Ben Affleck) and his glamorous wife Amy (Rosamund Pike) present a portrait of a blissful marriage to the public. However, when Amy goes missing on the couple's fifth wedding anniversary, Nick becomes the prime suspect in her disappearance.",
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    pub_year: "1940",
    genre: "Classics",
    status: "unavailable",
    img_url: "https://mpd-biblio-covers.imgix.net/9781466804128.jpg",
    description:
      "Herman Melville's Moby Dick is the story of Captain Ahab's self-destructive obsession with the white whale called Moby Dick. It is told through the narration of Ishmael, a sailor new to Ahab's ship, the Pequod. The plot of the novel follows Ahab's manic drive to kill the whale, even as it endangers his crew.",
  },
  {
    title: "Catcher in the Rye",
    author: "J.D. Sallinger",
    pub_year: "1950",
    genre: "Classics",
    status: "available",
    img_url:
      "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg",
    description:
      "The Catcher in the Rye, novel by J.D. Salinger published in 1951. The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world.",
  },
  {
    title: "Tomorrow and Tomorrow and Tomorrow",
    author: "Gabrielle Zevin",
    pub_year: "2022",
    genre: "Fiction",
    status: "unavailable",
    img_url:
      "https://static.bookofthemonth.com/covers/list/TomorrowTmrowTmrow_BOTY_200x300.jpg",
    description:
      "A novel about two friends who make video games. It's also about how people grow and grieve in the real world.",
  },
  {
    title: "Crying in H Mart",
    author: "Michelle Zauner",
    pub_year: "2021",
    genre: "Nonfiction",
    status: "available",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Crying_in_H_Mart_%28Michelle_Zauner%29.png/220px-Crying_in_H_Mart_%28Michelle_Zauner%29.png",
    description:
      "This novel explores Zauner's search for identity, her relationship with her Korean mother, and her beginnings as a musician. Key moments and emotions are constantly linked with food, which lies at the heart of Zauner's connection with her mother, her heritage, and her true self.",
  },
];

//Users
const users = [
  {
    username: "glitterqueen",
    email: "glitterqueen@gmail.com",
    role: "user",
    // password: "glitterqueen123"
    password_hash:
      "$2b$10$6dHkWoGxHoHOEe8exDNjO.bXTWDsqcQGU1zCWb2IjbxUSGw.h6l4.",
  },
  {
    username: "guywholikestoread",
    email: "johngreen@gmail.com",
    role: "user",
    // password: "infinitejest"
    password_hash:
      "$2b$10$BMhXZc0k.o/wjZZh8A3TTOiefviwydSjwQmAui7g9Wnlt3A2opekO",
  },
  {
    username: "croan",
    email: "cassandracroan@gmail.com",
    role: "librarian",
    // password: "imcute1234"
    password_hash:
      "$2b$10$VSXMzwZ2bwWZBmiMCWK6BuFtzd3S1gopHG9NIrf8hQ2hPzGhC8Byq",
  },
];

//Checkouts
const checkouts = [
  {
    checkout_date: "2023-08-31",
    due_date: "2023-10-31",
    bookId: 3,
    userId: 1,
  },
  {
    checkout_date: "2023-08-15",
    due_date: "2023-10-15",
    bookId: 5,
    userId: 2,
  },
];

module.exports = { books, users, checkouts };
