import { createFragments, ELEMENTS } from "./dom.js";

const { DIV, H3, IMG, P, SPAN } = ELEMENTS;

const fetchGadgets = async () =>
  fetch("gadgets-data").then((data) => data.json());

const displayGadgets = ({ name, category, description, img }, container) => {
  const element = [DIV, { class: "gadget" }, [
    DIV,
    { class: "image-container" },
    [IMG, {
      class: "image",
      alt: name,
      src: img,
    }, ""],
  ], [
    DIV,
    { class: "content" },
    [H3, { class: "name" }, "Any Where Door"],
    [
      P,
      { class: "description" },
      description,
    ],
    [SPAN, { class: "category" }, category],
  ]];
  const child = createFragments(element);
  container.append(child);
};

window.onload = (e) => {
  const container = document.querySelector(".gadget-container");
  fetchGadgets().then((gadgets) => displayGadgets(gadgets[0], container));
  console.log("window loaded");
};
