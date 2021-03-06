import React, {Component} from 'react'
import './App.css'
import Car from './Car/Car'

class App extends Component {

    state = {
        cars: [
            {name: 'Audi', year: 2018},
            {name: 'BMW', year: 2016},
            {name: 'Mazda', year: 2010},
        ],
        pageTitle: 'React components',
        showCars: true
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    handleInput = (event) => {
        this.setState({
            pageTitle: event.target.value
        })
    }

    changeTitleHandler = pageTitle => {
        this.setState({pageTitle})
    }

    onChangeName(name, index) {
        const car = this.state.cars
        car.name = name
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({cars})
    }

    deleteHandler(index) {
        const cars = this.state.cars.concat()
        cars.splice(index, 1)
        this.setState({cars})
    }

    render() {

        let cars = null

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return <Car
                    key={index}
                    name={car.name}
                    year={car.year}
                    onDelete={this.deleteHandler.bind(this, index)}
                    onChangeName={(event) => this.onChangeName(event.target.value, index)}
                />
            })
        }

        return (
            <div>
                <h1>{this.state.pageTitle}</h1>

                <button
                    onClick={this.toggleCarsHandler}
                >Toggle cars</button>

                { cars }
            </div>
        )
    }
}

export default App
