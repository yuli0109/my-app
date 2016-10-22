import React, {Component} from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import _ from 'lodash'


class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp-273);
    const press = cityData.list.map(weather => weather.main.pressure);
    const humids = cityData.list.map(weather => weather.main.humidity);
    return <tr key={name}>
              <td>{name}</td>
              <td>
                <Chart data={temps} color={'red'} units={'C'}/>
              </td>
              <td>
                <Chart data={press} color={'yellow'} units={'hPa'}/>
              </td>
              <td>
                <Chart data={humids} color={'blue'} units={'%'}/>
              </td>
          </tr>
  }
  render() {
    return <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature (C)</th>
          <th>Pressure (HPa)</th>
          <th>Humidity (%)</th>
        </tr>
      </thead>
      <tbody>
        {this.props.weather.map(this.renderWeather)}
      </tbody>
    </table>
  }
}


function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
