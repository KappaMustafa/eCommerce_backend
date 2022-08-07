const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { findOne } = require('../../models/ProductTag');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    attributes: ["id", "tag_name"],
    include:[{ model: Product,
    attributes:['id', "product_name","price","stock", "category_id"]}]
  })
    .then(()=> res.json());
    if(err =>{
    console.error(err)});
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({ where:{id: req.params.id},   
    include:[{ model: Product,
    attributes:['id', "product_name","price","stock", "category_id"]}]
})
  .then(()=> res.json());
  if(err =>{
    console.error(err)});

});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(()=> res.json());
  if(err =>{
    console.error(err)});
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body,{
    where: {id: req.params.id}
  })  
  .then(()=> res.json());
  if(err =>{
    console.error(err)});
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
