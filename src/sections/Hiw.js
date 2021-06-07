import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types'; 







const HiwCard=({ contentModuleId })=>{



   


    return(
<>
        <div class="hiw-block" id="hiw-block">
        <div class="container">
           <h2 class="hiw-block__title">
              How It Works			
           </h2>
           <ul class="hiw-block__list">
              <li class="hiw-block__list-item">
                 <img src="https://modernize.com/wp-content/uploads/2019/10/hiw-icon1.svg" class="rocket-lazyload hiw-block__list-image lazyloaded" alt="Tell us about your project." data-lazy-src="https://modernize.com/wp-content/uploads/2019/10/hiw-icon1.svg" data-was-processed="true"/>
                 <noscript><img src="https://modernize.com/wp-content/uploads/2019/10/hiw-icon1.svg" class="rocket-lazyload hiw-block__list-image" alt="Tell us about your project." /></noscript>
                 <div class="hiw-block__list-title">
                    Tell us about your project.					
                 </div>
                 <div class="hiw-block__list-copy">
                    Answer a few questions about your upcoming project, and we will find contractors who can&nbsp;help.					
                 </div>
              </li>
              <li class="hiw-block__list-item">
                 <img src="https://modernize.com/wp-content/uploads/2019/10/hiw-icon2.svg" class="rocket-lazyload hiw-block__list-image lazyloaded" alt="Modernize will quickly match you with contractors." data-lazy-src="https://modernize.com/wp-content/uploads/2019/10/hiw-icon2.svg" data-was-processed="true"/>
                 <noscript><img src="https://modernize.com/wp-content/uploads/2019/10/hiw-icon2.svg" class="rocket-lazyload hiw-block__list-image" alt="Modernize will quickly match you with contractors." /></noscript>
                 <div class="hiw-block__list-title">
                    Modernize will quickly match you with contractors.					
                 </div>
                 <div class="hiw-block__list-copy">
                    We will pair you with up to four reliable contractors by email, phone, and&nbsp;text.					
                 </div>
              </li>
              <li class="hiw-block__list-item">
                 <img src="https://modernize.com/wp-content/uploads/2019/10/hiw-icon3.svg" class="rocket-lazyload hiw-block__list-image lazyloaded" alt="Review your contractor matches and schedule appointments." data-lazy-src="https://modernize.com/wp-content/uploads/2019/10/hiw-icon3.svg" data-was-processed="true"/>
                 <noscript><img src="https://modernize.com/wp-content/uploads/2019/10/hiw-icon3.svg" class="rocket-lazyload hiw-block__list-image" alt="Review your contractor matches and schedule appointments." /></noscript>
                 <div class="hiw-block__list-title">
                    Review your contractor matches and schedule appointments.					
                 </div>
                 <div class="hiw-block__list-copy">
                    Read recent contractor reviews and schedule no-obligation appointments.					
                 </div>
              </li>
              <li class="hiw-block__list-item">
                 <img src="https://modernize.com/wp-content/uploads/2019/10/hiw-icon4.svg" class="rocket-lazyload hiw-block__list-image lazyloaded" alt="Begin your home improvement project with confidence." data-lazy-src="https://modernize.com/wp-content/uploads/2019/10/hiw-icon4.svg" data-was-processed="true" />
                 <noscript><img src="https://modernize.com/wp-content/uploads/2019/10/hiw-icon4.svg" class="rocket-lazyload hiw-block__list-image" alt="Begin your home improvement project with confidence." /></noscript>
                 <div class="hiw-block__list-title">
                    Begin your home improvement project with confidence.					
                 </div>
                 <div class="hiw-block__list-copy">
                    Use Modernize’s educational content to negotiate pricing, explore financing, and prepare your home for installation&nbsp;day.					
                 </div>
              </li>
           </ul>
           <div class="hiw-block__cta">
              <a href="/about">
              About Modernize <i class="icon-arrow-right"></i>
              </a>
           </div>
        </div>
     </div>

</>
    );
    }

    HiwCard.propTypes = {
		contentModuleId : PropTypes.string.isRequired
	}
	

    export default HiwCard;
