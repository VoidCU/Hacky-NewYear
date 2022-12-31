from flask import Flask, jsonify, request
import os
from twilio.rest import Client
import datetime
from dotenv import load_dotenv
import scraping as s
load_dotenv()

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)

print("hello")

# Route for seeing a data


@app.route('/data')
def get_time():
    # Returning an api for showing in  reactjs
    return {
        'Name': "muphatlal",
        "Age": "22",
        "Date": x,
        "programming": "python"
    }


@app.route('/year', methods=['POST'])
def get_year_info():
    year = request.data
    ret = s.extraction(year)
    return jsonify(ret)


@app.route('/sms', methods=['POST'])
def sendSMS():
    msg = request.form.get('msghere')
    # incoming_msg = request.values.get('Body', '').lower()
    # account_sid = os.getenv("TWILIO_ACCOUNT_SID")
    # auth_token = os.getenv("TWILIO_AUTH_TOKEN")

    # client = Client(account_sid, auth_token)

    # message = client.messages.create(
    #     to="+9779860688116",
    #     from_=os.getenv("TWILIO_PHONE_NUMBER"),
    #     body=msg)
    # print(message.sid)
    print(msg)
    return "done"


# Running app
if __name__ == '__main__':
    app.run(debug=True)
