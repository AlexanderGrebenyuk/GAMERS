const router = require("express").Router();
const { User } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (isNaN(+id)) {
    return res.status(400).json({ message: "Id не число" });
  }
  try {
    const user = await User.findByPk(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userInDb = await User.findOne({where: {id}})

    const user = await User.update(
      {
    
        score: userInDb.score + 100,
     
      },
      { where: { id } }
    );
    const userResponse = await User.findByPk(id)

    res.json({message:'success', userResponse});
  } catch (error) {
    res.status(418).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { name, score, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({
      name,
      score,
      email,
      password: hash,
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.destroy({ where: { id } });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
