const Product = require("../models/productModel");

const createNotification = function (req, res) {
    const receivedToken = req.body.fcmToken;
  
  const message = {
    notification: {
      title: "Notif",
      body: 'This is a Test Notification'
    },
    token: "f-k_MI6TTCuDGUnYlWUIhT:APA91bFhhEFRLsQVJ_jj3eMXN9-6-_CQk1b3ZJiRN_ab7n0DzBDz2wspZ6bFL057dhnBbrYuwGkB2Z7_PuDYKLW_GXyVBnXsZCqLS5lRQxw_gdcVD6nyt0lpPEmV18NSzE0ZU62wf4pN",
  };
  
  getMessaging()
    .send(message)
    .then((response) => {
      res.status(200).json({
        message: "Successfully sent message",
        token: receivedToken,
      });
      console.log("Successfully sent message:", response);
    })
    .catch((error) => {
      res.status(400);
      res.send(error);
      console.log("Error sending message:", error);
    });
  
   
  };

//   const getProducts = async (req, res) => {
//     try {
//       const products = await Product.find();
//       res.status(200).json(products);
//     } catch (error) {
//       res.status(500).json({ msg: error.message });
//     }
//   };

//   const getProduct = async (req, res) => {
//     try {
//       const { id } = req.params;
//       const product = await Product.findById(id);
//       res.status(200).json(product);
//       if (!product) {
//         res.status(404).json(`No Product with id: ${id}`);
//       }
//     } catch (error) {
//       res.status(500).json({ msg: error.message });
//     }
//   };

//   const updateProduct = async (req, res) => {
//     try {
//       const { id } = req.params;
//       const product = await Product.findByIdAndUpdate({ _id: id }, req.body, {
//         new: true,
//         runValidators: true,
//       });
  
//       if (!product) {
//         return res.status(404).json(`No Product with id: ${id}`);
//       }
      
//       res.status(200).json(product);
//     } catch (error) {
//       res.status(500).json({ msg: error.message });
//     }
//   };

//   const deleteProduct = async (req, res) => {
//     try {
//       const { id } = req.params;
//       const product = await Product.findByIdAndDelete(id);
//       res.status(200).send("Product Deleted");
//       if (!product) {
//         return res.status(404).json(`No Product with id: ${id}`);
//       }
//     } catch (error) {
//       res.status(500).json({ msg: error.message });
//     }
//   };


  module.exports = {
    createNotification
   
  };