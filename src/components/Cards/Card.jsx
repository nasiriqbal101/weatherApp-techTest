import React, { Component } from "react";
import styles from "./Card.module.scss";

export default class Card extends Component {
    render() {
        console.log(this.props.city)
        return (
            <section className={styles.card}>
                <div className={styles.topContain}>
                    <h1>{this.props.city.name}</h1>
                    <h2>{Math.round(this.props.city.main.temp)}°c</h2>
                    <h2>Humidity {this.props.city.main.humidity}%</h2>
                    <h2>Min {Math.round(this.props.city.main.temp_min)}°c</h2>
                    <h2>Max {Math.round(this.props.city.main.temp_max)}°c</h2>
                </div>
            </section>
        )
    }
}