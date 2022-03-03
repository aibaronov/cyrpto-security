const bcryptjs = require("bcryptjs");
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body

      for (let i = 0; i < users.length; i++) {
        const existingPassword = bcryptjs.compareSync(password, users[i].passwordHash);
        console.log(existingPassword);
        if (users[i].username === username && existingPassword) {
          let securedUser = {...users[i]};
          delete securedUser.passwordHash;
          console.log(securedUser);
          return res.status(200).send(securedUser)
        }
        else {
          return res.status(400).send("User not found.")
        }
      }

    },
    register: (req, res) => {
        console.log('Registering User')
        const {username, email, firstName, lastName, password} = req.body;
        const salt = bcryptjs.genSaltSync(5);
        const pinHash = bcryptjs.hashSync(password, salt);
        console.log(req.body)
        delete req.body.password;
        req.body.passwordHash = pinHash
        console.log(req.body)
        users.push(req.body)
        console.log(users);
        res.status(200).send(req.body)
    }
}