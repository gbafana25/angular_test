from flask import Flask
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/test")
@cross_origin()
def test_fnc():
    return json.dumps({"server_info":[('VW1', 'Windows 2019', 'app1', 'j smith'), ('VW2', 'Windows 2012', 'app2', 'j smith'), ('VW3', 'Windows 2020', 'app3', 'j smith')]})


if __name__ == "__main__":
    app.run()