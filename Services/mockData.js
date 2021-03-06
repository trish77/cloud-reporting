const courses = [
  {
    id: 1,
    dept: "Med-Surg",
    student: "Bradfield, Art",
    title: "Securing React Apps with Auth0",
    completion: "5/11/2020",
    completed_at: "Xtrinity"
  },
  {
    id: 2,
    dept: "Med-Surg",
    student: "Burke, Charon",
    title: "React: The Big Picture",
    completion: "1/11/2020",
    completed_at: "Xtrinity"
  },
  {
    id: 3,
    dept: "Med-Surg",
    student: "DICKMAN, LUPE",
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    completion: "7/1/2021",
    completed_at: "Xtrinity"
  },
  {
    id: 4,
    dept: "Med-Surg",
    student: "FERRARI, SHELA",
    title: "Building a JavaScript Development Environment",
    completion: "2/11/2021",
    completed_at: "Xtrinity"
  },
  {
    id: 5,
    dept: "Med-Surg",
    student: "FREED, ZADA",
    title: "Building Applications with React and Redux",
    completion: "5/8/2020",
    completed_at: "Xtrinity"
  },
  {
    id: 6,
    dept: "Med-Surg",
    student: "DICKMAN, LUPE",
    title: "Building Applications in React and Flux",
    completion: "3/11/2020",
    completed_at: "Xtrinity"
  },
  {
    id: 7,
    dept: "Med-Surg",
    student: "JACKSON, BETH",
    title: "Clean Code: Writing Code for Humans",
    completed_at: "Xtrinity"
  },
  {
    id: 8,
    dept: "Med-Surg",
    student: "KNIGHTS, JERICA",
    title: "Architecting Applications for the Real World",
    completion: "5/21/2021",
    completed_at: "Xtrinity"
  },
  {
    id: 9,
    dept: "Med-Surg",
    student: "DICKMAN, LUPE",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    completion: "1/19/2021",
    completed_at: "Xtrinity"
  },
  {
    id: 10,
    dept: "Med-Surg",
    student: "KRAMER, DAVE",
    title: "Web Component Fundamentals",
    completion: "8/11/2021",
    completed_at: "Xtrinity"
  },
  {
    id: 11,
    dept: "Med-Surg",
    student: "Bradfield, Art",
    title: "Securing React Apps with Auth0",
    completion: "5/11/2021",
    completed_at: "Xtrinity"
  },
  {
    id: 12,
    dept: "Med-Surg",
    student: "MASSE, BRADY",
    title: "React: The Big Picture",
    completion: "1/11/2021",
    completed_at: "Xtrinity"
  },
  {
    id: 13,
    dept: "Med-Surg",
    student: "SANO, RANDY",
    title: "Creating Reusable React Components",
    completion: "7/1/2020",
    completed_at: "Xtrinity"
  },
  {
    id: 14,
    dept: "Med-Surg",
    student: "STRACKBEIN, TAWNYA",
    title: "Building a JavaScript Development Environment",
    completion: "2/11/2020",
    completed_at: "Xtrinity"
  },
  {
    id: 15,
    dept: "Med-Surg",
    student: "SURFACE, MICHIKO",
    title: "Building Applications with React and Redux",
    completion: "5/8/2021",
    completed_at: "Xtrinity"
  },
  {
    id: 16,
    dept: "Med-Surg",
    student: "TROPEA, NIKKI",
    title: "Building Applications in React",
    completion: "3/11/2021",
    completed_at: "Xtrinity"
  },
  {
    id: 17,
    dept: "Med-Surg",
    student: "JACKSON, BETH",
    title: "Clean Code: Writing Code for Humans",
    completion: "5/31/2020",
    completed_at: "Xtrinity"
  },
  {
    id: 18,
    dept: "Med-Surg",
    student: "TUFF, SENAIDA",
    title: "Architecting Applications for the Real World",
    completion: "5/21/2020",
    completed_at: "Xtrinity"
  },
  {
    id: 19,
    dept: "Med-Surg",
    student: "URIBE, ADRIAN",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    completion: "1/11/2021",
    completed_at: "Xtrinity"
  },
  {
    id: 20,
    dept: "Med-Surg",
    student: "KRAMER, John",
    title: "Web Component Fundamentals",
    completion: "8/11/2021",
    completed_at: "Xtrinity"
  }
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors
};
