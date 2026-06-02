#!/bin/bash
cd backend
railway init --name inventory-backend
railway add --database postgresql
railway up
railway domain
