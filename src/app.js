
//hbs

app.set('view engine', 'hbs');
const viewsDirectory=path.join(__dirname,"../Temp1/views")
app.set("views",viewsDirectory)

///////////////////////////////////
var hbs=require('hbs')
  
const partialsPath=path.join(__dirname,"../Temp1/partials")

hbs.registerPartials(partialsPath)

//////////////////////////
app.get ('/' , (req,res) => {
    res.render('index' , {
        title : "HOME",
        desc : "This is home page"
    })
})

app.get ('/service' , (req,res) => {
    res.render('service' , {
        title : "SERVICE",
        name: "hamza",
        city:"Cairo",
        age: 15,
        img1: "images/trainer-3.jpg"
    })
})


app.get ('/team' , (req,res) => {
    res.render('team' , {
        title : "TEAM",
        name: "shimaa",
        city:"alex",
        age: 20,
       img2: "images/trainer-2.jpg"
    })
})



app.get ('/aboutus' , (req,res) => {
    res.render('aboutus' , {
        title : "aboutus",
        desc : "This is about us page"
       
       
    })
})

app.get ('/sections' , (req,res) => {
    res.render('sections' , {
        title : "sections",
        desc : "This is sections page"
       
       
    })
})


  

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////


