#!/bin/bash
#echo " starting Kheloin"
#pm2 start --name 'blockoville' /usr/local/bin/ng -- serve  --env=prod --port=4201
echo "Building Train Ticket Application";
#ng build  --configurations=prod --aot --build-optimizer
#ng build  --prod --aot --build-optimizer
#ng build  --aot --build-optimizer


ng build --aot --prod --output-hashing none --build-optimizer=false
#pm2 start --name 'trainfrontend' server.js
