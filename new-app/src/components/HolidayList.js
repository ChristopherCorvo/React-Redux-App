// --------- Import React -------------
import React, { useEffect } from 'react'

// ---------- Import {connect} from react-redux -------
import { connect } from 'react-redux'

// ----------- Import Necessary Actions -----------------
// this function when called makes an axios request

import { fetchHolidays } from '../store/actions/calendarActions'

const HolidayList = (props) => {
    console.log(props.holidays)

    useEffect(() => {
        props.fetchHolidays(); // this is calling our fetchHolidays function which then makes an axios request
    }, []);

    return (
        <div>
            {/* inside this div we will render our list of items via the retrieved data */}
            <h2> US Holidays for 2020 </h2>
            {props.holidays.map((holiday) => (
                    <div>
                        <h3>{holiday.name}</h3>
                    </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        holidays: state.holidayData,
        error: state.error
    };
};

// -------- use 'connect' to mapStateToProps and fetchHolidays function to props ----------
export default connect(mapStateToProps, { fetchHolidays }) (HolidayList)