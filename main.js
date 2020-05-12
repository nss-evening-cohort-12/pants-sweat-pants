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
    name: 'Nicholas Cage Face',
    gender: "Male",
    price: 100, 
    img: "https://contestimg.wish.com/api/webimage/5ba44688236cce377bb52685-large.jpg?cache_buster=978868a7abef943d5963ca125b8b4c78",
    description: "These are the face of the one true actor Sir Nicholas Cage. He himself wears these daily. He's one of our biggest Customers!"
  },
  {
    id: 1,
    name: 'Boerum Jogger',
    gender: "Female",
    price: 30, 
    img: "https://cdn.shopify.com/s/files/1/0951/7126/products/W_Boerum_Jogger_Heather_Grey_1200x.jpg?v=1563225764",
    description: "Sleek athletic fit jogger sweatpants with patented Sweaty's sweat absorbtion technology built right in!"
  },
  {
    id: 2,
    name: 'Cotton Jogger',
    gender: "Kids",
    price: 10, 
    img: "https://images-na.ssl-images-amazon.com/images/I/81Qoecp1H-L._AC_UX466_.jpg",
    description: "A simple pair of child size sweatpants. Good enough for any kid's rough and tumble life style."
  },
  {
    id: 3,
    name: 'Non-Elastic',
    gender: "Male",
    price: 20, 
    img: "https://cdn2.bigcommerce.com/server3100/1a4f5/products/46/images/585/0700M__new_gray_heather__78305.1478918250.1280.1280.jpg?c=2",
    description: "The looser the better, that's what we always say! With these non-elastic swishy sweats, we here at Sweaty's guarantee you'll be free to do any sort of wild and crazy motion you so desire!"
  },
  {
    id: 4,
    name: 'Drawstring Harem Jogger',
    gender: "Female",
    price: 25, 
    img: "https://images-na.ssl-images-amazon.com/images/I/61%2BQKzcZiEL._AC_UX342_.jpg",
    description: "Tie 'em up! These sweats offer an enhanced Sweaty's drawstring technology previously unknown to human kind. Simply tie, and forget!"
  },
  {
    id: 5,
    name: 'Cozy Fleece',
    gender: "Kids",
    price: 15, 
    img: "https://cdn.shoplightspeed.com/shops/613188/files/9352569/600x600x1/chaser-kids-chaser-kids-girls-love-cozy-sweatpants.jpg",
    description: "Perfect for inside or outside play time, these sweats are guaranteed to keep your child moving to his or her's hearts content!"
  }
]

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
                            <a href="#" class="btn btn-secondary categoryButton">Shop ${arr[i].section}</a>
                            </div>
                            </div>
                            </div>
                            `
    }
  printToDom('#categories', domString)
}

const buildProductCards = (sweatpants) => {
  let domString = '';
  for (let i = 0; i < sweatpants.length; i++) {
    domString += `
        <div class="Card mx-4 mt-4 rounded" id="sweatsCard">
          <img src="${sweatpants[i].img}" class="card-img-top p-3" alt="Sweats">
          <div class="card-body pb-0">
            <h5 class="card-title">${sweatpants[i].name}</h5>
            <p class="card-text">${sweatpants[i].description}</p>
            <div class="card-footer row">
              <p class="card-text text-center mb-0 p-0 col-6"><small class="text">$${sweatpants[i].price}</small></p>
              <button type="button" class="btn btn-primary col-6">BUY</button>
            </div>
          </div>
        </div>
    `
  }
  printToDom('#productCardContainer', domString)
}

const init = () => {
  if (document.body.id === "shop"){
    buildProductCards(sweatpants);
  } else if (document.body.id === "about") {

  } else if (document.body.id === "homepage") {
    buildCategoryCards(categoryArr);
  } else if (document.body.id === "reviews"){

  };
}


init();
