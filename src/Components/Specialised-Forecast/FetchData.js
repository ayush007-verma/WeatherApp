import React, { Component, useState, useEffect } from "react";
import "./FetchData.css";

const FetchData = () => {
  const [city, setCity] = useState("Chandigarh");
  const [search, setSearch] = useState("Chandigarh");
  const [weather, setWeather] = useState("Chandigarh");
  const [icon, setIcon] = useState(null);
  const [bg, setBg] = useState(null);
  const [dateTime, setDateTime] = useState(null);

  const apiKey = "3bba633bc8e4663b28997f1297e96210";

  // const DateTime = (offset) => {
  //     var date = new Date();
  //     var localTime = date.getTime();

  //     var localOffset = date.getTimezoneOffset() * 60000;
  //     var utc = localTime + localOffset;

  //     var newDateTime = utc + (3600000 * offset);
  //     var convertedDateTime = new Date(newDateTime);
  //     return convertedDateTime.toLocaleString();
  // }

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);
      // console.log(response);
      const resJson = await response.json();
      console.log(resJson);
      // const weatherDescription = resJson.weather[0].main;
      // console.log(weatherDescription);

      // const toTimeStamp = (strDate) => {
      //     var datum = Date.parse(strDate);
      //     return datum/1000;
      // }
      var date = "";
      var hours = "";
      var utc = "";
      var newDateTime = "";
      var convertedDateTime = "";

      {
        resJson.cod == 200 ? (
          <>
            {setCity(resJson.main)}
            {setWeather(resJson.weather[0])}
            {/* { console.log(weather.main) } */}
            {setIcon(
              "http://openweathermap.org/img/wn/" +
                resJson.weather[0].icon +
                ".png"
            )}
            {console.log(resJson.cod)}
            {/* { date = DateTime(resJson.timezone/3600) } */}
            {(hours = new Date(date).getHours())}
            {/* { console.log(date) } */}

            {
              (utc =
                new Date().getTime() + new Date().getTimezoneOffset() * 60000)
            }
            {/* { console.log(utc) } */}
            {(newDateTime = utc + 3600000 * (resJson.timezone / 3600))}
            {/* { console.log(newDateTime) } */}
            {(convertedDateTime = new Date(newDateTime))}
            {/* { console.log(convertedDateTime.toLocaleString()) } */}

            {setDateTime(resJson.timezone)}
            {console.log(
              new Date(
                new Date().getTime() +
                  new Date().getTimezoneOffset() * 60000 +
                  3600000 * (dateTime / 3600)
              ).toLocaleString()
            )}
          </>
        ) : (
          <>
            {setCity(null)}
            {console.log("No Data")}
          </>
        );
      }

      console.log(weather.main);
      let weatherbg = "";
      if (weather.main == "Thunderstorm") {
        weatherbg = weather.main;
        {
          setBg(weather.main);
        }
      } else if (weather.main == "Clouds") {
        weatherbg = weather.main;
        {
          setBg(weather.main);
        }
      } else if (weather.main == "Drizzle") {
        weatherbg = weather.main;
        {
          setBg(weather.main);
        }
      } else if (weather.main == "Rain") {
        weatherbg = weather.main;
        {
          setBg(weather.main);
        }
      } else if (weather.main == "Snow") {
        weatherbg = weather.main;
        {
          setBg(weather.main);
        }
      } else if (weather.main == "Clear") {
        weatherbg = weather.main;
        {
          setBg(weather.main);
        }
      } else if (
        weather.main == "Dust" ||
        "Mist" ||
        "Smoke" ||
        "Haze" ||
        "Fog" ||
        "Sand" ||
        "Ash" ||
        "Squall" ||
        "Tornado"
      ) {
        weatherbg = weather.main;
        {
          setBg(weather.main);
        }
      } else if (weather.main == "undefined") {
        weatherbg = weather.main;
        {
          setBg(weather.main);
        }
      } else {
        {
          setBg(null);
        }
      }
    };

    fetchApi();
  }, [search]);

  const datetime = new Date(
    new Date().getTime() +
      new Date().getTimezoneOffset() * 60000 +
      3600000 * (dateTime / 3600)
  ).toLocaleString();
  return (
    <>
      <div className={"setBgImage " + bg}>
        <div className="box mt-4 ">
          <div className="inputData mt-3">
            <input
              type="search"
              placeholder="Search"
              className="inputField"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              value={search}
            />
          </div>

          {!city ? (
            <p className="errorMsg">No Data</p>
          ) : (
            <>
              <div className="info">
                <h2 className="location mt-3">{search}</h2>
                <span> {datetime} </span>

                <span className="capitalize">
                  {" "}
                  <img src={icon} /> {weather.description}{" "}
                </span>

                <h1 className="temp">{city.temp} &deg;C</h1>

                <h3 className="tempmin_max">
                  Feels like: {city.feels_like} &deg;C | Min: {city.temp_min}{" "}
                  &deg;C | Max: {city.temp_max} &deg;C
                </h3>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FetchData;
