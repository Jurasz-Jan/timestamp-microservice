import express from "express";
import { Antique } from "../models/antiqueModel.js";

const router = express.Router();


router.post('/', async (request, response) => {
    try {
      if (
            !request.body.itemName||
            !request.body.origin||
            !request.body.age||
            !request.body.condition||
            !request.body.price
      ) {
        return response.status(400).send({
        message: 'Send all required fields: name, origin,age,condition,price',
        });
      }
      const newAntique = {
        itemName:request.body.itemName,
        origin:request.body.origin,
        age:request.body.age,
        condition:request.body.condition,
        price:request.body.price,  };
  
      const antique = await Antique.create(newAntique);
  
      return response.status(201).send(antique);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
});
  
router.get('/', async (request, response) => {
    try {
      const antiques = await Antique.find({});
  
      return response.status(200).json({
        count:antiques.length,
        data: antiques,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });


  router.get('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const antique = await Antique.findById(id);
  
      return response.status(200).json(antique);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });


  router.put('/:id', async (request, response) => {
    try {
      if (
            !request.body.itemName||
            !request.body.origin||
            !request.body.age||
            !request.body.condition||
            !request.body.price
      ) {
        return response.status(400).send({
            message: 'Send all required fields: name, origin,age,condition,price',
        });
      }
  
      const { id } = request.params;
  
      const result = await Antique.findByIdAndUpdate(id, request.body);
  
      if (!result) {
        return response.status(404).json({ message: 'Item not found' });
      }
  
      return response.status(200).send({ message: 'Item updated successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });  

  router.delete('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const result = await Antique.findByIdAndDelete(id);
  
      if (!result) {
        return response.status(404).json({ message: 'Item not found' });
      }
  
      return response.status(200).send({ message: 'Item deleted successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });





export default router;