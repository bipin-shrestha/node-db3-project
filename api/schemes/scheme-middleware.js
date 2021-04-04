const db = require('./scheme-model.js');

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  try{
    const scheme = await db.findById(req.params.scheme_id);
    const scheme_id = req.params.scheme_id;
    if(scheme.length > 0) {
      next(); 
    } else {
      res.status(404).json({error:`scheme with scheme_id ${scheme_id} not found`})
    }
  } 
  catch(error){
    res.status(500).json({error:error.message});
  }
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  const scheme = req.body.scheme_name;
try {      
    if(scheme !== 'undefined' || scheme !== '' || scheme == 'string'){
      next();
    } else {
      res.status(400).json({ "message": "invalid scheme_name"})
    }
}
catch(error){
  res.status(500).json({error:error.message});
}
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  const instruction = req.body.instructions;
  const stepNumber = req.body.step_number;
  if(instruction !== 'undefined' || instruction !== '' || typeof instruction == 'string' || typeof stepNumber !== 'number'|| stepNumber > 0 ){
    next();
  } else {
    res.status(400).json({  "message": "invalid step" })
  }
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
