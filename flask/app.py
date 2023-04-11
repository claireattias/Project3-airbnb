from flask import Flask

app = Flask(__name__)

@app.route("/")

def index():
    return f"<a href='https://claireattias.github.io/project3-main-link/'>Project 3 AIRBNB</a>"

if __name__ == "__main__":
    app.run(debug=True)