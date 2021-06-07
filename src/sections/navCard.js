import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';







const NavCard =()=>{



    const [openTab, setOpenTab] = React.useState(1);


    return(

        <>



    <>
      <div className="flex flex-wrap navigation">
        <div className=" navigation__card">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row tabs-container"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal tabs__tab " +
                  (openTab === 1 ? "text-modernize" : "text-black")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1"></i> Trending
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal tabs__tab " +
                  (openTab === 2 ? "text-modernize" : "text-black")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i>  Exterior
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal  tabs__tab " +
                  (openTab === 3 ? "text-modernize" : "text-black" )
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i> Interior
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className= {openTab === 1 ? "block" : "hidden"} id="link1">
                <ul class="links" id="link-container">
   <li class="links__item">
      <a href="/windows">
         <div class="links__item-icon"><i class="icon icon--window"></i></div>
         <div class="links__item-name">Windows</div>
      </a>
   </li>
   <li class="links__item">
      <a href="/hvac">
         <div class="links__item-icon"><i class="icon icon--hvac"></i></div>
         <div class="links__item-name">AC &amp; Heating</div>
      </a>
   </li>
   <li class="links__item">
      <a href="/roof">
         <div class="links__item-icon"><i class="icon icon--roofing"></i></div>
         <div class="links__item-name">Roofing</div>
      </a>
   </li>
   <li class="links__item">
      <a href="/bathroom-remodel">
         <div class="links__item-icon"><i class="icon icon--shower"></i></div>
         <div class="links__item-name">Bathrooms</div>
      </a>
   </li>
   <li class="links__item">
      <a href="/gutters">
         <div class="links__item-icon"><i class="icon icon--gutter"></i></div>
         <div class="links__item-name">Gutters</div>
      </a>
   </li>
   <li class="links__item">
      <a href="/home-security">
         <div class="links__item-icon"><i class="icon icon--shield"></i></div>
         <div class="links__item-name">Home Security</div>
      </a>
   </li>
   <li class="links__item">
      <a href="/home-warranty">
         <div class="links__item-icon"><i class="icon icon--umbrella"></i></div>
         <div class="links__item-name">Home Warranty</div>
      </a>
   </li>
   <li class="links__item">
      <a href="/home-accessibility/medical-alert-systems">
         <div class="links__item-icon"><i class="icon icon--medical"></i></div>
         <div class="links__item-name">Medical Alerts</div>
      </a>
   </li>
</ul>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <ul class="links" id="link-container">
   <li class="links__item">
      <a href="/windows">
         <div class="links__item-icon"><i class="icon icon--window"></i></div>
         <div class="links__item-name">Windows</div>
      </a>
   </li>
   
   <li class="links__item">
      <a href="/roof">
         <div class="links__item-icon"><i class="icon icon--roofing"></i></div>
         <div class="links__item-name">Roofing</div>
      </a>
   </li>
  
   <li class="links__item">
      <a href="/gutters">
         <div class="links__item-icon"><i class="icon icon--gutter"></i></div>
         <div class="links__item-name">Gutters</div>
      </a>
   </li>
   <li class="links__item">
      <a href="/home-security">
         <div class="links__item-icon"><i class="icon icon--shield"></i></div>
         <div class="links__item-name">Home Security</div>
      </a>
   </li>
 
  
</ul>


                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                 
                <ul class="links" id="link-container">
   <li class="links__item">
      <a href="/windows">
         <div class="links__item-icon"><i class="icon icon--window"></i></div>
         <div class="links__item-name">Windows</div>
      </a>
   </li>
   <li class="links__item">
      <a href="/hvac">
         <div class="links__item-icon"><i class="icon icon--hvac"></i></div>
         <div class="links__item-name">AC &amp; Heating</div>
      </a>
   </li>
   <li class="links__item">
      <a href="/roof">
         <div class="links__item-icon"><i class="icon icon--roofing"></i></div>
         <div class="links__item-name">Roofing</div>
      </a>
   </li>
 
   <li class="links__item">
      <a href="/gutters">
         <div class="links__item-icon"><i class="icon icon--gutter"></i></div>
         <div class="links__item-name">Gutters</div>
      </a>
   </li>
   <li class="links__item">
      <a href="/home-security">
         <div class="links__item-icon"><i class="icon icon--shield"></i></div>
         <div class="links__item-name">Home Security</div>
      </a>
   </li>
  
 
</ul>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
 











</>


    );
    }

    NavCard.propTypes = {
      contentModuleId : PropTypes.string.isRequired
  }

    export default NavCard;
