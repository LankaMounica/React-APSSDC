import React, { Component } from "react";

// Styling
import styles from "./Home.module.scss";

// Subcomponents
import Brands from "./Brands/Brands";

export default class Home extends Component {
    state = {
        Brands: [
            {
                name: "Huawei",
                phones: [
                    { name: "P 40", id: 1 },
                    { name: "Mate 30", id: 2 },
                    { name: "P 30", id: 3 },
                ],
                id: 1,
            },
            {
                name: "Samsung",
                phones: [
                    { name: "Note 10", id: 1 },
                    { name: "S 20", id: 2 },
                    { name: "Note 20", id: 3 },
                ],
                id: 2,
            },
            {
                name: "Apple",
                phones: [
                    { name: "X", id: 1 },
                    { name: "11", id: 2 },
                    { name: "SE", id: 3 },
                ],
                id: 3,
            },
        ],
    };

    render() {
        return (
            <div className={styles.Home}>
                <Brands Brands={this.state.Brands} />
            </div>
        );
    }
}
