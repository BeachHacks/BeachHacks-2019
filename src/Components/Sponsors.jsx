import React, {Component} from 'react';
import DeVry from '../Images/Sponsors/devry.png';
import Google from '../Images/Sponsors/google.png';
import Heroku from '../Images/Sponsors/heroku.png';
import Asi from '../Images/Sponsors/asi.png';
export default class Sponsors extends Component{

    render(){
        return(
            <div>
                <img src={Google} alt="google"/>
                <img src={DeVry} alt ="devry university"/>
                <img src={Heroku} alt = "heroku"/>
                <img src={Asi} alt = " CSULB asi"/>
            </div>
        )
    }
}