const categoryArr = [
  {
    section: 'Mens',
    imgURL: 'https://i.postimg.cc/nVdD4h39/mensfinal.jpg',
    description: 'Comfort is very important to me. I think people live better in big houses and in big clothes. For me, the summer will be pure gray - mother-of-pearl gray, very pale gray. To me, this is the big statement for summer.'
  },
  {
    section: 'Womens',
    imgURL: 'https://i.postimg.cc/Zny4vHfc/womensfinal.jpg',
    description: 'Awkwardness gives me great comfort. Ive never been cool, but Ive felt cool. Ive been in the cool place, but I wasnt really cool - I was trying to pass for hip or cool. Its the awkwardness thats nice.'
  },
  {
    section: 'Kids',
    imgURL: 'https://i.postimg.cc/KYvK3XtD/kidsfinal.jpg',
    description: 'Fashion is about dressing according to whats fashionable. Style is more about being yourself. I am not interested in shock tactics. I just want to make beautiful clothes. I am not interested in shock tactics.'
  }
]

const sweatpants = [
  {
    id: 0,
    name: 'Boerum Jogger',
    gender: "Female",
    price: 30, 
    img: "https://cdn.shopify.com/s/files/1/0951/7126/products/W_Boerum_Jogger_Heather_Grey_1200x.jpg?v=1563225764",
    description: "Sleek athletic fit jogger sweatpants with patented Sweaty's sweat absorbtion technology built right in! You'll never have to shower again!",
    size: ['S', 'M'],
    fit: ['Athletic', 'Chino']
  },
  {
    id: 1,
    name: 'Nicholas Cage Face',
    gender: "Male",
    price: 100, 
    img: "https://contestimg.wish.com/api/webimage/5ba44688236cce377bb52685-large.jpg?cache_buster=978868a7abef943d5963ca125b8b4c78",
    description: "These are the face of the one true actor Sir Nicholas Cage. He himself wears these daily. He's one of our biggest Customers!",
    size: ['S', 'M', 'L'],
    fit: ['Athletic', 'Chino', 'Loose']
  },
  {
    id: 2,
    name: 'Cotton Jogger',
    gender: "Kids",
    price: 10, 
    img: "https://images-na.ssl-images-amazon.com/images/I/81Qoecp1H-L._AC_UX466_.jpg",
    description: "A simple pair of child size sweatpants. Good enough for any kid's rough and tumble lifestyle. Available for a limited time only!",
    size: 'S',
    fit: 'Loose'
  },
  {
    id: 3,
    name: 'Non-Elastic',
    gender: "Male",
    price: 20, 
    img: "https://cdn2.bigcommerce.com/server3100/1a4f5/products/46/images/585/0700M__new_gray_heather__78305.1478918250.1280.1280.jpg?c=2",
    description: "The looser the better, that's what we always say! With these non-elastic swishy sweats, you'll have a full range of motion no matter the commotion!",
    size: ['S', 'M', 'L'],
    fit: ['Athletic', 'Chino', 'Loose']
  },
  {
    id: 4,
    name: 'Cozy Fleece',
    gender: "Kids",
    price: 15, 
    img: "https://cdn.shoplightspeed.com/shops/613188/files/9352569/600x600x1/chaser-kids-chaser-kids-girls-love-cozy-sweatpants.jpg",
    description: "These Sweaty's sweats are perfect for inside or outside play time, these sweats will keep your child moving to his or her heart's content!",
    size: 'S',
    fit: 'Loose'
  },
  {
    id: 5,
    name: 'Drawstring Harem Jogger',
    gender: "Female",
    price: 25, 
    img: "https://images-na.ssl-images-amazon.com/images/I/61%2BQKzcZiEL._AC_UX342_.jpg",
    description: "Tie 'em up! These sweats offer an enhanced Sweaty's drawstring technology previously unknown to human kind. Simply tie, and forget!",
    size: ['S', 'M'],
    fit: ['Athletic', 'Chino']
  },
]

const aboutFrames = [
  {
    frameImg: "images/about_storyboard1.png",
    frameText: "In 1927, pen was put to paper for the first time to create a vision of the original Sweaty's outfit. Times have changed but our abundance of creativy hasn't."
}, {
    frameImg: "images/about_storyboard2.png",
    frameText: "Before computers took away 75% of our employees' jobs, our original factory housed hundred's of hard workers, sweating so our customers could sweat in style."
}, {
    frameImg: "images/about_storyboard3.png",
    frameText: "No one can deny the impact we've had on popular culture. Celebrities choose Sweaty's, and not only because we pay them to."
}, {
    frameImg: "images/about_storyboard4.png",
    frameText: "Sweaty's proudly donates 5% of our profits every leap year to local charities and organizations that help those less fortunate than our CEO's."
}
];

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildCategoryCards = (arr) => {
  let domString = '';
  for(let i = 0; i < categoryArr.length; i++) {
    
              domString += `<div class="card categoryCard" style="width: 26rem;">
                            <img class="card-img-top" src="${arr[i].imgURL}" alt="Card image cap">
                            <h3 class="card-title">${arr[i].section}</h3>
                            <div class="card-body categoryBody">
                            <p class="card-text categoryP">${arr[i].description}</p>
                            <div class="text-center">
                            <button type="button" class="btn btn-secondary categoryButton" id="${arr[i].section}Button">Shop ${arr[i].section}</button>
                            </div>
                            </div>
                            </div>
                            `
    }
  printToDom('#categories', domString)
}

