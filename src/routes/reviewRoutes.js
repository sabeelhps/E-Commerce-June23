const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const Product = require("../models/Product");

router.post("/products/:id/reviews", async (req, res) => {
  const { id } = req.params;
  const { rating, comment } = req.body;
  const review = new Review({ rating, comment });
  const product = await Product.findById(id);
  product.reviews.push(review);
  await review.save();
  await product.save();
  res.redirect(`/products/${id}`);
});
router.delete("/products/:id/reviews/:reviewId", async (req, res) => {
  let { id, reviewId } = req.params;

  // Find the product by ID
  const product = await Product.findById(id);
  // Find the index of the review in the product's reviews array
  const reviewIndex = product.reviews.findIndex(
    (review) => review._id.toString() === reviewId
  );

  // If the review is found, remove it from the array
  if (reviewIndex !== -1) {
    const deletedReviewId = product.reviews[reviewIndex];
    product.reviews.splice(reviewIndex, 1);
    // Save the updated product
    await product.save();
    // Delete the review document from the Review collection
    await Review.findByIdAndDelete(deletedReviewId);
    res.redirect(`/products/${id}`);
  }
});

module.exports = router;
