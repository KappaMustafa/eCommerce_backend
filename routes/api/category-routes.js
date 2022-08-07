const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    attributes: ["id", "category_name"],
    include:[{ model: Product,
    attributes:['id', "product_name","price","stock", "category_id"]}]
  })
    .then(()=> res.json());
    if(err =>{
    console.error(err)});
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({ where:{id: req.params.id},   
    include:[{ model: Product,
    attributes:['id', "product_name","price","stock", "category_id"]}]
})
  .then(()=> res.json());
  if(err =>{
    console.error(err)});
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.tag_name
  })
  .then(()=> res.json());
  if(err =>{
    console.error(err)});
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body,{
    where: {id: req.params.id}
  })  
  .then(()=> res.json());
  if(err =>{
    console.error(err)});
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
