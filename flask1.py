import forecastio
from flask import(
	Flask,
	render_template,
) 
app = Flask(__name__)

@app.route("/YRS2015Hydright")
def hello():
    return render_template("html1.html")
	
@app.route("/HydrightSignup")
def signup():
    return render_template("signup.html")

@app.route("/HydrightCredits")
def credits():
    return render_template("credits.html")

@app.route("/Hydrightweathertest")
def testw():
	byHour = forecast.hourly()
	return byHour.summary
	
if __name__ == "__main__":
	api_key = "fb394454c9b88ad96f5ccdef59d0ee57"
	lat = -31.967819
	lng = 115.87718
	forecast = forecastio.load_forecast(api_key, lat, lng)
	app.debug = True
	app.run(debug=True)
	