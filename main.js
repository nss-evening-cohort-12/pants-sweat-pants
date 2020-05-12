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
    domString += `<h2>Email Us</h2>
                  <form>
                  <div class="form-row">
                  <div class="col">
                  <label for="inputEmail" class="mb-0 mt-2">First Name</label>
                  <input type="text" class="form-control" id="inputFirstName" placeholder="First name">
                  </div>
                  <div class="col">
                  <label for="inputLastName" class="mb-0 mt-2">Last Name</label>
                  <input type="text" class="form-control" id="inputLastName" placeholder="Last name">
                  </div>
                  </div>
                  <div class="form-group">
                  <label for="inputEmail" class="mb-0 mt-2">Email</label>
                  <input type="email" class="form-control" id="inputEmail" placeholder="name@name.com">
                  </div>
                  <div class="form-group">
                  <label for="selectSubject" class="mb-0 mt-0">Subject</label>
                  <select class="form-control" id="selectSubject">
                    <option>My Pants Dont Fit!</option>
                    <option>Order Status</option>
                    <option>Check Shipping Status</option>
                    <option>Return Policy</option>
                    <option>Coupon Code Doesn't Work</option>
                  </select>
                  </div>
                  <div class="form-group">
                  <label for="commentBox" class="mb-0 mt-0">Comments</label>
                  <textarea class="form-control" id="commentBox" rows="3"></textarea>
                  </div>
                  <div class="text-right">
                  <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                  </form>
                `
  printToDom('#emailUs', domString)
}

const init = () => {
// buildCategoryCards(categoryArr);
buildEmailForm();
}

init();
