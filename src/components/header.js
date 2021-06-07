import { Link } from 'gatsby';
import React, { useEffect } from 'react';







const Header =()=>{
    return(
    <div class="header" id="homeowner-header">
       <div class="container  ">
          <div class="header__desktop hidden-xs hidden-sm">
             <a href="/" class=" ml-10 header__logo  logo " aria-label="Modernize"></a>
             <div class="header__links">
                <div class="header__link static" data-toggle="modal" data-target="#how-it-works-modal">
                   How it works
                </div>
                <div id="trades-list" class="header__link dropdown">
                   <div class="header__link-title">
                      Plan Your Project
                   </div>
                   <div class="header__link-dropdown header__link-dropdown--trades-list" style={{display: "none"}}>
                      <div class="sub-nav__container sub-nav__container--trades-list">
                         <div class="sub-nav__trade-links">
                            <a href="/bathroom-remodel" class="sub-nav__trade-links-link">
                            Bathroom						</a>
                         </div>
                         <div class="sub-nav__trade-links">
                            <a href="/kitchen-remodel/cabinets" class="sub-nav__trade-links-link">
                            Cabinets						</a>
                         </div>
                         <div class="sub-nav__trade-links">
                            <a href="/doors" class="sub-nav__trade-links-link">
                            Doors						</a>
                         </div>
                         <div class="sub-nav__trade-links">
                            <a href="/flooring-installation" class="sub-nav__trade-links-link">
                            Flooring						</a>
                         </div>
                         <div class="sub-nav__trade-links">
                            <a href="/gutters" class="sub-nav__trade-links-link">
                            Gutters						</a>
                         </div>
                         <div class="sub-nav__trade-links">
                            <a href="/home-accessibility" class="sub-nav__trade-links-link">
                            Home Accessibility						</a>
                         </div>
                         <div class="sub-nav__trade-links">
                            <a href="/home-security" class="sub-nav__trade-links-link">
                            Home Security						</a>
                         </div>
                         <div class="sub-nav__trade-links">
                            <a href="/home-warranty" class="sub-nav__trade-links-link">
                            Home Warranty						</a>
                         </div>
                         <div class="sub-nav__trade-links">
                            <a href="/hot-tub-spas" class="sub-nav__trade-links-link">
                            Hot Tubs						</a>
                         </div>
                         <div class="sub-nav__trade-links">
                            <a href="/hvac" class="sub-nav__trade-links-link">
                            HVAC						</a>
                         </div>
                         <div class="sub-nav__trade-links">
                            <a href="/kitchen-remodel" class="sub-nav__trade-links-link">
                            Kitchen Remodel						</a>
                         </div>
                         <div class="sub-nav__trade-links">
                            <a href="/home-accessibility/medical-alert-systems" class="sub-nav__trade-links-link">
                            Medical Alerts						</a>
                         </div>
                         <div class="sub-nav__trade-links">
                            <a href="/roof" class="sub-nav__trade-links-link">
                            Roofing						</a>
                         </div>
                         <div class="sub-nav__trade-links">
                            <a href="/siding" class="sub-nav__trade-links-link">
                            Siding						</a>
                         </div>
                         <div class="sub-nav__trade-links">
                            <a href="/solar" class="sub-nav__trade-links-link">
                            Solar						</a>
                         </div>
                         <div class="sub-nav__trade-links">
                            <a href="/home-accessibility/stair-lifts" class="sub-nav__trade-links-link">
                            Stair Lifts						</a>
                         </div>
                         <div class="sub-nav__trade-links">
                            <a href="/home-accessibility/walk-in-tubs" class="sub-nav__trade-links-link">
                            Walk In Tubs						</a>
                         </div>
                         <div class="sub-nav__trade-links">
                            <a href="/windows" class="sub-nav__trade-links-link">
                            Windows						</a>
                         </div>
                      </div>
                   </div>
                </div>
                <div class="header__link static" data-bind="find-pros-button">
                   Find local contractors
                   <span data-bind="find-pro-modal-open-btn" class="header__link-title"></span>
                </div>
                <div class="header__link header__link--contractor static" data-bind="contractor-button">
                   I'm a contractor
                   <a href="/pros" class="header__link-title"></a>
                </div>
                <div data-bind="header-login-menu-item" class="header__link static header__link--login">
                   Manage your Project
                   <a href="#login-modal" rel="nofollow" class="header__link-title" data-bind="header-login-link"></a>
                </div>
             </div>
          </div>
          <div class="header__mobile">
             <a href="/" class="header__mobile-logo  logo logo--dark-color" aria-label="Modernize"></a>
             <div class="header__mobile-btns closed" id="toggle-mobile-nav"></div>
          </div>
          <div class="header__scrolled">
             <div class="header__zip">
                <div class="header__zip-title hidden-sm hidden-xs">Ready to start your project?<br/>Enter your zip to find local pros.</div>
                <div class="header__zip-title visible-sm visible-xs">Enter your zip to<br/>find local pros.</div>
                <div class="header__zip-input">
                   <form class="header-zip-form" data-bind="zip-form-with-modal" __bizdiag="120609" __biza="WJ__">
                      <div class="form-group parent-error">
                         <div class="input-group input-group--inline-btn">
                            <input class="form-control" type="tel" maxlength="5" name="zip" data-required="zip" placeholder="ZIP Code" data-bind="zip-box-input"/>
                            <span class="input-group-btn">
                            <button type="submit" class="
                               header__zip-input-btn btn btn-primary">
                            Go			</button>
                            </span>
                         </div>
                         <div class="form-error-message"></div>
                      </div>
                   </form>
                </div>
             </div>
          </div>
       </div>
    </div>
    );
    }

    export default Header;
