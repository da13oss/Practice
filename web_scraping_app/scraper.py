import requests
from bs4 import BeautifulSoup


def scrape(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")
    data = {}  # Process and extract data here
    return data
