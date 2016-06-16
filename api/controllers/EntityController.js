/**
 * EntityController
 *
 * @description :: Server-side logic for managing entities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  


  /**
   * `EntityController.index()`
   */
  index: function (req, res) {
    Entity.find()
    .populate("fields") 
    .exec(function(err,entities){
      if(err)
        return res.send(500,err);
      res.json({model:entities});
    });
  },


  /**
   * `EntityController.show()`
   */
  show: function (req, res) {
    var id=req.param('id');
    Entity.findOne(id,function(err,entities){
      
      if(err)
        return res.send(500,err);
      if(!entities)
        return res.send("entities with given id "+id+"was not found");
      res.view({model:entities});
    });
  },


  /**
   * `EntityController.new()`
   */
  new: function (req, res) {
    Tenent.findOne(req.param('owner'),function(err,tenents){
      if(err)
        return res.send(500,err);

    
    return res.view({model:tenents});
    });
  },


  /**
   * `EntityController.create()`
   */
  create: function (req, res) {
    var params=req.params.all();
    Entity.create(params,function(err,created_entities){
       if(err)
        return res.send(500,err);

      return res.redirect('/entities/'+created_entities.id);
    });
  },


  /**
   * `EntityController.edit()`
   */
  edit: function (req, res) {
    var id=req.param('id');
    Entity.findOne()
  },


  /**
   * `EntityController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `EntityController.destroy()`
   */
   
  destroy: function (req, res) {
    var id=req.param('id');

    Entity.destroy(id,function(err){
      if(err)
        return res.send(500,err);
      return res.redirect('/entities');
    });
  }
};

