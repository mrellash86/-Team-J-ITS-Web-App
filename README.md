# Team J IT Services Web Application

## 🎯 Project Overview

This repository contains our 4-week capstone project to design and deploy a real-world cloud-based web application for an IT services business. Our application showcases cloud architecture best practices, serverless backends, infrastructure-as-code, and CI/CD automation.

### Core Components

- 🌐 **Static Website Hosting** - HTML/CSS/JS resume site hosted on S3
- 🔢 **Visitor Counter** - Interactive counter using DynamoDB and Lambda functions
- 🔧 **Infrastructure-as-Code** - AWS resources managed through Terraform/CloudFormation
- 🚀 **CI/CD Pipeline** - Automated deployments using GitHub Actions
- 🔒 **Security & Networking** - DNS, HTTPS, Security Groups, and monitoring
- 👥 **Team Info Page** - Information about our team members with GitHub profile links

## 👥 Team Roles

| Role | Responsibility | Team Member |
|------|----------------|-------------|
| 🧑‍💼 **Cloud Architect / Team Lead** | Architecture planning, cost tracking, documentation, presentations |Ell Ash https://github.com/mrellash86 |
| 🧑‍🎨 **App & Front-End Specialist** | HTML/CSS site, JS visitor counter, GitHub profile links |Ell Ash https://github.com/mrellash86 |
| ⚙️ **DevOps & Backend Engineer** | Lambda functions, DynamoDB integration, IaC, CI/CD pipelines |Ell Ash https://github.com/mrellash86 |
| 🔐 **Security & Network Engineer** | DNS, SSL/HTTPS, Security Groups, monitoring & alerting |Ell Ash https://github.com/mrellash86 |

## 🏗️ Architecture

Our application uses AWS services to create a scalable, secure, and cost-effective solution:

```
                            ┌─────────────┐
                            │   Route 53  │
                            │    (DNS)    │
                            └──────┬──────┘
                                   │
                                   ▼
┌─────────────┐            ┌─────────────┐
│ GitHub      │            │ CloudFront  │
│ Actions     ├─────────►  │   (CDN)     │◄────┐
│ (CI/CD)     │            │ + SSL/TLS   │     │
└─────────────┘            └──────┬──────┘     │
      │                           │            │
      │                           ▼            │
      │                    ┌─────────────┐     │
      └──────────────────►│  S3 Bucket   │     │
      │                   │(Static Site) │     │
      │                   └─────────────┘     │
      │                                       │
      │                    ┌─────────────┐    │
      └──────────────────►│ API Gateway  ├────┘
      │                   └──────┬──────┘
      │                          │
      │                          ▼
      │                   ┌─────────────┐
      └──────────────────►│   Lambda    │
                          │ Functions   │
                          └──────┬──────┘
                                 │
                                 ▼
                          ┌─────────────┐
                          │  DynamoDB   │
                          │ (Database)  │
                          └─────────────┘
```

## 🔧 Backend Services

### AWS Lambda Functions
- **Visitor Counter Function**: Tracks and updates page views
- **Contact Form Processor**: Handles form submissions
- **Content API**: Serves dynamic content

### DynamoDB Tables
- **visitors-table**: Stores visitor count data
- **contact-submissions**: Stores form submissions 
- **content-table**: Stores dynamic content for the site

## 📅 Project Timeline

| Week | Focus | Deliverables |
|------|-------|--------------|
| 1️⃣ | Resume Site (HTML/CSS), IAM setup, Static Hosting | Live site (GitHub Pages), architecture diagram |
| 2️⃣ | Visitor Counter, DNS setup, HTTPS, Basic Logging | Working visitor counter, DNS + HTTPS live demo |
| 3️⃣ | Backend API (Python), DynamoDB, IaC Templates | API test results, IaC deployment demo |
| 4️⃣ | CI/CD Pipelines, GitHub integration, Team Info Page | Final site with GitHub profiles, live demo |

## 🛠️ Setup & Deployment

### Prerequisites
- AWS Account with appropriate permissions
- AWS CLI configured
- Terraform or AWS CloudFormation installed
- Node.js and npm (for frontend development)
- Python 3.9+ (for Lambda functions)

### Local Development
```bash
# Clone the repository
git clone https://github.com/mrellash86/-Team-J-ITS-Web-App.git
cd team-j-it-services-app

# Set up frontend
cd frontend
npm install
npm start

# Deploy infrastructure
cd ../infrastructure/terraform
terraform init
terraform plan
terraform apply
```

## 📊 Monitoring & Logging

- AWS CloudWatch for Lambda function logs
- CloudWatch Metrics for application performance
- CloudWatch Alarms for error rate monitoring
- Budget alerts for cost management

## 🔗 Useful Links

- [Live Application](#) (Coming soon)
- [Project Documentation](#) (Coming soon)
- [Team Blog Post](#) (Coming soon)

## 📝 License


