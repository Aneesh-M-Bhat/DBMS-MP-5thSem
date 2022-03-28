import BookCopies from "../models/BookCopiesModel.js";

export const getAllBookCopies = async (req, res) => {
  try {
    const bookCopies = await BookCopies.findAll();
    res.json(bookCopies);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getBookCopyById = async (req, res) => {
  try {
    const bookCopies = await BookCopies.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(bookCopies[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createBookCopy = async (req, res) => {
  try {
    await BookCopies.create(req.body);
    res.json({
      message: "BookCopy Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateBookCopy = async (req, res) => {
  try {
    await BookCopies.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "BookCopy Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteBookCopy = async (req, res) => {
  try {
    await BookCopies.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "BookCopy Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
