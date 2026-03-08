import { createFragments, ELEMENTS } from "./dom.js";

const { DIV, H3, IMG, P, SPAN } = ELEMENTS;

const fetchGadgets = async () =>
  fetch("gadgets-data").then((data) => data.json());

// const displaySearchBar = () => {
//   const element = [DIV, { class: "search-bar" }, [
//     DIV,
//     { class: "filter" },
//     [H4, {}, "Filter:"],
//     []
//   ]];
// };

const displayGadgets = ({ name, image, info, category }) => {
  const element = [DIV, { class: "gadget" }, [
    DIV,
    { class: "image-container" },
    [IMG, {
      class: "image",
      alt: name,
      src: image,
    }, ""],
  ], [
    DIV,
    { class: "content" },
    [H3, { class: "name" }, name],
    [
      P,
      { class: "description" },
      info,
    ],
    [SPAN, { class: `${category} category` }, category],
  ]];
  return createFragments(element);
};

const filterGadgets = (category, gadgets) =>
  gadgets.filter((gadget) => gadget.category === category);

const renderPage = (gadgets, container, category) => {
  const gadgetCategory = category === ""
    ? gadgets
    : filterGadgets(category, gadgets);
  const child = gadgetCategory.map(displayGadgets);
  console.log(child);
  container.append(...child);
};

window.onload = (e) => {
  const container = document.querySelector(".gadget-container");
  const category = window.location.pathname.split("/").pop();
  fetchGadgets().then((gadgets) => renderPage(gadgets, container, category));
  console.log("window loaded");
};
