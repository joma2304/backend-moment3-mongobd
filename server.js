// Webbtjänst med mongodb och express

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//Starta express 
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//Variabel för atlas connection
const uri = process.env.MONGODB_URI;

//Anslut till mongodb
mongoose.connect(uri).then(() => {
    console.log("Ansluten till MongoDB");
}).catch((error) => {
    console.log("Fel vid anslutning till databas: " + error);
})

//Schema för erfarenhet
const ExperienceSchema = new mongoose.Schema({
    jobtitle: {
        type: String, required: [true, "Du måste skicka med jobtitel"]
    },
    companyname: {
        type: String,
        required: [true, "Du måste skicka med företagsnamn"] //validering
    },
    location: {
        type: String,
        required: [true, "Du måste skicka med plats"] //validering
    },
    description: {
        type: String,
        required: [true, "Du måste skicka med beskrivning av arbetet"] //validering
    }
});

const Experience = mongoose.model("Experience", ExperienceSchema);

//Routes 
app.get("/api", async (req, res) => {

    res.json({ message: "Välkommen till detta API" });
});

//Hämta erfarenhet
app.get("/experience", async (req, res) => {
    try {
        let result = await Experience.find({});
        return res.json(result);

    } catch (error) {
        return res.status(500).json(error);
    }
});

//Lägga till erfarenhet
app.post("/experience", async (req, res) => {
    try {
        let result = await Experience.create(req.body);

        return res.json(result);
    } catch (error) {
        return res.status(400).json(error);
    }
});

// Uppdatera erfarenhet
app.put("/experience/:id", async (req, res) => {
    try {
        let result = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!result) {
            return res.status(404).json({ message: "Erfarenheten hittades inte" });
        }
        return res.json(result);
    } catch (error) {
        return res.status(400).json(error);
    }
});

// Ta bort erfarenhet
app.delete("/experience/:id", async (req, res) => {
    try {
        let result = await Experience.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: "Erfarenheten hittades inte" });
        }
        return res.json({ message: "Erfarenheten har tagits bort" });
    } catch (error) {
        return res.status(400).json(error);
    }
});


app.listen(port, () => {
    console.log("Server running on port: " + port);
});