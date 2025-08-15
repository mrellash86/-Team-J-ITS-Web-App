/**
 * AWS Lambda function for counting website visitors
 * 
 * This function increments a visitor counter in DynamoDB and returns the current count.
 */

// AWS SDK for interacting with DynamoDB
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// Table name for visitor counter
const TABLE_NAME = 'visitor-counter';
const COUNTER_ID = 'website-visitors';

/**
 * Lambda handler function
 */
exports.handler = async (event) => {
    try {
        // Set CORS headers
        const headers = {
            'Access-Control-Allow-Origin': '*', // In production, restrict to your domain
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
        };
        
        // Handle OPTIONS request (CORS preflight)
        if (event.httpMethod === 'OPTIONS') {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({})
            };
        }
        
        // Update counter in DynamoDB
        const result = await updateVisitorCounter();
        
        // Return the current count
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ count: result.count })
        };
    } catch (error) {
        console.error('Error processing request:', error);
        
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ 
                error: 'Internal Server Error',
                message: error.message 
            })
        };
    }
};

/**
 * Updates the visitor counter in DynamoDB
 * @returns {Promise<Object>} Object containing the updated count
 */
async function updateVisitorCounter() {
    // Attempt to increment the counter
    try {
        const params = {
            TableName: TABLE_NAME,
            Key: { id: COUNTER_ID },
            UpdateExpression: 'SET #count = if_not_exists(#count, :start) + :increment',
            ExpressionAttributeNames: {
                '#count': 'count'
            },
            ExpressionAttributeValues: {
                ':increment': 1,
                ':start': 0
            },
            ReturnValues: 'UPDATED_NEW'
        };
        
        const result = await dynamoDB.update(params).promise();
        return { count: result.Attributes.count };
    } catch (error) {
        // If the table doesn't exist, return a default value
        if (error.code === 'ResourceNotFoundException') {
            console.warn('Table does not exist. Creating a mock count.');
            return { count: 1 };
        }
        
        throw error;
    }
}
