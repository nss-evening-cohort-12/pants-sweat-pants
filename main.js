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

const buildEmailForm = () => {
  let domString = '';
    domString += `<form>
                  <div class="form-row">
                  <div class="col">
                  <input type="text" class="form-control" placeholder="First name">
                  </div>
                  <div class="col">
                  <input type="text" class="form-control" placeholder="Last name">
                  </div>
                  </div>
                  </form>
                `
    }
  printToDom('#categories', domString)
}

const init = () => {
buildCategoryCards(categoryArr);
}

init();
