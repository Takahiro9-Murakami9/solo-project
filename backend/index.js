const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser")
const cors = require('cors');
const app = express();
const knex = require("./knex");
const axios = require('axios');
const port = process.env.PORT || 8080;
require("dotenv").config({ path: "./.env.local" });

// receive json
app.use(express.json());

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));

app.use(cookieParser());

app.get('/', function(req, res){
   res.send("Hello FUCKING world!");
});

// app.post("/", function (req, res) {
//   try {
//     res.json(req.body); // jsonで返却
//   } catch (error) {
//     console.error(error);
//   }
// });

app.post("/getSurvey", (req, res) => {
  try {
    res.json(req.body);
    const name = req.body["name"]
    console.log(name.firstName);
    const answers = req.body["answers"]
    const email = req.body["email"]
    const rawScore = [];
    Object.keys(answers).forEach(key => rawScore.push(Number(answers[key])));
    const totalScore = rawScore.reduce((previous, current) => previous + current);
    const date = req.body["yearMonthDate"]
    console.log(typeof date);

    knex.transaction(async trx => {
      await trx("users")
        .insert([{ first_name: name.firstName, last_name: name.lastName, email: email }])
      // const created_user = await trx("users").insert({first_name: name.firstName, last_name: name.lastName, email: email});
      // console.log(created_user);
      const fetch_user_id = await knex
        .select("id")
        .from("users");
      const lastID = fetch_user_id[fetch_user_id.length - 1].id + 1;
      await trx("score_date")
        .insert([{ score: totalScore, date: date, user_id: lastID}])
    });
    
    
  } catch (error) {
   console.error(error);
  }
});

app.post("/api/register", async(req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try{
    // res.json(req.body);
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword
    }
    // const result = await user.save();
    // const{password, ...data} = await result.toJSON();
    // res.send(data);
    knex("users")
      .insert({ first_name: user.firstName, last_name: user.lastName, email: user.email, password: user.password })
      .then(res.send(user));

  } catch (error) {
    console.log(error);
  }
});

const SECRET_KEY = "aiueo";

app.post("/api/login", async (req, res) => {
  // res.json(req.body);
  console.log(req.body.password);
  const fetch_user = await knex
        .select()
        .from("users")
        .where("email", req.body.email);
  console.log(fetch_user);

  if(fetch_user.length === 0) {
    // console.log("user not found");
    return res.status(404).send({message: "user not found"})
  }

  if(!await bcrypt.compare(req.body.password, fetch_user[0].password)) {
    return res.status(400).send({message: "invalid credentials"});
  }

  const payload = { id: fetch_user[0].id};

  const token = jwt.sign(payload, SECRET_KEY);
  
  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  })

  res.send(fetch_user)

})

app.get("/user", async (req, res) => {
  try{
    const cookie = req.cookies['jwt'];
  
    const claims = jwt.verify(cookie, SECRET_KEY);
  
    if (!claims) {
      return res.status(401).send({message: "unauthenticated"});
    }
  
    const user = await knex
    .select()
    .from("users")
    .where("id", claims.id); 
    
    const withoutArr = user[0];
    console.log(withoutArr);
    const withoutPasswordUser = Object.keys(withoutArr)
      .filter((key) => !key.includes('password'))
      .reduce((obj, key) => {return Object.assign(obj, {[key]: withoutArr[key]})}, {});
    console.log(withoutPasswordUser);
  
    res.send(withoutPasswordUser)
  } catch (e) {
    return res.status(401).send({message: "unauthenticated"});
  }
})

app.post("/logout", (req, res) => {
  res.cookie('jwt', '', {maxAge: 0})

  res.send({
    message: 'success'
  })
})

app.listen(port, () => {
   console.log(`Example app lsitening on port ${port}`);
});