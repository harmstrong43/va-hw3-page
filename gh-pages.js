var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/div-classroom/va-hw3-harmstrong43', // Update to point to your repository  
        user: {
            name: 'Hannah Armstrong', // update to use your name
            email: 'armstrha@oregonstate.edu' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)