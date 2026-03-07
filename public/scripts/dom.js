export const createFragments = ([tag, attrs, ...content]) => {
  const element = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    element.setAttribute(key, value);
  }
  if (content.length === 1 && typeof content[0] === "string") {
    element.textContent = content;
    return element;
  }
  element.append(...content.map((c) => createFragments(c)));
  return element;
};

export const ELEMENTS = {
  "DIV": "div",
  "H3": "h3",
  "SPAN": "span",
  "P": "p",
  "IMG": "img",
};
