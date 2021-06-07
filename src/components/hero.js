import { Link } from 'gatsby';
import React, { useEffect } from 'react';







const Hero =()=>{
    return(
      

<div class="home-hero">
	<div class="home-hero__bg trending" id="hero-bg">
		<img data-img="interior" class="fade-out desktop-img lazyloaded" src="https://modernize.com/wp-content/themes/modernize/dist/images/home/hero-interior-desktop.jpg" alt="" data-lazy-src="https://modernize.com/wp-content/themes/modernize/dist/images/home/hero-interior-desktop.jpg" data-was-processed="true"/><noscript><img data-img="interior" class="fade-out desktop-img" src="https://modernize.com/wp-content/themes/modernize/dist/images/home/hero-interior-desktop.jpg" alt="" /></noscript>
	
	</div>
	<div class="home-hero__content">
		<div class="container">
			<div class="col-sm-12 col-lg-8">
				<h1 class="home-hero__content-title">
					Find Home Improvement<br/>Contractors Near You				</h1>
				<h2 class="home-hero__content-subtitle">Trusted Local Pros. No obligation.</h2>

				<form data-bind="zip-form-with-modal" class="home-hero__form" __bizdiag="120609" __biza="WJ__">
					<input id="zip-input" type="tel" maxlength="5" name="zip" placeholder="Enter your zip code" data-required="zip" data-bind="zip-box-input" class="home-hero__form-input"/>
					<button type="submit" class="home-hero__form-btn">
						<i class="icon-arrow-right"></i>
					</button>
				</form>
			</div>
			<div class="col-sm-12 col-lg-4"></div>
		</div>
	</div>
</div>
       
    
    );
    }

    export default Hero;
