class ApiError extends Error {
    constructor(statusCode, message = 'Something went wrong.', errors = null, data = null, stack = '') {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.errors = errors || null;  // Keep this simple, e.g., just the error message
        this.data = data;
        this.success = false;
        this.timestamp = new Date().toISOString();

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }

    // Error response format method
    toResponse() {
        return {
            success: this.success,
            statusCode: this.statusCode,
            message: this.message,
            errors: this.errors, // Provide the actual error message or details
            data: this.data,
            timestamp: this.timestamp
        };
    }
}

export default ApiError;
