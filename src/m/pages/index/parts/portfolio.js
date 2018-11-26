import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import InlineSkill from './inline-skill';

export default class extends Component {

  render() {
    return <div className="v-section print-hide">
        <h2 className="section-title">Projects i have been involved in</h2>
        <p>
          Actions speak louder than words, so here is a list of projects i have been involved in.<br />
          Please refer to the description for my exact roles in the projects.<br />
          <br />
          I have been involved in more projects than this in my past, the ones listed here are just the most recent of promiment.
        </p>          
        <div className="portfolio-section">

          <div className="info-block">
            <div>
              <b className="info-block__header">Saxobank Website <InlineSkill>Website maintenence</InlineSkill> <InlineSkill>Senior frontend developer</InlineSkill></b><br />
              <p>
                As a consultant i refactored their build sollution for simplicity and performance and helped implement their SPA to none SPA migration plan to improve load metrics, I also established code guidelines, as well as documented their frontend components and process.
              </p>

              <strong>Tags</strong>
              <ul className="skills-section">
                <li className="v-skill"><span>Load optimization</span></li>
                <li className="v-skill"><span>Sitecore integration</span></li>
              </ul>
            </div>
          </div>  

          <div className="info-block">
            <div>
              <b className="info-block__header">Nora <InlineSkill>Single page application</InlineSkill> <InlineSkill>Senior frontend developer</InlineSkill></b><br />
              <p>
                As a consultant at Nordea i helped build the first version of the Nora investment advice tool.<br />
                Initially build in React which i maintained, but later we migrated it to Angular which was Nordeas prefered framework.
                As the senior frontend developer on the project i planned and helped implenting the frontend SPA architecture.
              </p>

              <strong>Tags</strong>
              <ul className="skills-section">
                <li className="v-skill"><span>Nordea</span></li>
                <li className="v-skill"><span>Angular</span></li>
                <li className="v-skill"><span>React</span></li>
                <li className="v-skill"><span>Redux</span></li>
                <li className="v-skill"><span>Frontend Architecture</span></li>
              </ul>

              <LazyLoad height={400}>
                <div className="media-block">
                  <img className="info-screenshot" src={require('./assets/cases/nora/1.jpg')} alt="screenshot" />
                </div>
              </LazyLoad>
            </div>
          </div>  

          <div className="info-block">
            <div>
              <b className="info-block__header">Nordea pension tools <InlineSkill>Single page application</InlineSkill> <InlineSkill>Senior frontend developer</InlineSkill></b><br />
              <p>
                As a consultant, part of a large 20+ person department working on a internal pension tool. i helped building new features, preparing their internal tools for MIFID requirements,
                establishing code standards, upgraded their frontend build to sollution to webpack, and helped establish better communication between teams.<br />
              </p>

              <strong>Tags</strong>
              <ul className="skills-section">
                <li className="v-skill"><span>AngularJS</span></li>
                <li className="v-skill"><span>Redux</span></li>
                <li className="v-skill"><span>Frontend Architecture</span></li>
              </ul>
            </div>
          </div>

          <div className="info-block">
            <div>
              <b className="info-block__header">Sofus & Månemaskinen <InlineSkill>Tablet game</InlineSkill> <InlineSkill>Game developer</InlineSkill></b><br />
              <p>
                Together with Game Designer Malte Burup, i took over development of existing already started flash based mobile game (Android & iOS).<br />
                The game it self is made as an interactive childrens book, ages 3-6, where the child and their parent has to help the protagonist Sofus solve puzzles to fix the moon.<br />
              </p>

              <strong>Tags</strong>
              <ul className="skills-section">
                <li className="v-skill"><span>Flash</span></li>
                <li className="v-skill"><span>Actionscript</span></li>
              </ul>

              <LazyLoad height={400}>
                <div className="media-block">
                  <iframe
                    className="video-preview"
                    src="https://www.youtube.com/embed/bDZd9An-jAk"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                  </iframe>
                </div>
              </LazyLoad>
            </div>
          </div> 

          <div className="info-block">
            <div>
              <b className="info-block__header">Go beaver! <InlineSkill>Mobile game</InlineSkill> <InlineSkill>Game developer</InlineSkill></b><br />
              <p>
                I was hired to code a small physics puzzle game centered about bridges to unite to beavers.
              </p>

              <strong>Tags</strong>
              <ul className="skills-section">
                <li className="v-skill"><span>Unity</span></li>
                <li className="v-skill"><span>C#</span></li>
              </ul>

              <LazyLoad height={400}>
                <div className="media-block">
                  <img className="info-screenshot" src={require('./assets/cases/beaver/1.jpg')} alt="screenshot" />
                  <img className="info-screenshot" src={require('./assets/cases/beaver/2.jpg')} alt="screenshot" />
                  <img className="info-screenshot" src={require('./assets/cases/beaver/3.jpg')} alt="screenshot" />
                </div>
              </LazyLoad>
            </div>
          </div> 

          <div className="info-block">
            <div>
              <b className="info-block__header">Harba <InlineSkill>Mobile app</InlineSkill> <InlineSkill>Fullstack developer</InlineSkill></b><br />
              <p>
                For their initial launch May 1. 2016, i made a Cordova based Android/iOS application that allow users to book a Harbor spot.<br />
                <br />
                The intention was to streamline the booking process and gather the various harbors in one place.
                Saving both the Harbor manager timer handling payments and booking schedules and the clients time looking up contact details.
                <br />
                I facillitated the development and design of the application, and executed the coding of it until a team could be build to take over.
              </p>

              <strong>Tags</strong>
              <ul className="skills-section">
                <li className="v-skill"><span>Angular</span></li>
                <li className="v-skill"><span>Ionic</span></li>
                <li className="v-skill"><span>CakePHP</span></li>
                <li className="v-skill"><span>Mobile</span></li>
              </ul>
            </div>

            <LazyLoad height={400}>
              <div className="media-block">
                <img className="info-screenshot" src={require('./assets/cases/harba/1.jpg')} alt="screenshot" />
                <img className="info-screenshot" src={require('./assets/cases/harba/2.jpg')} alt="screenshot" />
                <img className="info-screenshot" src={require('./assets/cases/harba/3.jpg')} alt="screenshot" />
              </div>
            </LazyLoad>
          </div>  

          <div className="info-block">
            <div>
              <b className="info-block__header">Storebrand reise <InlineSkill>Mobile app</InlineSkill> <InlineSkill>Fullstack developer</InlineSkill></b><br />
              <p>
                Developed while subcontracting for HelpApp.
                Storebrand reise is a application that allows users to send insurance reports directly to their insurance company, centered around travel insurance.
                The app also allows you to manage your trips and the participants making reporting easier.<br />
                <br />
                My part was to code all the infrastruture, both serverside and client side in the application, and define a API to integrate with SOS and Storebrand in collaboration with their developers.<br />
                <br />
                Storebrand reise and LähiTapiola Matkahätäpalvelu are share the same foundation i made and a functionally very similar.
              </p>

              <strong>Tags</strong>
              <ul className="skills-section">
                <li className="v-skill"><span>Angular</span></li>
                <li className="v-skill"><span>Ionic</span></li>
                <li className="v-skill"><span>Mobile</span></li>
              </ul>
            </div>

            <LazyLoad height={400}>
              <div className="media-block">
                <img className="info-screenshot" src={require('./assets/cases/storebrand/1.jpg')} alt="screenshot" />
                <img className="info-screenshot" src={require('./assets/cases/storebrand/2.jpg')} alt="screenshot" />
                <img className="info-screenshot" src={require('./assets/cases/storebrand/3.jpg')} alt="screenshot" />
              </div>
            </LazyLoad>
          </div>  

          <div className="info-block">
            <div>
              <b className="info-block__header">LähiTapiola Matkahätäpalvelu, <InlineSkill>Mobile app</InlineSkill> <InlineSkill>Fullstack developer</InlineSkill></b><br />
              <p>
                Developed while subcontracting for HelpApp.
                LähiTapiola reise is a application that allows users to send insurance reports directly to their insurance company, centered around travel insurance.
                The app also allows you to manage your trips and the participants making reporting easier.<br />
                <br />
                My part was to code all the infrastruture, both serverside and client side in the application, and define a API to integrate with SOS and LähiTapiola in collaboration with their developers.
                <br />
                Storebrand reise and LähiTapiola Matkahätäpalvelu are share the same foundation i made and a functionally very similar.
              </p>

              <strong>Tags</strong>
              <ul className="skills-section">
                <li className="v-skill"><span>Angular</span></li>
                <li className="v-skill"><span>Ionic</span></li>
                <li className="v-skill"><span>Mobile</span></li>
              </ul>
            </div>

            <LazyLoad height={400}>
              <div className="media-block">
                <img className="info-screenshot" src={require('./assets/cases/lahitapiola/1.jpg')} alt="screenshot" />
                <img className="info-screenshot" src={require('./assets/cases/lahitapiola/2.jpg')} alt="screenshot" />
                <img className="info-screenshot" src={require('./assets/cases/lahitapiola/3.jpg')} alt="screenshot" />
              </div>
            </LazyLoad>
          </div>  

          <div className="info-block">
            <div>
              <b className="info-block__header">Rødt Kort <InlineSkill>Mobile app</InlineSkill> <InlineSkill>Fullstack developer</InlineSkill></b><br />
              <p>
                Developed while subcontracting for HelpApp.
                Rødt Kort is a application that lets you report a car breakdown via a mobile application and the get notified as the case progresses.<br />
                <br />
                The app' basically removes the inital workload of registrering the incident at SOS, and the end user is notified all the way from when the truck is on the way to when the car is ready for pickup at a garage.
                <br />
                My part was to code all the infrastruture, both serverside and client side in the application, and define a API to integrate with SOS in collaboration with their developers.
              </p>

              <strong>Tags</strong>
              <ul className="skills-section">
                <li className="v-skill"><span>Angular</span></li>
                <li className="v-skill"><span>Ionic</span></li>
                <li className="v-skill"><span>Mobile</span></li>
              </ul>
            </div>

            
            <LazyLoad height={400}>
              <div className="media-block">
                <img className="info-screenshot" src={require('./assets/cases/redcard/1.jpg')} alt="screenshot" />
                <img className="info-screenshot" src={require('./assets/cases/redcard/2.jpg')} alt="screenshot" />
                <img className="info-screenshot" src={require('./assets/cases/redcard/3.jpg')} alt="screenshot" />
                <img className="info-screenshot" src={require('./assets/cases/redcard/4.jpg')} alt="screenshot" />
                <img className="info-screenshot" src={require('./assets/cases/redcard/5.jpg')} alt="screenshot" />
              </div>
            </LazyLoad>
          </div>  

          <div className="info-block">
            <div>
              <b className="info-block__header">AIM Create <InlineSkill>Wordpress site</InlineSkill> <InlineSkill>Fullstack developer</InlineSkill></b><br />
              <p>
                AIM Create, needed a simple site to represent them online, but also operated on a limited budget.
                I helped them setup wordpress and then tutored them to be able to add content on their own.
              </p>

              <strong>Tags</strong>
              <ul className="skills-section">
                <li className="v-skill"><span>Website</span></li>
                <li className="v-skill"><span>Wordpress</span></li>
                <li className="v-skill"><span>PHP</span></li>
                <li className="v-skill"><span>Training</span></li>
              </ul>
            </div>
          </div>  

          <div className="info-block">
            <div>
              <b className="info-block__header">Søndagsavisen <InlineSkill>Wordpress website</InlineSkill> <InlineSkill>Frontend developer</InlineSkill></b><br />
              <p>
                Made in collboration with another company where they provided design and HTML.<br />
                Søndagsavisen.dk, needed a new website and wordpress was requested.<br />
                I was hired as a contractor to implement the sollution in wordpress with the design provided.<br />
                <br />
                The site required a number of optimizations that is not default to wordpress, mostly related to better caching which i implemented.
              </p>

              <strong>Tags</strong>
              <ul className="skills-section">
                <li className="v-skill"><span>Website</span></li>
                <li className="v-skill"><span>Wordpress</span></li>
                <li className="v-skill"><span>PHP</span></li>
                <li className="v-skill"><span>Training</span></li>
              </ul>
            </div>

            <LazyLoad height={400}>
              <div className="media-block">
                <img className="info-screenshot" src={require('./assets/cases/sondagsavisen/1.jpg')} alt="screenshot" />
              </div>
            </LazyLoad>
          </div>  

          <div className="info-block">
            <div>
              <b className="info-block__header">Rynkedans, <InlineSkill>Mobile app</InlineSkill> <InlineSkill>Fullstack developer</InlineSkill></b><br />
              <p>
                Rynkedans was a campaign mobile-website and facebook application.<br />
                Rynkedans allows users to videotape the self directly on the website dancing like a monkey. People would then vote on which videos was best and the winners recived a prize.<br />
                <br />
                Made as a subcontractor, was given a PSD design and and specification and i then implemented it on my own.<br />
              </p>

              <strong>Tags</strong>
              <ul className="skills-section">
                <li className="v-skill"><span>Website</span></li>
                <li className="v-skill"><span>Facebook</span></li>
                <li className="v-skill"><span>PHP</span></li>
                <li className="v-skill"><span>Video recording</span></li>
                <li className="v-skill"><span>Mobile website</span></li>
              </ul>
            </div>

            <LazyLoad height={400}>
              <div className="media-block">
                <img className="info-screenshot" src={require('./assets/cases/rynkeby/1.jpg')} alt="screenshot" />
                <img className="info-screenshot" src={require('./assets/cases/rynkeby/2.jpg')} alt="screenshot" />
                <img className="info-screenshot" src={require('./assets/cases/rynkeby/3.jpg')} alt="screenshot" />
              </div>
            </LazyLoad>
          </div> 

          <div className="info-block">
            <div>
              <b className="info-block__header">Your party-type! <InlineSkill>Mobile app</InlineSkill> <InlineSkill>Fullstack developer</InlineSkill></b><br />
              <p>
                Made as a subcontractor i was given design and specification which i executed.<br />
                The app was a simple multiple choice web application for Facebook and mobile web.<br />
              </p>

              <strong>Tags</strong>
              <ul className="skills-section">
                <li className="v-skill"><span>Website</span></li>
                <li className="v-skill"><span>Facebook</span></li>
                <li className="v-skill"><span>PHP</span></li>
                <li className="v-skill"><span>Video recording</span></li>
                <li className="v-skill"><span>Mobile website</span></li>
              </ul>
            </div>

            <LazyLoad height={400}>
              <div className="media-block">
                <img className="info-screenshot" src={require('./assets/cases/partytype/1.jpg')} alt="screenshot" />
                <img className="info-screenshot" src={require('./assets/cases/partytype/2.jpg')} alt="screenshot" />
                <img className="info-screenshot" src={require('./assets/cases/partytype/3.jpg')} alt="screenshot" />
              </div>
            </LazyLoad>
          </div> 

          <div className="info-block">
            <div>
              <b className="info-block__header">Meet Hue, <InlineSkill>Mobile app</InlineSkill> <InlineSkill>Frontend developer</InlineSkill></b><br />
              <p>
                Made as a subcontractor i was shown a website and told to mimick it's design with some changes in Danish.
                Meet Hue was a campaign site with info about events and a slideshow.
              </p>

              <strong>Tags</strong>
              <ul className="skills-section">
                <li className="v-skill"><span>Website</span></li>
                <li className="v-skill"><span>Facebook</span></li>
                <li className="v-skill"><span>PHP</span></li>
                <li className="v-skill"><span>Video recording</span></li>
                <li className="v-skill"><span>Mobile website</span></li>
              </ul>
            </div>

            <LazyLoad height={400}>
              <div className="media-block">
                <img className="info-screenshot" src={require('./assets/cases/meethue/1.jpg')} alt="screenshot" />
              </div>
            </LazyLoad>
          </div> 

          <div className="info-block">
            <div>
              <b className="info-block__header">Huawei xmas, <InlineSkill>Mobile app</InlineSkill> <InlineSkill>Frontend developer</InlineSkill></b><br />
              <p>
                Made as a subcontractor i was given a initial mockup design and then modified it until the client was happy.<br />
                <br />
                Huawei xmas was a christmass raffle, users would come in everyday from the 1. to the 24. and roll a dice to win a present.
                The application was intented for facebook mobile the web.<br />
                The application was heavily animated using CSS and featured sound as well as a javascript particle making it snow on the site.
              </p>

              <strong>Tags</strong>
              <ul className="skills-section">
                <li className="v-skill"><span>Website</span></li>
                <li className="v-skill"><span>Facebook</span></li>
                <li className="v-skill"><span>PHP</span></li>
                <li className="v-skill"><span>Video recording</span></li>
                <li className="v-skill"><span>Mobile website</span></li>
              </ul>
            </div>

            <LazyLoad height={400}>
              <div className="media-block">
                <img className="info-screenshot" src={require('./assets/cases/huaweixmas/1.jpg')} alt="screenshot" />
                <img className="info-screenshot" src={require('./assets/cases/huaweixmas/2.jpg')} alt="screenshot" />
              </div>
            </LazyLoad>
          </div> 

          <div className="info-block">
            <div>
              <b className="info-block__header">fitnessconsulting.dk <InlineSkill>Website</InlineSkill> <InlineSkill>Fullstack developer</InlineSkill></b><br />
              <p>
                fitnessconsulting.dk needed a booking system for client to book times and for the trainers to except/deny bookings.<br />
                Given the tight budget i designed and imeplemented minimaly viable booking system for them.
              </p>

              <strong>Tags</strong>
              <ul className="skills-section">
                <li className="v-skill"><span>Website</span></li>
                <li className="v-skill"><span>Facebook</span></li>
                <li className="v-skill"><span>PHP</span></li>
                <li className="v-skill"><span>Video recording</span></li>
                <li className="v-skill"><span>Mobile website</span></li>
              </ul>
            </div>

            <LazyLoad height={400}>
              <div className="media-block">
                <img className="info-screenshot" src={require('./assets/cases/fitnessconsulting/1.jpg')} alt="screenshot" />
                <img className="info-screenshot" src={require('./assets/cases/fitnessconsulting/2.jpg')} alt="screenshot" />
                <img className="info-screenshot" src={require('./assets/cases/fitnessconsulting/3.jpg')} alt="screenshot" />
              </div>
            </LazyLoad>
          </div> 

        </div>
    </div>
  }
}