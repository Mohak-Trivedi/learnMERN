export const validate = (schema) => {
  // return a validator middleware
  return async (req, res, next) => {
    try {
      console.log(req.body);
      schema.parse(req.body); // Check if req.body follows the defined schema
      next();
    } catch (error) {
      return res.status(400).json({
        error: error.errors, // error object thrown by zod has errors property
        success: false,
        message: "Validation failed",
      });
    }
  };
};
