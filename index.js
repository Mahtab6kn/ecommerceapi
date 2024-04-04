const express=require("express")
require('./src/config/db.js')
require('dotenv').config()

const cors=require('cors');

const app=express();
const PORT= process.env.PORT || 5454;


app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    return res.status(200).send({message:"welcome to ecommerce api - node"})
})

const authRouter=require("./src/routes/auth.routes.js")
app.use("/auth",authRouter)

const userRouter=require("./src/routes/user.routes.js");
app.use("/api/users",userRouter)

const productRouter=require("./src/routes/product.routes.js");
app.use("/api/products",productRouter);

const adminProductRouter=require("./src/routes/product.admin.routes.js");
app.use("/api/admin/products",adminProductRouter);

const cartRouter=require("./src/routes/cart.routes.js")
app.use("/api/cart", cartRouter);

const cartItemRouter=require("./src/routes/cartItem.routes.js")
app.use("/api/cart_items",cartItemRouter);

const orderRouter=require("./src/routes/order.routes.js");
app.use("/api/orders",orderRouter);

const paymentRouter=require("./src/routes/payment.routes.js");
app.use('/api/payments',paymentRouter)

const reviewRouter=require("./src/routes/review.routes.js");
app.use("/api/reviews",reviewRouter);

const ratingRouter=require("./src/routes/rating.routes.js");
app.use("/api/ratings",ratingRouter);

// admin routes handler
const adminOrderRoutes=require("./src/routes/adminOrder.routes.js");
app.use("/api/admin/orders",adminOrderRoutes);


app.listen(PORT, ()=>{
    console.log("ecommerce api listing on port ",PORT)
})

// module.exports={app};