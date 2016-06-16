/**
 * FieldController
 *
 * @description :: Server-side logic for managing fields
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  


  /**
   * `FieldController.index()`
   */
  index: function (req, res) {
    Field.find(function(err,fields){
      if(err)
        return res.send(500,err);
      res.json({model:fields});
    });
  },


  /**
   * `FieldController.show()`
   */
  show: function (req, res) {
    var id=req.param('id');
    Field.findOne(id).populate('entities').exec(function(err,fields){
      if(err)
        return res.send(500,err);
      if(!fields)
        return res.send("fields with given id "+id+"was not found");
      res.view({model:fields});
    });
  },


  /**
   * `FieldController.new()`
   */
  new: function (req, res) {
    Entity.findOne(req.param('holder'),function(err,fields){
     
       if(err)
        return res.send(500,err);
      res.view({model:fields});
    });
  },


  /**
   * `FieldController.create()`
   */
  create: function (req, res) {
    var params=req.params.all();
    Field.create(params,function(err,created_fields){
       if(err)
        return res.send(500,err);

      return res.redirect('/fields/');
    });
  },


  /**
   * `FieldController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `FieldController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `FieldController.destroy()`
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!'
    });
  }
};

