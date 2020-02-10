"use strict";

const User = use("App/Model/User");
const { validateAll } = use("Validator");

class AuthController {
  /**
   * User authentication
   * */

  // async register({ req, auth, resp }) {
  async register({ req, resp }) {
    const info = req.all();
    //add user role to data
    const rules = {
      username: "required|unique:users",
      email: "required|email|unique:users",
      password: "required|confirmed|min:6"
    };

    const validate = await validateAll(info, rules);

    // show error messages when validation fails
    if (validate.fails()) {
      return resp.status(400).json({
        status: "error",
        message: validate.messages()
      });
    }

    try {
      //create user
      const user = await User.create(info);

      if (user) {
        const token = await auth.generate(user);

        if (token) {
          return resp.json({
            status: "success",
            data: token
          });
        }
        return resp.status(400).json({
          status: "error",
          message: "Unable to create token."
        });
        // req.auth.login(user);
        // await req.auth.login(user);
      }
      // await auth.login(user);
      //return response.route('home')
    } catch (e) {
      console.log(e);
      return resp.status(400).json({
        status: "error",
        message: "Server error. Try again later ..."
      });
    }
  }

  /**
   * User authentication
   * */

  async login({ req, auth, resp }) {
    // async login(req, resp) {
    const email = req.input("email");
    const password = req.input("password");

    try {
      const token = await auth.attempt(email, password);

      return response.json({
        status: "success",
        data: token
      });
    } catch (e) {
      console.log(e);
      resp.status(400).json({
        status: "error",
        message: "Invalid credentials"
      });
    }
  }

  /**
   * Display user profile
   * */
  async profile({ auth, response }) {
    return response.json({
      status: "success",
      data: auth.user
    });
  }

  /**
   * Logout user
   * */

  async logout({ auth, response }) {
    await auth.logout();
    return response.json({
      status: "success",
      data: "Logged out ..."
    });
  }
}

module.exports = AuthController;
