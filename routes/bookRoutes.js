const express=require("express");
const bookcontroller=require("../controller/bookcontroller")
const router=express.Router();


/**
 * @swagger
 * /books/add-book:
 *   post:
 *     summary: Add a new book.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               summary:
 *                 type: string
 *     responses:
 *       200:
 *         description: Book added successfully
 *       400:
 *         description: Book not added
 */


/**
 * @swagger
 * /books/all:
 *   get:
 *     summary: Get a list of all books.
 *     responses:
 *       200:
 *         description: List of all books
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /books/get-by-id/{id}:
 *   get:
 *     summary: Get a book by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the book
 *     responses:
 *       200:
 *         description: Book found
 *       400:
 *         description: Book not found
 */

/**
 * @swagger
 * /books/update-book/{id}:
 *   put:
 *     summary: Update a book's summary.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               summary:
 *                 type: string
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       400:
 *         description: Book not found
 */

/**
 * @swagger
 * /books/delete-book/{id}:
 *   delete:
 *     summary: Delete a book by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the book
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *       400:
 *         description: Book not found
 */


router.post("/add-book",bookcontroller.AddBook)
router.get("/all",bookcontroller.getAllBook)
router.get("/get-by-id/:id",bookcontroller.getBookByID)
router.put("/update-book/:id",bookcontroller.updateBook)
router.delete("/delete-book/:id",bookcontroller.DeleteBook)

module.exports=router;