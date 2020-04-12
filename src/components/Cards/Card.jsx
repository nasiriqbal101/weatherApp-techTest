import React, { Component } from "react";
import styles from "./Card.module.scss";

export default class Card extends Component {
    render() {
        console.log(this.props.city)
        return (
            <section className={styles.card}>
                <div className={styles.topContain}>
                    <h1>{this.props.city.name}</h1>
                    <h2>Temperature: {this.props.city.main.temp} &deg;C</h2>
                    <h2>Humidity: {this.props.city.main.humidity} %</h2>
                    <h2>Minimum Temperature: {this.props.city.main.temp_min} &deg;C</h2>
                    <h2>Maximum Temperature: {this.props.city.main.temp_max} &deg;C</h2>
                </div>
            </section>
        )
    }
}