"use strict";
const User = use("App/Models/User");
// const { validateAll } = use("Validator");

class AuthController {
  /**
   * User authentication
   * */

  // async register({ req, resp }) {
  async register({ request, auth, response }) {
    const info = request.only(["username", "email", "password"]);
    //add user role to data
    /*const rules = {
      username: "required|unique:users",
      email: "required|email|unique:users",
      password: "required|"
    };*/

    //const validate = await validateAll(info, rules);

    // show error messages when validation fails
    /*if (validate.fails()) {
      return resp.status(400).json({
        status: "error",
        message: validate.messages()
      });
    }*/

    try {
      //create user
      const user = await User.create(info);

      if (user) {
        const token = await auth.generate(user);

        if (token) {
          return response.json({
            status: "success",
            data: token
          });
        }
        return response.status(400).json({
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
      return response.status(400).json({
        status: "error",
        message: "Server error. Try again later ..."
      });
    }
  }

  /**
   * User authentication
   * */

  // async login(req, resp) {
  async login({ request, auth, response }) {
    // const email = req.input("email");
    //const password = req.input("password");
    const { email, password } = request.only(["email", "password"]);
    try {
      const token = await auth.attempt(email, password);

      return response.json({
        status: "success",
        data: token
      });
    } catch (e) {
      console.log(e);
      response.status(400).json({
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

  /*async logout({ auth, response }) {
    await auth.logout();
    return response.json({
      status: "success",
      data: "Logged out ..."
    });
  }*/
}

module.exports = AuthController;
