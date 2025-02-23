// let dummyTestimonials = [
//     {
//         author: "Feby",
//         rating: 3,
//         caption: "Herbie: Fully Loaded",
//         image:"1740056288605.jpg",
//     },
//     {
//         author: "Rahmadhani",
//         rating: 3,
//         caption: "Cantik",
//         image:"1740056288650.jpg",
//     },
//     {
//         author: "Zasa",
//         rating: 5,
//         caption: "hmm",
//         image:"1740056288588.jpg",
//     },
//     {
//         author: "Eby",
//         rating: 2,
//         caption: "kuas & canva",
//         image:"1740056288674.jpg",
//     },
//     {
//         author: "Rahma",
//         rating: 4,
//         caption: "WoW",
//         image:"1740056288519 copy.jpg",
//     },
// ];

function fetchTestimonials() {
    return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.npoint.io/4597045fd95d79ade157", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log("Response :", response);
    
    resolve(response.testimonials);
} else {
    // console.error("Error :", xhr.status);
    reject ("Error :", xhr.status);
  }
};
xhr.onerror = () => reject ("network error");

xhr.send();
});
}

const testimonialsContainer = document.getElementById('testimonialsContainer')

const testimonialsHTML = (array) => {
    return array
    .map(
        (testimonial) => `
        <article>
                    <img src="/img/pinterest/${testimonial.image}" alt="testimonial-image">
                    <p class="testimonial-item-caption">"${testimonial.caption}"</p>
                    <p style="text-align: right;">-${testimonial.author}</p>
                    <p style="text-align: right;">${testimonial.rating}★</p>
                </article>
                `
    )
    .join("");
};

async function showAllTestimonials () {
    const testimonials = await fetchTestimonials();
    console.log(testimonials)
    testimonialsContainer.innerHTML = testimonialsHTML(testimonials);
}

showAllTestimonials ()

async function filterTestimonialsByStar(rating) {
    const testimonials = await fetchTestimonials();

    const filteredTestimonials = testimonials.filter(
        (testimonial) => testimonial.rating === rating
    );

    console.log(filteredTestimonials);
    
    if (filteredTestimonials.length === 0){
        return (testimonialsContainer.innerHTML =`<p>No testimonials.</p>`);
    }

    testimonialsContainer.innerHTML = testimonialsHTML(filteredTestimonials);

}