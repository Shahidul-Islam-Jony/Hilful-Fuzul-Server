const Users = require("../../models/Users/Users");

const becomeMember = async (req, res) => {
  const uid = req.params.uid;
  //   console.log(uid);
  const { name, father, email, phone, village, divission, type } = req.body;
  //   console.log(name, father, email, phone, village, divission, type);

  const query = { uid: uid };
  const member = {
    $set: {
      name: name,
      father: father,
      email: email,
      phone: phone,
      village: village,
      divission: divission,
      type: type,
    },
  };
  const result = await Users.findOneAndUpdate(query, member);
  res.send(result);
};

module.exports = becomeMember;
