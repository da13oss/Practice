from flask import Flask, request, jsonify
from flask_restful import Api, Resource
from scraper import scrape

app = Flask(__name__)
api = Api(app)


class ScraperAPI(Resource):
    def get(self):
        url = request.args.get("url")
        data = scrape(url)
        return jsonify(data)


api.add_resource(ScraperAPI, "/scrape")

if __name__ == "__main__":
    app.run(debug=True)
