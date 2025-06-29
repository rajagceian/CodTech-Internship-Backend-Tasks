from flask import Flask, request, jsonify
from model import get_recommendations

app = Flask(__name__)

@app.route('/')
def home():
    return "🎬 AI Movie Recommendation API is running"

@app.route('/recommend', methods=['GET'])
def recommend():
    title = request.args.get('title')
    if not title:
        return jsonify({'error': 'Missing title parameter'}), 400
    results = get_recommendations(title)
    if not results:
        return jsonify({'error': 'Title not found'}), 404
    return jsonify({'recommendations': results})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
