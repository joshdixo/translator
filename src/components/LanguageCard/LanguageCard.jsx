import React from 'react'
// import PropTypes from 'prop-types'
import languages from '../../languages.json'
import './languageCard.css';

const LanguageCard = () => {

    return (
            <div className="card-wrapper">
                {languages.languages.map((languages, index) => {
                    return (
                        <div className="card" key={index}>
                            <div className="card-label">
                                <h2>{languages.label}</h2>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
    )
}

// LanguageCard.propTypes = {}

export default LanguageCard