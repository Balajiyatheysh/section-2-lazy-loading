const images = document.querySelectorAll("img");
const cont = document.getElementById("container");

const imgOptions = {};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    threshold:0.5
    const img = entry.target;
    img.src = img.src.replace("w=10&", "w=800&");
    imgObserver.unobserve(entry.target);
  });
}, imgOptions);

images.forEach((img) => {
  imgObserver.observe(img);
});

fetch('https://api.unsplash.com/search/photos?page=1&query=road&client_id=RormSLG6TWM3F6JwCZop3aWRGC4K3XdUh1V8IGNW-Cc')
    .then(response=>response.json())
    .then(data => 
        {
        console.log(data);
        cont.innerHTML=`<img src=${data.results.urls.small} alt="images">`
    });

    




   