import React, { useState, useMemo } from 'react';
import Data from "../data/country.json";


const CodePicker = ({
    show,
    dropdownContainerStyle,
    dropdownContainerClassName,
    inputStyle,
    inputClassName,
    placeholder,
    value,
    onChange,
    itemStyle,
    itemClassName,
    emptyString,
    countryId
}) => {

    const [searchTerm, setSearchTerm] = useState(value || "");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSelect = (country) => {
        setSearchTerm("+" + country?.phonecode);
        setDropdownOpen(false);
        if (onChange) onChange(country);
    };

    const filteredCountries = useMemo(() => {
        const sanitizedSearchTerm = searchTerm.startsWith("+")
            ? searchTerm.slice(1).toLowerCase() // Remove the "+" if it exists and convert to lowercase
            : searchTerm.toLowerCase();

        return Data.filter((country) =>
            countryId
                ? country.id === countryId &&
                country.phonecode.toLowerCase().includes(sanitizedSearchTerm)
                : country.phonecode.toLowerCase().includes(sanitizedSearchTerm)
        );
    }, [countryId, searchTerm]);

    return (
        <div style={{ display: show ? "block" : "none", width: "100%", position: 'relative' }}>
            <input
                type="text"
                placeholder={placeholder || "Search for a phone code..."}
                value={searchTerm}
                onChange={handleSearch}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                style={{ width: "100%", ...inputStyle }}
                className={inputClassName}
            />
            {dropdownOpen && (
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        maxHeight: "200px",
                        overflowY: "auto",
                        border: "1px solid #ccc",
                        backgroundColor: "#fff",
                        zIndex: 1000,
                        ...dropdownContainerStyle
                    }}
                    className={dropdownContainerClassName}
                >
                    {filteredCountries.length > 0 ? (
                        filteredCountries.map((country, index) => (
                            <div
                                key={index}
                                onClick={() => handleSelect(country)}
                                style={{
                                    padding: "8px",
                                    cursor: "pointer",
                                    borderBottom: "1px solid #f0f0f0",
                                    ...itemStyle
                                }}
                                className={itemClassName}
                                onMouseDown={(e) => e.preventDefault()} // Prevent blur on click
                            >
                                +{country.phonecode}
                            </div>
                        ))
                    ) : (
                        <div style={{ padding: "8px", textAlign: "center", color: "#999" }}>
                            {emptyString ? emptyString : "No results found"}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
export default CodePicker;