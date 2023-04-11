
import pandas as pd
import plotly
import os
from flask import Flask, render_template, abort, url_for, json, jsonify, redirect
import json
import html
import urllib

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/Goup 5 project 3_interactive_dashboard') 
def Grp5pro3_interactive_dashboard():
    return redirect('https://claireattias.github.io/project3-main-link/')

 
app.run()