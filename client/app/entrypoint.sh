#!/bin/bash

npm i
npm run build
npm run preview -- --host 0.0.0.0
