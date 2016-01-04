var <%= capSchemaName %> = require('../models/<%= lowSchemaName %>');
var _ = require('underscore');


// POST: /api/<%= lowSchemaName %>s
exports.post_<%= lowSchemaName %> = function(req, res){
    // COMPLETE HERE WITH SOMETHING LIKE:
    /*
    var camp_id     = req.body.camp_id;
  	var salary      = req.body.salary;
    */

  var new_<%= lowSchemaName %> = new <%= capSchemaName %>({
    // COMPLETE HERE WITH SOMETHING LIKE:
    /*
    camp_id: camp_id,
		salary: salary,
    */
  });

  var save_error_message = ' > Error while saving the <%= lowSchemaName %> when POSTing it at /api/<%= lowSchemaName %> : >>> ';
  save_<%= lowSchemaName %>_and_send(new_<%= lowSchemaName %>, save_error_message, res);
}

// GET: /api/<%= lowSchemaName %>s/:<%= lowSchemaName %>_id
exports.get_<%= lowSchemaName %> = function(req, res){
  var <%= lowSchemaName %>_id = req.params.<%= lowSchemaName %>_id;

  <%= capSchemaName %>.findById(<%= lowSchemaName %>_id)
         .exec(function(err, <%= lowSchemaName %>) {
           if (err) {
            console.log(err);
            res.send({message: "There was an error doing the query for that <%= lowSchemaName %>"});
           } else if(_.isNull(<%= lowSchemaName %>)){
            res.status(300).send({message: 'The requested <%= lowSchemaName %>_id does not exists in the DB'});
           }
           res.status(200).json(<%= lowSchemaName %>);
  });
}


// ==================================================================
// FUNCTIONS SECTION: functions used in this file can be found below:
// ==================================================================

function save_<%= lowSchemaName %>_and_send(<%= lowSchemaName %>, save_error_message, res){
  <%= lowSchemaName %>.save(function(err, <%= lowSchemaName %>) {
    if (err){
      console.log(save_error_message + err.message);
      res.status(300).send({success: false, message: 'Error while saving <%= lowSchemaName %>. Please try again later.'});
    } else {
      res.status(200).json({success: true, message: '<%= capSchemaName %> created successfully'});
    }
  });
}
