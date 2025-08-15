# API Gateway Configuration for Team J IT Services

This directory contains the API Gateway configuration for the Team J IT Services application.

## Overview

The API Gateway serves as the entry point for our serverless backend, routing requests to the appropriate Lambda functions.

## API Endpoints

### Visitor Counter API

- **Endpoint**: `/api/visitor-count`
- **Method**: GET
- **Description**: Returns the current visitor count
- **Integration**: Lambda function - `visitor_counter`
- **CORS**: Enabled for frontend domain

## Deployment

The API Gateway configuration is deployed using the Infrastructure as Code (IaC) templates located in the `infrastructure/` directory.
