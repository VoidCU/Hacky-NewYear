import os
from twilio.rest import Client
import datetime
from dotenv import load_dotenv
load_dotenv()

account_sid = os.getenv("TWILIO_ACCOUNT_SID")
auth_token = os.getenv("TWILIO_AUTH_TOKEN")

client = Client(account_sid, auth_token)

message = client.messages.create(
    to="+9779860688116",
    from_=os.getenv("TWILIO_PHONE_NUMBER"),
    body="Hello from Python!")

print(message.account_sid)
