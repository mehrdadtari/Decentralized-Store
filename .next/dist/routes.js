"use strict";

var routes = require("next-routes")();
//the parantesis at the end shows that this module returns a function instead of a class. and this function is immediately invoked.

routes.add("/stores/new", "stores/new").add("/stores/:address", "/stores/show").add("/stores/:address/reviews", "/stores/storeReviews").add("/stores/:address/products", "stores/products/index").add("/stores/:address/products/new", "/stores/products/new").add("/stores/:address/products/:product_id/review", "/stores/products/review").add("/stores/:address/products/:product_id/allReviews", "/stores/products/allReviews");

//The order of add mehtods are important!
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjtBQUNBOztBQUVBLE9BQ0csQUFESCxJQUNPLEFBRFAsZUFDc0IsQUFEdEIsY0FFRyxBQUZILElBRU8sQUFGUCxvQkFFMkIsQUFGM0IsZ0JBR0csQUFISCxJQUdPLEFBSFAsNEJBR21DLEFBSG5DLHdCQUlHLEFBSkgsSUFJTyxBQUpQLDZCQUlvQyxBQUpwQyx5QkFLRyxBQUxILElBS08sQUFMUCxpQ0FLd0MsQUFMeEMsd0JBTUcsQUFOSCxJQU9JLEFBUEosZ0RBUUksQUFSSiwyQkFVRyxBQVZILElBV0ksQUFYSixvREFZSSxBQVpKOztBQWVBO0FBQ0EsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWVocmRhZF93b3JrL3dvcmtfc3BhY2Uvc3RvcmVfdjIifQ==