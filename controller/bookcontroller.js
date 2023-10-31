const Book=require('../models/Book')
const mongoose=require('mongoose')


async function AddBook (req,res){
    try {
        if(req.body.title && req.body.author && req.body.summary){
           const {title,author,summary}=req.body
          const newbook=new Book({
            title,author,summary
          })
          const result=await newbook.save();
          if(result){
              res.status(200).send({message:"Book added successfully"})
          }
          else{
              res.status(400).send({message:"Book not added"})
          }  
        }
        else{
            res.status(400).send({message:"Please enter all the fields"})
        }

    } catch (error) {
        res.status(500).send(error)
    }
}

async function getAllBook (req,res){
    try {
        const AllBooks=await Book.find()
        res.status(200).send(AllBooks) 
        }
    catch (error) {
        res.status(500).send(error)
    }
}

async function getBookByID (req,res){
    try {
        let id =new mongoose.Types.ObjectId(req.params.id);
        const Books=await Book.findById(id)
        if(Books){
            res.status(200).json(Books)
        }
        else{
            res.status(400).message("Book not found")
        }
        }
    catch (error) {
        console.log(error);
    }
}


async function updateBook (req,res){
    try {
        let id =new mongoose.Types.ObjectId(req.params.id);
        const Books=await Book.findById(id)
        if(Books){
            const {summary}=req.body
            Books.summary=summary
            const result=await Books.save()
            if(result){
                res.status(200).send({message:"Book updated successfully"});
        }
        else{
            res.status(400).message("Book not found")
        }
    }
}
    catch (error) {
        console.log(error);
    }
}

async function DeleteBook (req,res){
    try {
        let id =new mongoose.Types.ObjectId(req.params.id);
        const Books=await Book.findById(id)
        if(Books){
           
            const result=await Books.deleteOne(id)
            if(result){
                res.status(200).send({message:"Book deleted successfully"});
        }
        else{
            res.status(400).message("Book not found")
        }
    }
}
    catch (error) {
        console.log(error);
    }
}


module.exports={AddBook,getAllBook,getBookByID,updateBook,DeleteBook}