// DOM elements
const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
    if (user) {
        // let userName;
        // if(data){
        //     data.forEach(doc => {
        //         const f_user = doc.data();
        //         if(f_user.email == user.email){
        //             userName =  f_user.fname
        //         }
        //     })
        // } <p>Welcome ${userName}</p>
        db.collection('users').doc(user.uid).get().then(doc => {
            const userInfo = `
            <div>
                <p>Welcome ${doc.data().fname}</p>
                <p>Logged in as ${user.email}</p>
                <div>${doc.data().bio}</div>
            </div>`;
            accountDetails.innerHTML = userInfo

        })
        
        
        // toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'block')
        loggedOutLinks.forEach(item => item.style.display = 'none')
    } else {
        // hide account details
        accountDetails.innerHTML = 'Log in to see Account Details '
        // toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'none')
        loggedOutLinks.forEach(item => item.style.display = 'block')
    }
}

// setup guides
const setupGuides = (data) => {
    if (data.length) {
        let html = '';
        data.forEach(doc => {
        const guide = doc.data();
        const li = `
            <li>
            <div class="collapsible-header grey lighten-4"> ${guide.title} </div>
            <div class="collapsible-body white"> ${guide.content} </div>
            </li>
        `;
        html += li;
        });
        guideList.innerHTML = html
    } else {
        guideList.innerHTML = '<h5 class="center-align"> Login to view guides</h5>'
    }
};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });