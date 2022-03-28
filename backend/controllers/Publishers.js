import Publishers from "../models/PublishersModel.js";

export const getAllPublishers = async (req, res) => {
  try {
    const publishers = await Publishers.findAll();
    res.json(publishers);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getPublisherById = async (req, res) => {
  try {
    const publisher = await Publishers.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(publisher[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createPublisher = async (req, res) => {
  try {
    await Publishers.create(req.body);
    res.json({
      message: "Publisher Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updatePublisher = async (req, res) => {
  try {
    await Publishers.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Publisher Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deletePublisher = async (req, res) => {
  try {
    await Publishers.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Publisher Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
