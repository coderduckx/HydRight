import forecastio
from flask import(
        Flask,
        render_template,
)
app = Flask(__name__)
 
@app.route("/YRS2015Hydright")
def hello():
    return render_template("index.html")
 
@app.route("/HydrightSignup")
def signup():
    return render_template("signup.html")
 
@app.route("/HydrightCredits")
def credits():
    return render_template("credits.html")
 
@app.route("/Sprite", methods=['GET', 'POST'])
def main():
    return render_template("sprite.html", weather=byHour.summary,)
 
@app.route("/login")
def login():
    return render_template("loginpage.html")
 
api_key = "fb394454c9b88ad96f5ccdef59d0ee57"
lat = -31.967819
lng = 115.87718
forecast = forecastio.load_forecast(api_key, lat, lng)
byHour = forecast.hourly()
if __name__ == "__main__":
        app.debug = True
        app.run(debug=True)