from flask import Flask, render_template, request
import pandas as pd
import json
import plotly
import plotly.express as px
import sqlite3

app = Flask(__name__)


# create a connection to the db
def get_db_connection():
    conn = sqlite3.connect('./data/group5.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/select',methods=['POST', 'GET'])
def updater():
    return interactive1(request.args.get('data'))

@app.route('/select_price',methods=['POST', 'GET'])
def updater2():
    return interactive2(request.args.get('data'))

# set the base page
@app.route('/')
def index():
    return render_template('index.html')
 
# first page is gina's.
@app.route('/gina_allhosts_stacked')
def chart1():
    # create connection to db
    conn = get_db_connection()

    # query the db for the base table
    df = pd.read_sql('select * from main', conn)
    df['Host_Since'] = pd.to_datetime(df['Host_Since'])
    df['Host_Since_Year'] = df['Host_Since'].dt.year

    # group the df into years and count the number of Ids to get signups by year
    hosts_grouped = df.groupby(['Host_Since_Year','City']).count()['Id']
    hosts_df=hosts_grouped.reset_index()

    # plot the figure using plotly
    fig = px.bar(hosts_df, x='Host_Since_Year',y='Id',color='City',barmode="stack",
                   labels={
                     "Id": "Count of Hosts",
                     "Host_Since_Year": "Year"
                 })
    # add a centered title
    fig.update_layout(title_text='Number of Hosts by Signup Year', title_x=0.5)


    # conver the plot to a json file
    graphJSON = json.dumps(fig, cls=plotly.utils.PlotlyJSONEncoder)

    # set the HTML header
    header="Number of Hosts Signed Up by Year (all cities)"

    # set the description
    description = """
    This data aggregates signups by year for all cities
    """

    # now render the page
    return render_template('gina.html', graphJSON=graphJSON, header=header,description=description)

@app.route('/gina_allhosts_grouped')
def chart2():
    # create connection to db
    conn = get_db_connection()

    # query the db for the base table
    df = pd.read_sql('select * from main', conn)
    df['Host_Since'] = pd.to_datetime(df['Host_Since'])
    df['Host_Since_Year'] = df['Host_Since'].dt.year

    # group the df into years and count the number of Ids to get signups by year
    hosts_grouped = df.groupby(['Host_Since_Year','City']).count()['Id']
    hosts_df=hosts_grouped.reset_index()

    fig2 = px.bar(hosts_df, x='Host_Since_Year',y='Id',color='City',barmode="group",
                   labels={
                     "Id": "Count of Hosts",
                     "Host_Since_Year": "Year"
                 })
    # add a centered title
    fig2.update_layout(title_text='Number of Hosts by Signup Year', title_x=0.5)


    # conver the plot to a json file
    graphJSON = json.dumps(fig2, cls=plotly.utils.PlotlyJSONEncoder)

    # set the HTML header
    header="Number of Hosts Signed Up by Year (all cities)"

    # set the description
    description = """
    This data aggregates signups by year for all cities
    """

    # now render the page
    return render_template('gina.html',graphJSON=graphJSON, header=header,description=description)


@app.route('/gina_superhosts')
def interactivebase():
    return render_template('gina_interactive_superhosts.html',  graphJSON=interactive1())

def interactive1(a_city = 'bangkok'):
    # create connection to db
    conn = get_db_connection()

    # query the db for the base table
    df = pd.read_sql('select * from main', conn)
    df['Host_Since'] = pd.to_datetime(df['Host_Since'])
    df['Host_Since_Year'] = df['Host_Since'].dt.year
    if a_city == 'all':
        grouped = df.groupby(['Superhost']).agg({'Id':'count'})
        grouped_df = grouped.reset_index()
        
        grouped_df['Superhost'] = grouped_df['Superhost'].map({'t':'Superhost', 'f':'Regular Host'})
                                    
        fig = px.bar(grouped_df, x='Superhost',y='Id', color='Superhost',
                    labels={
                        "Id": "Count of Hosts",
                        "Superhost": "Superhost Status"
                    })
        # add a centered title
        fig.update_layout(title_text='Number of Superhosts (all cities)', title_x=0.5)
        
        graphJSON = json.dumps(fig, cls=plotly.utils.PlotlyJSONEncoder)

        return graphJSON
    else:
        df = df[df['City'] == a_city]
        grouped = df.groupby(['Superhost']).agg({'Id':'count'})
        grouped_df = grouped.reset_index()
        
        grouped_df['Superhost'] = grouped_df['Superhost'].map({'t':'Superhost', 'f':'Regular Host'})
                                    
        fig3 = px.bar(grouped_df, x='Superhost',y='Id', color='Superhost',
                    labels={
                        "Id": "Count of Hosts",
                        "Superhost": "Superhost Status"
                    })
        # add a centered title
        fig3.update_layout(title_text=f'Number of Superhosts in {a_city.title()}', title_x=0.5)
    
    # conver the plot to a json file
        graphJSON = json.dumps(fig3, cls=plotly.utils.PlotlyJSONEncoder)

        return graphJSON
    

@app.route('/gina_superhosts_avg_price')
def interactiveprice():
    return render_template('gina_interactive_superhosts_price.html',  graphJSON=interactive2())

def interactive2(a_city = 'bangkok'):
    # create connection to db
    conn = get_db_connection()

    # query the db for the base table
    df = pd.read_sql('select * from main', conn)
    df['Host_Since'] = pd.to_datetime(df['Host_Since'])
    df['Host_Since_Year'] = df['Host_Since'].dt.year
    if a_city == 'all':
        grouped = df.groupby(['Superhost']).agg({'Price(USD)':'mean'})
        grouped_df = grouped.reset_index()
        
        grouped_df['Superhost'] = grouped_df['Superhost'].map({'t':'Superhost', 'f':'Regular Host'})
                                    
        fig4 = px.bar(grouped_df, x='Superhost',y='Price(USD)', color='Superhost',
                    labels={
                        "Price(USD)": "Avg Listing Price",
                        "Superhost": "Superhost Status"
                    })
        # add a centered title
        fig4.update_layout(title_text='Avg Listing price by Host Status (all cities)', title_x=0.5)
        
        graphJSON = json.dumps(fig4, cls=plotly.utils.PlotlyJSONEncoder)

        return graphJSON
    else:
        df = df[df['City'] == a_city]
        grouped = df.groupby(['Superhost']).agg({'Price(USD)':'mean'})
        grouped_df = grouped.reset_index()
        
        grouped_df['Superhost'] = grouped_df['Superhost'].map({'t':'Superhost', 'f':'Regular Host'})
                                    
        fig5 = px.bar(grouped_df, x='Superhost',y='Price(USD)', color='Superhost',
                    labels={
                        "Price(USD)": "Avg Listing Price",
                        "Superhost": "Superhost Status"
                    })
        # add a centered title
        fig5.update_layout(title_text=f'Avg Listing price by Host Status in {a_city.title()}', title_x=0.5)
    
    # conver the plot to a json file
        graphJSON = json.dumps(fig5, cls=plotly.utils.PlotlyJSONEncoder)

        return graphJSON