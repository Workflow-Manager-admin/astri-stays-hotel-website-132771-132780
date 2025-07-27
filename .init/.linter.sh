#!/bin/bash
cd /home/kavia/workspace/code-generation/astri-stays-hotel-website-132771-132780/frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

