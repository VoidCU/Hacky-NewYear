import requests
from bs4 import BeautifulSoup


def extraction(YEAR):
    URL = f"https://www.infoplease.com/year/{YEAR}"

    x = requests.get(URL)
    data = []
    page = BeautifulSoup(x.text, 'html.parser')
    sci = page.find("h2", id="science")
    chem = sci.find_next("div").find("span")
    phy = sci.find_next("h3", id="ent").find_next_sibling(
        "div").find_next_sibling("div").find("span")
    data.append(
        {"Nobel Prizes": {"Chemistry": f"{chem.text}", "Physics": f"{phy.text}"}})

    return data

    # hello welcome to the good-night