const buildProductCards = (sweatsArr) => {
  let domString = '';
  for (let i = 0; i < sweatsArr.length; i++) {
            domString += `<div class="Card mx-4 mt-4 rounded" id="sweatsCard">
                            <img src="${sweatsArr[i].img}" class="card-img-top p-3" alt="Sweats">
                            <div class="sweatCardBody card-body pb-0">
                              <h5 class="card-title">${sweatsArr[i].name}</h5>
                              <p class="card-text">${sweatsArr[i].description}</p>
                              <div class="row justify-content-center">`

          if (sweatsArr[i].size === 'S'){
            domString += `<div class="btn-group">
                              <button class="btn btn-secondary btn-sm dropdown-toggle mb-2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Size</button>
                            <div class="dropdown-menu" id="selectSize0">
                                <a class="dropdown-item" id="pantSize1" href="#">S</a>
                            </div>
                          </div> `
          } else if (sweatsArr[i].size.includes('S','M') && sweatsArr[i].size.includes('L') === false){
            domString += `
                          <div class="btn-group">
                              <button class="btn btn-secondary btn-sm dropdown-toggle mb-2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Size</button>
                            <div class="dropdown-menu" id="selectSize1">
                              <a class="dropdown-item" id="pantSize" href="#">S</a>
                              <a class="dropdown-item" id="pantSize" href="#">M</a>
                            </div>
                          </div>`
          } else if (sweatsArr[i].size.includes('S','M','L')){
            domString += `
                          <div class="btn-group">
                              <button class="btn btn-secondary btn-sm dropdown-toggle mb-2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Size</button>
                            <div class="dropdown-menu" id="selectSize2">
                              <a class="dropdown-item" id="pantSize" href="#">S</a>
                              <a class="dropdown-item" id="pantSize" href="#">M</a>
                              <a class="dropdown-item" id="pantSize" href="#">L</a>
                            </div>
                          </div>`
          };
          if (sweatsArr[i].fit === 'Loose') {
            domString += `
                          <div class="btn-group ml-2">
                              <button class="btn btn-secondary btn-sm dropdown-toggle mb-2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fit</button>
                            <div class="dropdown-menu" id="selectFit0">
                              <a class="dropdown-item" href="#">Loose</a>
                            </div>
                          </div>`
          } else if (sweatsArr[i].fit.includes('Athletic', 'Chino') && sweatsArr[i].fit.includes('Loose') === false){
            domString += `
                          <div class="btn-group ml-2">
                              <button class="btn btn-secondary btn-sm dropdown-toggle mb-2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fit</button>
                            <div class="dropdown-menu" id="selectFit1">
                              <a class="dropdown-item" href="#">Athletic</a>
                              <a class="dropdown-item" href="#">Chino</a>
                            </div>
                          </div>`
          } else if (sweatsArr[i].fit.includes('Athletic','Chino','Loose')){
            domString += `
                          <div class="btn-group ml-2">
                              <button class="btn btn-secondary btn-sm dropdown-toggle mb-2" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fit</button>
                            <div class="dropdown-menu" id="selectFit2">
                              <a class="dropdown-item" href="#">Athletic</a>
                              <a class="dropdown-item" href="#">Chino</a>
                              <a class="dropdown-item" href="#">Loose</a>
                            </div>
                          </div>`
          }
          domString += `
                          </div>
                          <div class="card-footer row">
                            <p class="card-text text-center mb-0 p-0 col-6"><small class="text">$${sweatsArr[i].price}</small></p>
                            <button type="button" class="btn btn-primary col-6">BUY</button>
                          </div>
                        </div>
                      </div>`
  }

  printToDom('#productCardContainer', domString)

  let dropdownSelector = document.querySelectorAll('.dropdown-menu');
  
  for (let i=0; i<dropdownSelector.length; i++){
    dropdownSelector[i].addEventListener('click', buildSweatpantsCart);
  }
}


const filterSweats = (event) => {
  let buttonId = event.target.id;
  const tempSweatsArr = [];

  if (buttonId === 'All'){
    buildProductCards(sweatpants);
    return;
  };

  for (let i = 0; i < sweatpants.length; i++){
    if (sweatpants[i].gender === buttonId){
      tempSweatsArr.push(sweatpants[i])
    } 
  };
  
  buildProductCards(tempSweatsArr);
}


const buildSweatpantsCart = (event) => {
  
}

