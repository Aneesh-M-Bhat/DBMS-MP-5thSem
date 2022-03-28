import Authors from "../models/AuthorsModel.js";

export const getAllAuthors = async (req, res) => {
  try {
    const authors = await Authors.findAll();
    res.json(authors);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getAuthorById = async (req, res) => {
  try {
    const authors = await Authors.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(authors[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createAuthor = async (req, res) => {
  try {
    await Authors.create(req.body);
    res.json({
      message: "Author Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateAuthor = async (req, res) => {
  try {
    await Authors.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Author Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteAuthor = async (req, res) => {
  try {
    await Authors.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Author Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
