const express=require("express");
const bookcontroller=require("../controller/bookcontroller")
const router=express.Router();



router.post("/add-book",bookcontroller.AddBook)
router.get("/all",bookcontroller.getAllBook)
router.get("/get-by-id/:id",bookcontroller.getBookByID)
router.put("/update-book/:id",bookcontroller.updateBook)
router.delete("/delete-book/:id",bookcontroller.DeleteBook)

module.exports=router;