function list(datas){

    class CreateSelect extends React.Component {
        constructor(props) {
            super(props);
            this.state = {value: null};
            this.stationArray = this.createStation(datas);
    
            this.changeValue = this.changeValue.bind(this);
            this.sendValue = this.sendValue.bind(this);
        }
    
        createStation(listStations) {
            const stationsArray = [];
    
            stationsArray.push(<option value="">Veuillez choisir une station...</option>);
            listStations.forEach(station => {
                stationsArray.push(<option value={station.slug}>{station.name}</option>);
            });
    
            return stationsArray;
        }
    
        changeValue(e) {
            this.setState({value: e.target.value});
        }
    
        sendValue(e) {
            getPostShedules(this.state.value);
            e.preventDefault();
        }
    
        render() {
            let button;
            if(this.state.value != null && this.state.value != '') {
                button = <input type="submit" value="Afficher les informations" />
            }

            return <form onSubmit={this.sendValue}>
                <span>Liste (dynamique) des stations de la ligne 8</span>
                <select value={this.state.value} onChange={this.changeValue}>
                    {this.stationArray}
                </select>
                {button}
            </form>
        }
    }
    
    ReactDOM.render(
        <CreateSelect datas={datas}/>,
        document.querySelector('#selector')
    );

}

function doneSchedules(schedules) {

    class DisplaySchedules extends React.Component {
        constructor(props) {
            super(props)

            this.resultatsArray = this.createResults(schedules);
        }

        createResults(schedules) {
            let array = [];

            schedules.forEach(schedule => {
                array.push(<div><span>Direction : {schedule['destination']}</span><span>Informations : {schedule['message']}</span></div>);
            })

            return array;
        }

        render() {
            return <div>
                <span>Résultats</span>
                {this.resultatsArray}
            </div>
        }
    }

    ReactDOM.render(
        <DisplaySchedules schedules={schedules}/>,
        document.querySelector('#response')
    )
}