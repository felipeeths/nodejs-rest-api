
var Index_Model = require("../models/index")

const Index = {
   
    Index_home: function(request, response, next) {

        Index_Model.Index_home(
            function(success){
                response.json(success.data)
            },
            function(error){
                response.json(error)
            }
        )
    },

};

module.exports = Index