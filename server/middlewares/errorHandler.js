module.exports = (error, req, res, next) => {
    console.log(error,"error middleware<<<<<<<<<<<<<<<<<<<<<<<")
        let status
        let message
    
        switch (error.name) {
            case 'SequelizeUniqueConstraintError':
                status = 400
                message = 'Email must be unique'
                break;
            case 'email/password required':
                status = 400
                message = 'email/password is required'
                break;
            case 'SequelizeValidationError':
            case 'SequelizeUniqueValidationError':
                status = 400
                message = error.errors[0].message
                break;
            case 'InvalidToken':
            case 'JsonWebTokenError':
                status = 401
                message = 'Invalid Token'
                break;
            case 'Unauthenticated':
                status = 401
                message = 'Unauthenticated'
                break;
            case 'invalid email/password':
                status = 401
                message = 'Invalid email/password'
                break;
            case 'NotFound':
                status = 404
                message = 'Data not found!'
                break;
            default:
                status = 500
                message = 'Internal Server Error'
                break;
        }
    
        res.status(status).json({ message: message })
    }