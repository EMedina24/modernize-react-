import { Link } from 'gatsby';
import React, { useEffect } from 'react';







const Footer =()=>{
    return(
        <div class="footer">
        <div class="container">
                            <div class="footer-help">
                    <div class="footer-help__title">
                        Need help? Call&nbsp;us.
                    </div>
                    <div class="footer-help__cta">
                        <a href="tel:8882191908" class="footer-help__link">
                            <i class="icon-fill-phone"></i>
                            (888) 219-1908					</a>
                    </div>
                </div>
            
            <div class="footer-links">
                <div class="row">
                    <div class="col-sm-5 col-xs-12">
                        <div class="footer-links__title">
                            Get to know&nbsp;us
                        </div>
    
                        <ul class="footer-links__list">
                                                <li>
                                <a href="/about">
                                    About Modernize							</a>
                            </li>
                                                <li>
                                <a href="/contact">
                                    Contact Us							</a>
                            </li>
                                                <li>
                                <a href="/careers">
                                    Careers							</a>
                            </li>
                                                <li>
                                <a href="/faq">
                                    FAQs							</a>
                            </li>
                                                <li>
                                <a href="/press">
                                    Press							</a>
                            </li>
                                            </ul>
                    </div>
                    <div class="col-sm-7 col-xs-12">
                        <div class="footer-links__title">
                            Are you a&nbsp;contractor?
                        </div>
    
                        <ul class="footer-links__list trades">
                                                                        <li>
                                <a href="/pros/solar-leads" class="footer__trade-link" data-trade="Solar">
                                    Solar Leads
                                </a>
                            </li>
                                                                        <li>
                                <a href="/pros/roofing-leads" class="footer__trade-link" data-trade="Roofing">
                                    Roofing Leads
                                </a>
                            </li>
                                                                        <li>
                                <a href="/pros/window-leads" class="footer__trade-link" data-trade="Window">
                                    Window Leads
                                </a>
                            </li>
                                                                        <li>
                                <a href="/pros/hvac-leads" class="footer__trade-link" data-trade="HVAC">
                                    HVAC Leads
                                </a>
                            </li>
                                                                        <li>
                                <a href="/pros/siding-leads" class="footer__trade-link" data-trade="Siding">
                                    Siding Leads
                                </a>
                            </li>
                                                                        <li>
                                <a href="/pros/gutter-leads" class="footer__trade-link" data-trade="Gutter">
                                    Gutter Leads
                                </a>
                            </li>
                                                                        <li>
                                <a href="/pros/bathroom-remodeling-leads" class="footer__trade-link" data-trade="Bathroom Remodeling">
                                    Bathroom Remodeling Leads
                                </a>
                            </li>
                                                                        <li>
                                <a href="/pros/kitchen-remodeling-leads" class="footer__trade-link" data-trade="Kitchen Remodeling">
                                    Kitchen Remodeling Leads
                                </a>
                            </li>
                                                                        <li>
                                <a href="/pros/cabinet-leads" class="footer__trade-link" data-trade="Cabinet">
                                    Cabinet Leads
                                </a>
                            </li>
                                                                        <li>
                                <a href="/pros/home-security-leads" class="footer__trade-link" data-trade="Home Security">
                                    Home Security Leads
                                </a>
                            </li>
                                                                        <li>
                                <a href="/pros/home-warranty-leads" class="footer__trade-link" data-trade="Home Warranty">
                                    Home Warranty Leads
                                </a>
                            </li>
                                                                        <li>
                                <a href="/pros/medical-alert-leads" class="footer__trade-link" data-trade="Medical Alert">
                                    Medical Alert Leads
                                </a>
                            </li>
                                                                        <li>
                                <a href="/pros/stair-lift-leads" class="footer__trade-link" data-trade="Stair Lift">
                                    Stair Lift Leads
                                </a>
                            </li>
                                                                        <li>
                                <a href="/pros/walk-in-tub-leads" class="footer__trade-link" data-trade="Walk In Tub">
                                    Walk In Tub Leads
                                </a>
                            </li>
                                                                        <li>
                                <a href="/pros/hot-tub-leads" class="footer__trade-link" data-trade="Hot Tub">
                                    Hot Tub Leads
                                </a>
                            </li>
                                                                        <li>
                                <a href="/pros/flooring-leads" class="footer__trade-link" data-trade="Flooring">
                                    Flooring Leads
                                </a>
                            </li>
                                            </ul>
                    </div>
                </div>
            </div>
    
            <a href="/" class="footer__logo logo">Modernize</a>
        
            <div class="footer-copyright">
                <div class="footer-copyright__row">
                    © 2021 Modernize.
                </div>
                <div class="footer-copyright__row">
                    <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Use</a>
                </div>
                <div class="footer-copyright__row">
                    <a href="/privacy#ccpa">California&nbsp;Privacy</a> | <a href="/privacy#nyna">New&nbsp;York&nbsp;Policy</a> | <a href="/privacy#uspi">Do&nbsp;Not&nbsp;Sell&nbsp;My&nbsp;Personal&nbsp;Information</a>
                </div>
                <div class="footer-copyright__row">
                    This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener">Terms&nbsp;of&nbsp;Service</a>&nbsp;apply.
                </div>
            </div>
        </div>
    </div>
    );
    }

    export default Footer;
