const testimonials = [
  {
    name: "Sophia Johnson",
    photoUrl:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==",
    text: `Apple offers an innovative human-centered product
that seamlessly integrates design and technology.
The user-friendly interface and sleek aesthetics make it
a must-have for tech enthusiasts and professionals alike.`,
  },
  {
    name: "Rosetta Q",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=880&q=80",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
  },
  {
    name: "Constantine V",
    photoUrl:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&w=880&q=80",
    text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];

  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;

  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }

  setTimeout(updateTestimonial, 2000);
}
