//const { use } = require('react');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  // #swagger.tags = ['Users']
  try {
  const result = await mongodb
      .getDb()
      .db()
      .collection('professional')
      .find()
      .toArray();

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  };

const getSingle = async (req, res) => {
  // #swagger.tags = ['Users']
  const professionalId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('professional')
    .findOne({ _id: professionalId });

  res.status(200).json(result);
};
// Implementation for creating a professional
const createProfessional = async (req, res) => {
  // #swagger.tags = ['Users']
  const professional = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('professional')
    .insertOne(professional);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the professional.');
  }
};
// Implementation for updating a professional
const updateProfessional = async (req, res) => {
  // #swagger.tags = ['Users']
 const professionalId = new ObjectId(req.params.id);
 const professional = {
   firstName: req.body.firstName,
   lastName: req.body.lastName,   
   email: req.body.email,
   favoriteColor: req.body.favoriteColor,
   birthday: req.body.birthday,
 };
 const response = await mongodb.getDb()
   .db()
   .collection('professional')
   .replaceOne({ _id: professionalId }, professional);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the professional.');
  }
}; 
// Implementation for deleting a professional              
const deleteProfessional = async (req, res) => {
  // #swagger.tags = ['Users']
  const professionalId = new ObjectId(req.params.id);
  const response = await mongodb.getDb()
    .db()
    .collection('professional')
    .deleteOne({ _id: professionalId });
  console.log(response);  
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the professional.');
  }
}



module.exports = { getAll, 
  getSingle,
  createProfessional,
  updateProfessional,
  deleteProfessional
 };