const User = require('./User');

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        // console.log(user);
        if (user) {
            delete user.password;
            res.send(req.body);
            // console.log(user);
        } else {
            console.log("User already registered!");
        }
    } catch (e) {
        console.log("Something went wrong!");
    }
  
};

module.exports = createUser;