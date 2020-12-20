const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51I01DGGmUCum14StX8uvSvBJTpYBOobxAALcu7ruBrOAnnILZ85Cbq2M2yh5lwQOOPxZvHi7fDMfNQjlOi35Q7rs00YPFzYufR"
);

// API   

//- Api config

const app =express();

//- Midlleware

app.use(cors({origin:true}));
app.use(express.json());

//-API Routes

app.get("/",(request,response) =>{
    response.status(200).send("hello world")
})


app.post("/payments/create", async (request,response) =>{
    const total = request.query.total;

    console.log("Payment Requests Recieved!! for this amount >>>.",total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total, // subunits of currency
        currency:"inr",

    });
    // OK- Created payment
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})

//- Listen Command


exports.api = functions.https.onRequest(app)

// example endpoint
// http://localhost:5001/clone-10fad/us-central1/api
