import React from "react";

function dateTimePretty(Component) {
    class DateTimePretty extends React.Component{
        state={};
        componentDidMount() {
            this.prettyTime(this.props);
        }
        componentDidUpdate(prevProps, prevState, snapshot) {
            if(this.props.date !==prevProps.date){
                this.prettyTime(this.props);
            }
        }

        prettyTime({date}){
            let timePretty = '';
            const amountOfTime = new Date()-new Date(date);
            if(amountOfTime<3600000){
                timePretty = `${(amountOfTime/60/1000).toFixed()} минут назад`
            }
            if(amountOfTime>=3600000 && amountOfTime<86400000){
                timePretty = `${(amountOfTime/60/60/1000).toFixed()} часов назад`
            }
            if(amountOfTime>=86400000){
                timePretty = `${(amountOfTime/24/60/60/1000).toFixed()} дней назад`
            }
            this.setState({date: timePretty});
        }

        render() {
            return <Component {...this.props} {...this.state}/>
        }
    }
    DateTimePretty.displayName = `DateTimePretty(${Component.displayName || Component.name || 'Component'})`
    return DateTimePretty;
}
export default dateTimePretty;
