// A simple middleware function that logs the request details
function logRequest(req, res, next) {
  console.log(`Received a ${req.method} request to ${req.url}`);
  next(); // Move to the next middleware
}

// Middleware that blocks specific brand
function blockSpecialBrand(req, res, next) {
  if (req.params.brand === 'Brand C') {
    res.status(403).send('Unavailable Brand');
  } else {
    next();
  }
}

module.exports = { logRequest, blockSpecialBrand };
