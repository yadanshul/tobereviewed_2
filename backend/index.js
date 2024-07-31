const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs")
const jwt= require("jsonwebtoken")
const secretkeyseller="nvbghr65/nm"
const secretkeyuser="fnkjnjfhr48/v"
const port= 4000;
const powerkey = 15243;
const { v4: uuidv4 } = require('uuid');
app.use(express.json());
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors()) 



const getConnect_users = require('./db_connection_users')
const getConnect_sellers = require('./db_connection_sellers')
const getConnect_courses = require('./db_connection_courses.js')





////////////////reading data of users
// getConnect_users().then((data)=>{
//     console.log(data.find().toArray().then((subdata)=>{
//         console.log(subdata)
//     }))
// })

//or

// async function a(){
//     let data= await getConnect_users()
//     let subdata= await data.find().toArray()
//     console.log(subdata)
// }
// a()
// Using ES Module
const tokengeneratorseller = require('./middlewares.js').tokengeneratorseller;
const tokengeneratoruser = require('./middlewares.js').tokengeneratoruser;
const authenticationjwtseller = require('./middlewares.js').authenticationjwtseller;
const authenticationjwtuser = require("./middlewares.js").authenticationjwtuser;
const sellerAut = require('./middlewares.js').sellerAut;
const userAut = require('./middlewares.js').userAut;

// function tokengeneratoruser(value,secretkey){
//     token = jwt.sign(value,secretkey);
//     return token;
// }
// function tokengeneratorseller(value,secretkey){
//     token = jwt.sign(value,secretkey);
//     return token;
// }
// const sellerAut = async (req,res,next) =>{
//     const { username, password } = req.headers;
//     let sellersdb= await getConnect_sellers()
//     const admin = sellersdb.find({ "username": username ,"password":password })
//     if(admin){
//         next();
//     }else{
//         res.status(403).json({message:'admin authentication failed'})
//     }

// }
// const authenticationjwtseller=(req,res,next)=>{
//     const authtoken = req.headers.authorization;
//     if(authtoken){
//         const token = authtoken.split(" ")[1];
//         //console.log(token)
//         jwt.verify(token,secretkeyseller,(err,iddata)=>{
//             if(err){
//                 return res.send({message:'user authentication failed'})
//             }else{
//                 req.id = iddata;
//                 console.log(req.id);
                
//                 next();
//             }
            
//         })
//     }else {
//         res.send({ message: 'Authorization header missing' });
//     }
// }





