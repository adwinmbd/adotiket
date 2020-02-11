"use strict";
const User = use("App/Models/User");
const Hash = use("Hash");

class UserController {
  //show all users
  async show(response) {
    try {
      const users = await User.all();

      if (users) {
        return users;
      }
    } catch (err) {
      console.log(err);
      return response.status(err.status).send(err);
    }
  }

  // delete user
  async destroy({ params, request, response }) {
    try {
      const findUser = await User.find(params.id);

      if (findUser) {
        const deleteUser = await findUser.delete();
        return response.json({ message: "User deleted!" });
      }
      return response.json({ message: "User not found!" });
    } catch (error) {
      console.log(error);
      return response.json({ message: "Server unable to delete user!" });
    }
  }
}

module.exports = UserController;
