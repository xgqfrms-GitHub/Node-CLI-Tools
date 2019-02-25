/**
 * [nct: fetch data]
 * @author: xgqfrms
 * @date: 2017-06-12
 */

const fetch = require('node-fetch');
const showdata = require('./showdata');

// NODE_ENV_ID = `08ecc2f68d922f18800e`;
// NODE_ENV_SECRET = `5846d428b5340812b76c9637eceaee979340b922`;

const nct = (username, repo) => {
    let url = `https://api.github.com/repos/${username}/${repo}/commits`;
    let options = {
        data: {
            client_id: `08ecc2f68d922f18800e`,
            client_secret: `5846d428b5340812b76c9637eceaee979340b922`,
        },
    };
    fetch(url, options)
    .then((res) => res.json())
    .then((json)=> {
        // not need at all
        return repos = json;
    })
    .then((repos)=>{
        showdata(repos);
    });
};

module.exports = nct;

