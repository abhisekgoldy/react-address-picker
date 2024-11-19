import React, { useState, useEffect } from 'react';
import CountryPicker from './Country';
import StatePicker from "./State";
import CityPicker from './City';
import CodePicker from './PhoneCode';

const AddressPicker = (props) => {

    const { type, containerStyle, containerClassName } = props;

    return (
        <div style={{ width: '100%', ...containerStyle }} className={containerClassName}>
            <CountryPicker show={type === "country" || false} {...props} />

            <StatePicker show={type === "state" || false} {...props} />

            <CityPicker show={type === "city" || false} {...props} />

            <CodePicker show={type === "code" || false} {...props} />
        </div >
    );
};

export default AddressPicker;