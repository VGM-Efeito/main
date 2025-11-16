#!/bin/bash

# This script automates the deployment process for the Playwright MCP project.

# Set variables
RESOURCE_GROUP="your-resource-group"
DEPLOYMENT_NAME="your-deployment-name"
TEMPLATE_FILE="../azure/arm-template.json"
PARAMETERS_FILE="../deploy.yml"

# Log in to Azure
az login

# Create resource group if it doesn't exist
az group create --name $RESOURCE_GROUP --location eastus

# Deploy the ARM template
az deployment group create --resource-group $RESOURCE_GROUP --name $DEPLOYMENT_NAME --template-file $TEMPLATE_FILE --parameters @$PARAMETERS_FILE

echo "Deployment completed successfully."