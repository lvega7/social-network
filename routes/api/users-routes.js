const router = require('express').Router();
const {
  getAllUser,
  
} = require('../../controllers/user-controller');

// /api/pizzas
router
  .route('/')
  .get(getAllUser)
//   .post(createPizza);

// // /api/pizzas/:id
// router
//   .route('/:id')
//   .get(getPizzaById)
//   .put(updatePizza)
//   .delete(deletePizza);

module.exports = router;



