import React, { Component } from "react";
import styles from "./CardList.module.scss"
import Card from "../Cards/Card";

export default class CardList extends Component {

    state = {

        cityName: [
            { city_id: 2643744 },
            { city_id: 4749005 },
            { city_id: 4219762 }
        ],

        filteredcities: []
    }

    //api-id to be stored in a seperate variable
    componentDidMount() {
        let string = "";
        this.state.cityName.forEach(city => string += `${city.city_id},`)
        // console.log(string)
        fetch(`https://api.openweathermap.org/data/2.5/group?id=${string}&units=metric&appid=0f33f5c78acf44e7d38b5f6706f6f59d`)
            .then(response => response.json())
            .then(cities => {
                // console.log(cities)
                this.setState({ filteredcities: cities['list'] });
                //.list
            })
    }

    render() {
        // console.log(this.state.filteredcities)
        return (
            <>
                <section className={styles.cardlist}>
                    {this.state.filteredcities.map((city, index) => (
                        <Card city={city} key={index} />
                    ))}
                </section>
            </>
        )
    }

}