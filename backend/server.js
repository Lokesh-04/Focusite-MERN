import express from "express";
import cors from "cors";

const port = 3000;
const app = express();

const DATA = [
  {   
    id: 1, 
    name: "John Doe", 
    music:[

    ],
    timer:[

    ],
    notes:[
      {
        id: 1,
        note: "this is the note",
      },
      {
        id: 2,
        note: "this is the note",
      },
    ],
  },
]



app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("venu and avinash lets complete this project 🔥");
});

app.post("/timersettings", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