const buildAboutFrames = () => {
  let domString = '';
  for (let i = 0; i < aboutFrames.length; i++) {
    domString += `<div class="about-frame">
      <img src="${aboutFrames[i].frameImg}" alt="">`;
    if ( i % 2 == 0) {
      domString += '<div class="about-textblock-right">';
    } else {
      domString += '<div class="about-textblock-left">';
    }
    domString += `<p>${aboutFrames[i].frameText}</p>
      </div>
    </div>`
  }
  printToDom('#aboutStoryboard', domString);
}


let emailArr = [];

const buildClient = () => {
  let client = {};
  client.firstName = document.querySelector('#inputFirstName').value;
   if(client.firstName == false){
    return 'required';
  }
  client.lastName = document.querySelector('#inputLastName').value;
  emailArr.push(client);
  buildEmailResponse(emailArr);
}

const buildEmailResponse = (arr) => {
  let domString = '';

  for(let i = 0; i < emailArr.length; i++) {
    domString += `<div class="emailResponse">
                  <h2>Thank You!</h2>
                  <p class="clientName">${arr[i].firstName} ${arr[i].lastName},</p>
                  <p>Thank you for reaching out to our Customer Service Department. We value all of our Sweaty customers, and will respond to your question as soon as possible. Have a great day.</p>
                  </div>
                `
    }
  printToDom('#email', domString);
}

/*REVIEWS CODE */
const reviews = [
  {
    name: "Jimmy Dean",
    review: "The best sweatpants to enjoy sausage!",
    publish: true,
  },
  {
    name: "Hodor",
    review: "Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor",
    publish: true,
  },
  {
    name: "Jon",
    review: "I'm baby authentic PBR&B messenger bag neutra, put a bird on it keytar narwhal try-hard kitsch pitchfork chambray cardigan tumblr. Umami subway tile man braid copper mug tumeric readymade try-hard shoreditch tattooed kinfolk VHS williamsburg DIY keytar irony. YOLO truffaut seitan retro marfa shoreditch migas raw denim wolf actually helvetica.",
    publish: false,
  },
  {
    name: "Lori Smith",
    review: "Meh man braid franzen, eu austin irure in. Direct trade raclette poutine bushwick retro in. Fingerstache adaptogen activated charcoal velit nulla, pug aliqua direct trade. Meggings in raw denim, reprehenderit nulla hella ex.",
    publish: true,
  },
  {
    name: "Craig Bunton",
    review: "8-bit plaid beard tote bag blog blue bottle. Kitsch brunch kogi knausgaard chillwave art party woke leggings yuccie lumbersexual, vexillologist poutine. Copper mug narwhal aesthetic, occupy lo-fi XOXO gentrify migas vaporware tousled selvage adaptogen pour-over. Next level organic single-origin coffee pour-over.",
    publish: true,
  },
  {
    name: "Carol Farrell",
    review: "What's a rerun? You wanna a Pepsi, pall, you're gonna pay for it. Ah. There's that word again, heavy. Why are things so heavy in the future. Is there a problem with the Earth's gravitational pull? Just turn around, McFly, and walk away. Are you deaf, McFly? Close the door and beat it.",
    publish: true,
  },
];

const buildReviews = () => {
  let domString = '';

  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].publish === true) {
    domString += `<div id='reviewCard' class="card col-sm-4 text-left">`;
    domString += `<div class="card-body">`;
    domString += `<h4 class="name">${reviews[i].name}</h4>`;
    domString += `<p class="specificReviews">${reviews[i].review}</p>`;
    domString += `</div>`;
    domString += `</div>`;
    }
  }
  printToDom('#personalReviews', domString);
}


const navigateToShop = () => {
  document.getElementById("MensButton").onclick = function() {
    window.location.href = "/shop.html#Male";
  };
  document.getElementById("WomensButton").onclick = function() {
    window.location.href = "/shop.html#Female";
  };
document.getElementById("KidsButton").onclick = function() {
  window.location.href = "/shop.html#Kids";
};
}

const filterOnLoad = () => {
  let tempCategory = [];
  if(window.location.hash) {
    var hash = window.location.hash.substring(1); 
    // console.log(hash);
    for (let i = 0; i < sweatpants.length; i++){
      if (sweatpants[i].gender === hash){
        tempCategory.push(sweatpants[i])
      } 
};
buildProductCards(tempCategory);
}
}

const clickEvents = () => {
  if (document.body.id === 'shop') {
    document.querySelector('#Male').addEventListener('click', filterSweats);
    document.querySelector('#Female').addEventListener('click', filterSweats);
    document.querySelector('#Kids').addEventListener('click', filterSweats);
    document.querySelector('#All').addEventListener('click', filterSweats);
  }
  if (document.body.id === 'customerservice') {
    document.querySelector('#emailSubmit').addEventListener('click', buildClient);
  }
}


const init = () => {
  if (document.body.id === "shop"){
    buildProductCards(sweatpants);
    filterOnLoad()
  } else if (document.body.id === "about") {
    buildAboutFrames();
  } else if (document.body.id === "homepage") {
    buildCategoryCards(categoryArr);
    navigateToShop();
  } else if (document.body.id === "reviews"){
    buildReviews();
  } else if (document.body.id === "customerservice"){
    
  };

clickEvents();
}

init();
