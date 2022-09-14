var mongoose = require("mongoose"),
  jwt = require("jsonwebtoken"),
  bcrypt = require("bcrypt"),
  User = mongoose.model("User");

exports.sign_in = function (req, res) {
  User.findOne(
    {
      email: req.body.email,
    },
    function (err, user) {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      return res.json({
        token: jwt.sign(
          { email: user.email, fullName: user.fullName, _id: user._id },
          "RESTFULAPIs"
        ),
      });
    }
  );
};
exports.register = function (req, res) {
  var newUser = new User(req.body);
  newUser.password = bcrypt.hashSync(req.body.password, 10);
  newUser.save(function (err, user) {
    if (err) {
      return res.status(400).send({
        message: err,
      });
    } else {
      user.password = undefined;
      return res.json(user);
    }
  });
};

exports.loginRequired = function (req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized user!" });
  }
};

exports.getUserRequired = async (req, res, next) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getByIDRequired = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    return res.json({
      email: user.email,
      fullName: user.fullName,
      _id: user._id,
      created: user.created,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateByIDRequired = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await User.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteByIDRequired = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await User.findByIdAndDelete(id);
    res.send(`Delete  ${data.fullName} has been successfully...`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
