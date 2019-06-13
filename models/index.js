
const axios = require('axios');

const Index_Model = {

    Index_home: function(successCallback, errorCallback) {
       /*  axios.get("https://google.com.br")
        .then(successCallback)
        .catch(errorCallback); */
        successCallback({data: "successs"})
    }

}

module.exports = Index_Model