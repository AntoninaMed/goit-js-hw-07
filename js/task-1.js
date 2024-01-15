const liItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItem.length}`);
liItem.forEach((el) => {
    const header = el.querySelector("h2");
    console.log(`Category: ${header.textContent}`);
    const li = el.querySelectorAll("ul li");
    console.log(`Elements: ${li.length}`);
  });