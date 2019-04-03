import React, {Component} from 'react';
// import Anime from 'react-anime';
export default class Info extends Component {
    render(){
        return(
            <div id="info">
            {/* <Anime opacity={[0,1]} translateY={'1em'} delay={(e,i) => i * 3000} autoplay={true}> */}
            <h1 classname="info-header">What is BeachHacks?</h1>
                <p classname="info-container">
                BeachHacks is the fourth collegiate hackathon hosted by California State University, Long Beach! 
                During our 24 hour event, student developers and designers will gather on campus to build and program ideas into reality. 
                Whether you join a team or go solo, join us at BeachHacks and show us what makes you unique. 
                It doesn't matter if you're aiming to be the next Tony Stark or you're just looking to learn some code, 
                BeachHacks has something for you!
                </p>
            {/* </Anime> */}
            </div>
        )
    }
}
