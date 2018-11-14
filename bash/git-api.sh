#!/bin/bash
echo -n Password: 
read -s password
curl -u $USER:$password -d '{"name":"repo_name", "default_branch": "develop"}' -H "Content-Type: application/json" -X PATCH https://github.com/api/v3/repos/:org/:repo_name
