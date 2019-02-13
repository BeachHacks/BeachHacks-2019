import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import DropButton from './DropButton';


/**
 * FAQ Page Component
 * 
 * Contains all of the information for event on the website
 * Includes dropdown menus organized on a grid system
 */
export default class FAQ extends Component {

    /**
     * Standard render method
     */
    render() {
        return (
            // Use id "faq"
            <div id="faq">
                <h1 className="faq-header">FAQ</h1>
                {/* Create initial grid */}
                <Grid>
                    <Row>
                        {/* On small sized screens, the inner grid will be merged to the top */}
                        <Col xs={12} md={6}>
                        {/* Inner grid 1*/}
                        <div>
                            <Row>
                                <Col xs={12} >
                                <DropButton header="When is it?" body="BeachHacks is 24 hours long starting on April 20, 2019 and ending on April 21, 2019.
                                A more detailed schedule will be released closer to the event."/>
                                </Col>
                                <Col xs={12}>
                            <DropButton header="How much does it cost?" body="BeachHacks is completely free to attend! We will provide food, snacks, swag and a great time!"/>
                        </Col>
                        <Col xs={12}>
                            <DropButton header="What do I bring?" body="A laptop, cables, chargers and your ID. It's also recommended that you bring a sleeping bag, pillow, and toiletries.
                                What you don't need to bring is a team, food, drink, or swag. We can handle that!" />
                        </Col>
                        <Col xs={12}>
                  <DropButton header="How will projects be judged?" body="When you complete a project and demo it at the end of BeachHacks, a panel of judges will evaluate your project on a wide variety of criteria including design, novelty, effectiveness, WOW-factor, and much more.
                                Winning teams will receive prizes in the closing ceremony from the judge(s) of the prize category."/>
                </Col>
                <Col xs={12}>
                <DropButton header="What if I have no experience?" body ="There's a first for everything! One of our main goals with BeachHacks is to bring the experience of a hackathon to students who have talent and potential for this kind of event, but never got the opportunity to show it.
                                The great thing about technology is that we're all connected by it and no matter what you're studying, there's a technology you use everyday as a part of your work.
                                For example, if you're a underwater basket weaving major, you could write a social media app for underwater basket weavers and exchange weaving patterns, color schemes, etc.
                                Still not sure? JUST DO IT!"/>
                        </Col>
                         <Col xs={12}>
                  <DropButton header="What is the code of conduct?" body={<div><p>We are following the MLH Code of Conduct which can be found <a className="link" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">here</a></p></div>}/>

                        </Col>
                            </Row>
                            
                        </div>
                            
                        </Col>
                        <Col xs={12} md={6}>
                        <div>
                            <Row>
                            
                                <Col xs={12}>
                                    <DropButton header="Where is it?" body="BeachHacks is being held on CSULB's campus in the University Student Union."/>
                                </Col>
                                <Col xs={12}>
                                    <DropButton header="Who can participate?" body="College students from all levels and majors are welcome to apply to BeachHacks!
                                        This isn't only a time to build something cool, but a time to learn also.
                                        If you have never programmed before, you have an opportunity to learn from everyone around you.
                                        To ensure an environment which is diverse and exciting, hackers attending are required to submit applications,
                                        but don't let that intimidate you! We just want to make sure you have a great time at the event once you have been accepted."/>
                                </Col>
                                <Col xs={12}>
                                    <DropButton header="What should I build?" body ="Anything you want! The project is up to you and your team.
                                                    You have 24 hours to make anything ranging from web apps, mobile apps, desktop apps, hardware or anything else you can think of!
                                                    Surprise us!"/>
                                </Col>
                                
                                <Col xs={12}>
                                    <DropButton header="No team or project idea? :(" body="Don't worry! Tons of hackers attend hackathons without a team or fully fledged project idea! We'll have team building excercises to help introduce you to the hackers around you and get the creative juices flowing."/>
                      
                                </Col>
                                
                                <Col xs={12}>
                  <DropButton header="Will there be any travel reimbursement?" body="At this time, we are unable to provide any travel reimbursement.
                                If this changes, we will update affected parties immediately; however, if accepted to BeachHacks please be ready to provide your own travel arrangements."/>
                </Col>
                        <Col xs={12}>
                                    <DropButton header="Question not answered?" body="Email us at help@beachhacks.com"/>
                                </Col>
                                </Row>
                                </div>
                                </Col>
                                </Row>
                                </Grid>
                                    
                           
            </div>
        );
    }
}