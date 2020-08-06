import React, { Component } from "react";

// Styling
import styles from "./Smartphones.module.scss";

export default class Smartphones extends Component {
    render() {
        const { Smartphones } = this.props;
        const SmartphoneList = Smartphones.map((Smartphone) => {
            return (
                <div className={styles.Smartphone} key={Smartphone.id}>
                    <h2>{Smartphone.name}</h2>
                </div>
            );
        });

        return <div className={styles.Smartphones}>{SmartphoneList}</div>;
    }
}
