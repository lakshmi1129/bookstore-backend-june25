// import the express
const express = require("express")
// import userController
const userController = require('./controller/userController')

// import bookController
const bookController = require('./controller/bookController')
const jwtMiddleware = require("./middleware/jwtMiddleware")
// import multerconfig
const multerConfig = require("./middleware/multerMiddleware")
const jwtAdminMiddleware = require("./middleware/jwtAdminMiddleware")


// create an instance
const route = new express.Router()

// path for register.....
route.post('/register',userController.registerController)

// path for login.....
route.post('/login',userController.loginController)

// path for google login.....
route.post('/google-login',userController.googleLoginController)

// path for get home books.....
route.get('/all-home-book', bookController.getHomeBookController)



// ......................USER.......................

// path for add book.....
route.post('/add-book',jwtMiddleware, multerConfig.array("uploadImages",3), bookController.addBookController)


// path for All books.....
route.get('/all-book',jwtMiddleware, bookController.getAllBookController)

// path to view a book.....
route.get('/view-book/:id', bookController.getABookController)

// path for update user Profile.....
route.put('/user-profile-update',jwtMiddleware,multerConfig.single("profile"),userController.editUserProfileController)


// path for get All user books.....
route.get('/user-books',jwtMiddleware, bookController.getAllUserBookController)

// path for get All user brought books.....
route.get('/user-brought-books',jwtMiddleware, bookController.getAllUserBroughtBookController)


// path for delete user  books.....
route.delete('/delete-user-books/:id', bookController.deleteUserBookController)

// path for make payment.....
route.put('/make-payment',jwtMiddleware, bookController.makePaymentController)




// -----------------------ADMIN------------------------------

// path for Admin All books.....
route.get('/admin-all-books',jwtAdminMiddleware, bookController.getAllBookAdminController)

// path for approve books.....
route.put('/approve-books',jwtAdminMiddleware, bookController.approveBookController)

// path for Admin All Users.....
route.get('/all-users',jwtAdminMiddleware, userController.getAllUsersController)

// path for update admin profile.....
route.put('/profile-update',jwtAdminMiddleware,multerConfig.single("profile"),userController.editAdminProfileController)






// routes export
module.exports = route