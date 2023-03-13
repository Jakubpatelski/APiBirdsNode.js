const express = require("express")
const app = express()
app.use(express.json())

const birds = [
    {
        id: 1,
name: "Common Greenshank",
description:"The common greenshank (Tringa nebularia) is a wader in the large family Scolopacidae, the typical waders. \
The genus name Tringa is the New Latin name given to the green sandpiper by Aldrovandus in 1599 based on Ancient Greek trungas, a thrush-sized, white-rumped, tail-bobbing wading bird mentioned by Aristotle. \
The specific nebularia is from Latin nebula \"mist\". Like the Norwegian Skoddefoll, this refers to the greenshank's damp marshy habitat.",
imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Greenshank_%28Tringa_nebularia%29.jpg/1920px-Greenshank_%28Tringa_nebularia%29.jpg",
wikipediaUrl: "https://en.wikipedia.org/wiki/Common_greenshank"

    },
    {
        id: 2,
        name: "Bean Goose",
        description: "The bean goose (Anser fabalis or Anser serrirostris) is a goose that breeds in northern Europe and Eurosiberia.  It has two distinct varieties, one inhabiting taiga habitats and one inhabiting tundra. \
        These are recognised as separate species by the American Ornithologists' Union and the IOC (taiga bean goose and tundra bean goose),\
        but are considered a single species by other authorities, such as the British Ornithologists' Union.\
        It is migratory and winters further south in Europe and Asia.",
        "https://media.istockphoto.com/id/509959359/photo/bean-goose.jpg?s=612x612&w=0&k=20&c=xoKjfokGa_uGtbSIvNjyZ3SN8hOaJ2mqkslpxOFqbLo=",
        wikipediaUrl: "https://en.wikipedia.org/wiki/Bean_goose"
    }

   
]



app.get('', (req,res) => {
    res.send(birds)
})

const PORT = 1111
app.listen(PORT, (error) => {
    if (error){
        console.log(error)
        return
    }
    console.log("app runs on port", PORT)
})