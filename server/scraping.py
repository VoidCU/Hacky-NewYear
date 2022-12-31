import requests
from bs4 import BeautifulSoup
import re
import json


def extraction(YEAR):
    URL = f"https://www.infoplease.com/year/{YEAR}"

    x = requests.get(URL)
    data = []

    page = BeautifulSoup(x.text, 'html.parser')
    stats = page.find("h2", id="world").find_next_sibling("div").find("div")
    pop = re.sub("^[a-zA-Z0-9]*..", "", stats.text)
    sci = page.find("h2", id="science")
    chem = sci.find_next("div").find("span")
    phy = sci.find_next("h3", id="ent").find_next_sibling(
        "div").find_next_sibling("div").find("span")
    data.append({"Year": f"{YEAR}", "Population": f"{pop}", "Nobel Prizes": {
                "Chemistry": f"{chem.text}", "Physics": f"{phy.text}"}})

    return data

    # hello welcome to the good-night
