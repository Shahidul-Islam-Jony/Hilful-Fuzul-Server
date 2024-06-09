const Users = require("../../models/Users/Users");
const admin = require("../../../admin");
const OldUsers = require("../../models/OldUsers/OldUsers");

const DeleteUser = async (req, res) => {
  const { uid } = req.params;
  // console.log(uid);
  const query = { uid: uid };
  try {
    // save user into oldUsers database before deletion
    const user = await Users.findOne(query); // find user
    if (!user) {
      return res.status(404).send("user not found");
    }

    const oldUser = new OldUsers(user.toObject()); // save user into oldusers
    await oldUser.save();

    // Deletion start

    // delete user from firebase
    await admin.auth().deleteUser(uid);
    // delete user from mongodb
    await Users.findOneAndDelete(query);
    res.status(200).send({ message: "User successfully deleted." });
  } catch (error) {
    res.status(500).send({ error: "An error occured while deleting the user" });
  }
};

module.exports = DeleteUser;
