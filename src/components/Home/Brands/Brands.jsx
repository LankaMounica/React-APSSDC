import React, { Component } from "react";

// Styling
import styles from "./Brands.module.scss";

// Components
import Smartphones from "./Smartphones/Smartphones";

export default class Brands extends Component {
    render() {
        const { Brands } = this.props;
        const BrandList = Brands.map((Brand) => {
            return (
                <div className={styles.Brand} key={Brand.id}>
                    <h1 className={styles.Header}>{Brand.name}</h1>
                    <Smartphones Smartphones={Brand.phones} />
                </div>
            );
        });

        return <div className={styles.Brands}>{BrandList}</div>;
    }
}
