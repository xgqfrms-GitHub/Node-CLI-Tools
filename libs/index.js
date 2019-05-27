/**
 * [nct: fetch data]
 * @author: xgqfrms
 * @date: 2017-06-12
 */

const fetch = require('node-fetch');
const showdata = require('./showdata');

// NODE_ENV_ID = ``;
// NODE_ENV_SECRET = ``;

const nct = (username, repo) => {
    let url = `https://api.github.com/repos/${username}/${repo}/commits`;
    let options = {
        data: {
            client_id: process.env.NODE_ENV_ID,
            client_secret: process.env.NODE_ENV_SECRET,
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

