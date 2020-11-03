#!/bin/bash

npm run build
gcloud config set builds/use_kaniko True
gcloud builds submit --quiet --tag "gcr.io/stgen-test/stgen-smartapp:test-sha"
gcloud run deploy "stgen-smartapp" --quiet --region us-central1 --image "gcr.io/stgen-test/stgen-smartapp:test-sha" --platform "managed" --allow-unauthenticated
