const get_products = () => {
    const promiseFromFetch = fetch("https://dummyjson.com/products");
  
    const promiseFromJson = promiseFromFetch.then((response) => {
      return response.json();
    });
  
    return promiseFromJson.then((data) => {
      return data.products;
    });
  };
  
  const productsPromise = get_products();
  
  productsPromise.then((products) => {
    const htmlElements = products.map((product) => {
      const div = document.createElement("div");
      div.innerHTML = `${product.title} - ${product.price} - ${product.rating}`;
      div.style.padding = "5px";
      return div;
    });
  
      document.body.append(...htmlElements);
  });

  