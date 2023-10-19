const Gust=require('../Models/userSchema')
module.exports = {
  //
  // Create a user with name, email, username (POST /api/users/auth/signup)
  //
  userCreation: async (req, res) => {
    const { name, email,password,address,phone } = req.body;
    if (error) {
      res.json(error.message);
    }

    await Gust.create({
      name: name,
      email: email,
      username: username,
      password: password,
      address:address,
      phone:phone,
      role:user
    });
    res.status(201).json({
      status: "success",
      message: "user registration successfull.",
    });
  },
};
