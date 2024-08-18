const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port= 4000;
const path = require('path');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');
app.use(express.json());
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors()) 
app.use('/static', express.static(path.join(__dirname, 'images')));


//   rhpz shve aepl zcix
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'gafrontspace@gmail.com',
        pass: 'rhpzshveaeplzcix'
     
    }
});
async function sendMail(to, subject, html) {
    const mailOptions = {
        from: 'gafrontspace@gmail.com',  // Replace with your email address
        to: to,
        subject: subject,
        // text: text,
        html: html
    };
    const i=null;
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error sending email:', error);
        }
        console.log('Email sent:', info.response);
        i=info.response;
        
    });
    return i;
}






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
        var s= sendMail('abhayryadav0007@gmail.com',`webquerry from ${body.email } , name - ${body.name} ` ,  
           `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; text-align: center; max-width: 600px; margin: 40px auto; padding: 20px; border-radius: 20px; box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); background-color: #f9f9f9;">
                    <!-- Header Image -->
                    <div style="margin-bottom: 10px; border-radius: 20px; height:auto; overflow: visible;">
                        <img src="https://images.pexels.com/photos/750839/pexels-photo-750839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Company Logo" style="width: 100%; height: auto;  border-radius: 20px;">
                    </div>
                    <h1 style="color: #333; margin-bottom: 20px; padding: 5px; font-size: 24px;">New Query Received</h1>
                    <p style="font-size: 18px; color: #555; margin-bottom: 10px;">Dear Team,</p>
                    <p style="font-size: 16px; color: #555; margin-bottom: 20px;">
                        You have received a new query from <strong>${body.name}</strong> at <strong>${body.company}</strong>.
                    </p>
                    <h3 style="color: #333; font-size: 20px; margin-top: 20px; margin-bottom: 15px;">Query Details</h3>
                    <ul style="list-style-type: none; padding: 0; text-align: left; margin: auto; display: inline-block; text-align: center; font-size: 16px; color: #555;">
                        <li style="margin-bottom: 10px; color: #404040;"><strong>Name:</strong> ${body.name}</li>
                        <li style="margin-bottom: 10px; color: #404040;"><strong>Email:</strong> ${body.email}</li>
                        <li style="margin-bottom: 10px; color: #404040;"><strong>Company:</strong> ${body.company}</li>
                        <li style="margin-bottom: 10px; color: #404040;"><strong>Location:</strong> ${body.location}</li>
                        <li style="margin-bottom: 10px; color: #404040;"><strong>Query:</strong> ${body.querry}</li>
                        <li style="margin-bottom: 10px; color: #404040;"><strong>Query ID:</strong> ${querryid}</li>
                    </ul>
                    <p style="font-size: 16px; color: #555; margin-top: 30px;">
                        Please review and respond to the query at your earliest convenience.
                    </p>
                    <p style="font-size: 16px; color: #555; margin-top: 20px;">
                        Best Regards,<br><strong>Your Web Support</strong>
                    </p>
                </div>
            `
            )
       
       

            if(s){
                console.log(s +  ".....s");
              res.json( {message: "query sent"} );  
            }else{
                res.json({ message: "query not added" });
            }
            
        
    } catch (error) {
        console.log(error);
        if (!res.headersSent) {
            res.json({ "message": "failed to push query" });
        }
    }
});



function started() {
    console.log(`Server is running at http://localhost:${port}`);
}

 app.listen(port, started);
