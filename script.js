const reviews = [
  {
    text: `„Izuzetan i potpuno nezaobilazan vodič za ovaj jedinstveni trenutak u ljudskoj istoriji”`,
    authorSrb: 'Erik Šmit',
    authorOg: '(Eric Schmidt)',
    occupation: 'Bivši direktor Gugla',
  },
  {
    text: '„Fascinantna, odlično napisana i važna knjiga.”',
    authorSrb: 'Juaval Noa Harar',
    authorOg: '(Yuval Noah Harari)',
    occupation: 'Autor knjige Sapiens, bestselera Njujork tajmsa',
  },
  {
    text: '„Izvanredan vodič za snalaženje u vremenima bez presedana.”',
    authorSrb: 'Bil Gejts',
    authorOg: '(Bill Gates)',
    occupation: 'Suosnivač Majkrosofta',
  },
  {
    text: '„Bogata zanimljivim činjenicama, ubedljivim argumentima i primamljivim zapažanjima; neizostavno štivo.”',
    authorSrb: 'Danijel Kaneman',
    authorOg: '(Daniel Kahneman)',
    occupation: 'Dobitnik Nobelove nagrade i autor bestselera Misliti brzo i sporo',
  },
  {
    text: '„Ako želite da shvatite značenje, obećanje i pretnju plimnog talasa tehnologija koje prete da promene svet i koje već sada narastaju i spajaju se tamo negde na pučini, onda je ova knjiga za vas.”',
    authorSrb: 'Stiven Fraj',
    authorOg: '(Stephen Fry)',
    occupation: 'glumac, voditelj i autor bestselera ',
  },
  {
    text: '„Talas koji dolazi pruža jedan prosvetljujuć i ubedljiv argument o tome da napredne tehnologije već preobražavaju svaki aspekt društva: moć, bogatstvo, ratovanje, rad, čak i ljudske odnose. Možemo li staviti pod kontrolu ove nove tehnologije pre nego što one počnu da kontrolišu nas? ”',
    authorSrb: 'Džefri d. saks',
    authorOg: '(Jeffrey D. Sachs)',
    occupation: 'Svetski priznati ekonomista, autor bestselera',
  },
];

const reviewsContainer = document.getElementById('review-container-id');

function createReviewCard(review) {
  return `
    <div class="review-card">
        <p class="review-text">${review.text}</p>
        <p class="review-authorSrb"><span class="dash">------</span>${review.authorSrb}<span class="review-authorOg">&nbsp${review.authorOg}</span></p>
        <p class="review-occupation">${review.occupation}</p>
    </div>  
    `;
}

reviews.forEach((review) => {
  reviewsContainer.innerHTML += createReviewCard(review);
});
