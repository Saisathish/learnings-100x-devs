const express = require("express");
const z = require("zod");
const app = express();
const port = 3000;

const schema = z.array(z.number());

const schema1 = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  country: z.literal("IN").or(z.literal("US")),
});

app.use(express.json());

app.post("/kidney", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({
      msg: "invalid input",
    });
  } else {
    res.status(200).send({
      response,
    });
  }
});

app.post("/login", (req, res) => {
  const response = schema1.safeParse(req.body);
  res.send({
    response,
  });
});

app.listen(port, () => {
  console.log(`Server started listening on port ${port}`);
});
