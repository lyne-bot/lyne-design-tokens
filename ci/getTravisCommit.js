const axios = require('axios');

require('dotenv')
  .config();

module.exports = async (id) => {
  try {

    const requestHeaders = {
      'Accept': 'application/json',
      'Authorization': `token ${process.env.TRAVIS_TOKEN}`,
      'Content-Type': 'application/json',
      'Travis-API-Version': '3'
    };

    const requestConfig = {
      headers: requestHeaders,
      method: 'GET',
      url: `https://api.travis-ci.org/build/${id}`
    };

    console.log(requestConfig);

    const travisResponse = await axios.request(requestConfig);

    console.log('------------ response');
    console.log(travisResponse);
    console.log('------------ ');

    return travisResponse.data.commit.message;

  } catch (e) {
    console.log('-->> Error while getting commit message from Travis');
    console.log(e);

    return 'chore: empty commit';
  }
};
