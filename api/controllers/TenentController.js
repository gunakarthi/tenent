/**
 * TenentController
 *
 * @description :: Server-side logic for managing tenents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  


  /**
   * `TenentController.index()`
   */
  index: function (req, res) {
    Tenent.find()
    // .populate('fields')
    .populateAll()
    .exec(function(err,tenents){
      if(err)
        return res.send(500,err);
      res.json({model:tenents});
    });
  },


  /**
   * `TenentController.show()`
   */
  show: function (req, res) {
    var id=req.param('id');
    Tenent.findOne(id).populate('entities').exec(function(err,tenents){
      if(err)
        return res.send(500,err);
      if(!tenents)
        return res.send("tenents with given id "+id+"was not found");
      res.view({model:tenents});
    });
  },


  /**
   * `TenentController.new()`
   */
  new: function (req, res) {
    return res.view();
  },


  /**
   * `TenentController.create()`
   */
  create: function (req, res) {
    var params=req.params.all();
    Tenent.create(params,function(err,created_tenents){
       if(err)
        return res.send(500,err);

      return res.redirect('/tenents/'+created_tenents.id);
    });
  },


  /**
   * `TenentController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `TenentController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `TenentController.destroy()`
   */
  destroy: function (req, res) {
    var id=req.param('id');

    Tenent.destroy(id,function(err){
      if(err)
        return res.send(500,err);
      return res.redirect('/tenents');
    });
  }
};

