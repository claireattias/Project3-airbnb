from flask import  Flask, jsonify, redirect


app = Flask(__name__)

@app.route('/')
def index():
    return f"Click <a href='https://claireattias.github.io/project3-main-link/'>Project 3 AIRBNB</a> "


if __name__ == "__main__":
    app.run(debug=True)