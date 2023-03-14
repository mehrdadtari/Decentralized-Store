const routes = require("next-routes")();
//the parantheses at the end shows that this module returns a function instead of a class. and this function is immediately invoked.

routes
  .add("/nimda", "marketAdmin/index")
  .add("/stores/new", "stores/new")
  .add("/stores/:address", "/stores/show")
  .add("/stores/:address/reviews", "/stores/storeReviews")
  .add("/stores/:address/nimda", "stores/admin/index")
  .add("/stores/:address/nimda/products", "stores/admin/products/index")
  .add("/stores/:address/nimda/products/new", "/stores/admin/products/new")
  .add(
    "/stores/:address/nimda/products/:product_id/updateProduct",
    "/stores/admin/products/update"
  )
  .add("/stores/:address/products", "stores/products/index")
  .add(
    "/stores/:address/products/:product_id/checkout",
    "/stores/products/checkout"
  )
  .add(
    "/stores/:address/products/:product_id/review",
    "/stores/products/review"
  )
  .add(
    "/stores/:address/products/:product_id/allReviews",
    "/stores/products/allReviews"
  );

//The order of add methods are important!
module.exports = routes;
