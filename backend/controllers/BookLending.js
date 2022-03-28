import BookLending from "../models/BookLendingModel.js";

export const getAllBookLendings = async (req, res) => {
  try {
    const bookLendings = await BookLending.findAll();
    res.json(bookLendings);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getBookLendingById = async (req, res) => {
  try {
    const bookLendings = await BookLending.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(bookLendings[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createBookLending = async (req, res) => {
  try {
    await BookLending.create(req.body);
    res.json({
      message: "BookLending Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateBookLending = async (req, res) => {
  try {
    await BookLending.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "BookLending Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteBookLending = async (req, res) => {
  try {
    await BookLending.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "BookLending Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
