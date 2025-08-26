echo "calling api"

curl -X POST "https://auto-code-ai-backend.vercel.app/ai/get-review" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "print(\"Hello World!\")",
    "language": "python"
  }'
