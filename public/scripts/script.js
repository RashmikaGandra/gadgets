import { createFragments, ELEMENTS } from "./dom.js";

const { DIV, H3, IMG, P, SPAN } = ELEMENTS;

const fetchGadgets = async () => [];

const displayGadgets = (_gadgets, container) => {
  const element = [DIV, { class: "gadget" }, [
    DIV,
    { class: "image-container" },
    [IMG, {
      class: "image",
      alt: "any where door",
      src:
        "https://raw.githubusercontent.com/sharadTT/doraemon-gadgets/main/images/gadget-images/1.png",
    }, ""],
  ], [
    DIV,
    { class: "content" },
    [H3, { class: "name" }, "Any Where Door"],
    [
      P,
      { class: "description" },
      "A portal that can transport the user to any location instantaneously",
    ],
    [SPAN, { class: "category" }, "Time-Space"],
  ]];
  const child = createFragments(element);
  container.append(child);
};

window.onload = (e) => {
  const container = document.querySelector(".gadget-container");
  fetchGadgets().then((gadgets) => displayGadgets(gadgets, container));
  console.log("window loaded");
};
