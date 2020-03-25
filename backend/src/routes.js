const express = require("express")
const router = express.Router()

router.post("/users", (req, res) => {
  return res.json({
    evento: "semana omnistack",
    aluno: "Clecy"
  })
})

module.exports = router
