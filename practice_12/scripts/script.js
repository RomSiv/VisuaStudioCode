
const users = [
    { name: "Sergey" },
    { name: "Anton" },
    { name: "Sasha" },
    {
      name: "Oleg",
      avatar:
        "https://us04images.zoom.us/p/cUc7hDTbTt6hqC1fQ4J7jw/550ee80f-68de-4423-ba4f-2562d8254aaa-3090?type=large",
    },
  ];
  
  users.forEach((user) => {
    const div = document.createElement("div");
    if (user.avatar) {
      // add img
      const img = document.createElement("img");
      img.src = user.avatar;
      img.classList.add("UserAvatar");
      div.append(img);
    } else {
      div.innerHTML = user.name;
    }
  
    const p = document.createElement("p");
    p.innerText = user.name;
    p.classList.add("UserSubheader");
    div.append(p);
  
    div.classList.add("UserWindow");
    document.body.append(div);
  });