// app.post("/seller/signup",async (req,res)=>{
//     let seller_recived = req.body;
//     let sellername= seller_recived.username
//     console.log(sellername);
//     let masterkey  = seller_recived.masterkey
//     if(masterkey != powerkey){
//         res.json({message:"invalid masterkey"});
//         return;
//     }
//     let sellersdb= await getConnect_sellers()
//     const sellerExis = await sellersdb.findOne({ "name": sellername })
//     if (sellerExis) {
//         res.status(403).json({message:"seller already exist"});
//     }else{
//         const sellerid = uuidv4();
//         const seller={"name":seller_recived.username,"password":seller_recived.password,"age":seller_recived.age,"sellerId":sellerid,t:"s"}
//         let token = tokengeneratorseller(sellerid,secretkeyseller);
//         await sellersdb.insertOne(seller)
//         res.json({message:"seller created",authtoken: token, id:sellerid ,name:sellername,t:"s"});
//     }
// });
app.post("/seller/signup", async (req, res) => {
    try {
        let seller_recived = req.body;
        let sellername = seller_recived.username; // Normalize username
        console.log(`Received username: ${sellername}`);
        let masterkey = seller_recived.masterkey;
        
        if (parseInt(masterkey) !== powerkey) {
            res.json({ message: "invalid masterkey" });
            return;
        }
        
        let sellersdb = await getConnect_sellers();
        const sellerExis = await sellersdb.findOne({ "name": sellername });
        console.log(`Seller exists check: ${sellerExis}`);

        if (sellerExis !== null) {
            console.log("oooo")
            res.status(403).json({ message: "seller already exist" });
        } else {
            const sellerid = uuidv4();
            const seller = {
                "name": sellername,
                "password": seller_recived.password,
                "age": seller_recived.age,
                "sellerId": sellerid,
                "t": "s"
            };
            let token = tokengeneratorseller(sellerid, secretkeyseller);
            await sellersdb.insertOne(seller);
            res.json({ message: "seller created", authtoken: token, id: sellerid, name: sellername, t: "s" });
        }
    } catch (error) {
        console.error('Error during seller signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post("/seller/login", sellerAut, async (req, res) => {
    let sellersdb = await getConnect_sellers();
    const username = req.headers.username;
    const password = req.headers.password;
    
    let seller = await sellersdb.findOne({ "name": username, "password": password });

    if (seller) {
        const sellerid = seller.sellerId;
        console.log(seller);
        console.log(seller.sellerId);
        const token = tokengeneratorseller(seller.sellerId, secretkeyseller);
        res.json({ message: "logged in successfully", authtoken: token, id: sellerid, name: username, t: "s" });
    } else {
        console.log(seller);
        res.status(401).json({ message: "Invalid credentials" });
    }
});














app.post("/user/signup",async (req,res)=>{
    let user_recived = req.body;
    let username= user_recived.username;
    let usersdb= await getConnect_users();
    const userExist = await usersdb.findOne({ "name": username });
    if (userExist) {
        res.status(403).json({message:"user already exist"});
    }else{
        const userid = uuidv4();
        const user={"name":username,"password":user_recived.password,"queries":[],"age":user_recived.age,"userId":userid,t:"u"}
        let token = tokengeneratorseller(userid,secretkeyuser);
        await usersdb.insertOne(user)
        res.json({message:"user created",authtoken: token, id:userid ,name:username,t:"u"});
    }
});

app.post("/user/login", userAut, async (req, res) => {
    let usersdb = await getConnect_users();
    const username = req.headers.username;
    const password = req.headers.password;
    
    let user = await usersdb.findOne({ "name": username, "password": password });

    if (user) {
        const userid = user.userId;
        console.log(user);
        console.log(user.userId);
        const token = tokengeneratorseller(user.userId, secretkeyuser);
        res.json({ message: "logged in successfully", authtoken: token, id: userid, name: username, t: "u" });
    } else {
        console.log(user);
        res.status(401).json({ message: "Invalid credentials" });
    }
});


app.get("/user/queries", authenticationjwtuser, async (req, res) => {
    try {
        const userid = req.id;
        console.log(req.id);

        let usersdb = await getConnect_users();
        const user = await usersdb.findOne({ userId: userid });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Assuming queries is an array
        console.log(user.queries)
        res.json({ queries: user.queries || [] });
    } catch (error) {
        console.error("Error fetching queries:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});



app.post("/user/queries", authenticationjwtuser, async (req, res) => {
    var userid = req.id;
    console.log(req.id);
    const querryid = uuidv4();
    try {
        const body = req.body;
        const querry = {
            "name": body.name,
            "company": body.company,
            "email": body.email,
            "location": body.location,
            "querry": body.querry,
            "querryid": querryid,
            "status": "Pending",
        };
        console.log(body.name)

        let usersdb = await getConnect_users(); // Assume this returns the MongoDB collection
        console.log(userid+"+++++")
        const updateResult = await usersdb.updateOne(
            { userId: userid },
            { $push: { queries: {querry} } }
        );

        let queriesdb= await getConnect_courses()
        await queriesdb.insertOne(querry)

        if (updateResult.modifiedCount === 1) {
            console.log('Query added successfully');
            res.json( {message: "query sent"} );
        } else {
            console.log('User not found or query not added');
            res.json({ message: "User not found or query not added" });
        }
    } catch (error) {
        console.log(error);
        if (!res.headersSent) {
            res.json({ "message": "failed to push query" });
        }
    }
});









/////////////////////////

app.post("/queries", async (req, res) => {
   
    const querryid = uuidv4();
    try {
        const body = req.body;
        const querry = {
            "name": body.name,
            "company": body.company,
            "email": body.email,
            "location": body.location,
            "querry": body.querry,
            "querryid": querryid,
            "status": "Pending",
        };
        console.log(body.name)

       

        let queriesdb= await getConnect_courses()
        let result = await queriesdb.insertOne(querry)

        if (result.acknowledged === true) {
            console.log('Query added successfully');
            res.json( {message: "query sent"} );
        } else {
            res.json({ message: "query not added" });
        }
    } catch (error) {
        console.log(error);
        if (!res.headersSent) {
            res.json({ "message": "failed to push query" });
        }
    }
});





app.get("/queries/",async (req,res)=>{ //no auth required as this data will be displayed on generic home page
    let coursesdb= await getConnect_courses()
    let courses = await coursesdb.find({}).toArray()
    
    console.log("----------------------------------------------")
    console.log(courses)
    console.log("----------------------------------------------")
    res.send({"courses":courses})

});




app.get("/home/",async (req,res)=>{ //no auth required as this data will be displayed on generic home page
    
    res.send({"status":"ok"})

});

function started() {
    console.log(`Server is running at http://localhost:${port}`);
}

 app.listen(port, started);
