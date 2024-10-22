# Optional: Allow setting a custom port (default: 8000)
PORT=${1:-8000}

# Launch the Python HTTP server
echo "Starting Python HTTP server on port $PORT..."
python3 -m http.server "$PORT"
