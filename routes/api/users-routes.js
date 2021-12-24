const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser
  
} = require('../../controllers/user-controller');

// /api/users
router
  .route('/')
  .get(getAllUser)
  .get(getUserById)
  .post(createUser)
//   .post(createPizza);

// // /api/pizzas/:id
// router
//   .route('/:id')
//   .get(getPizzaById)
//   .put(updatePizza)
//   .delete(deletePizza);

module.exports = router;



