Sowar
===========

Sowar creates an images rotator that can be easily customized

![Screenshot](http://www.developer.ps/moo/Sowar/images/sc1.jpg)

How to use
----------

<ol>
	<li>
		Create a main conatiner and a wrapper, inside them create the rotator elements conatiners
	</li>
	<li>
		Be sure to have the main conatiner position set as absoulte or relative and overflow to hidden and Wrapper position to absoulte
	</li>
	<li>
		Include mootols-core file and Sowar.js & css file
	</li>
	<li>
		Create the rotator element		
	</li>
	<li>
		window.addEvent('domready', function(){
                var sora1 = new Sowar('mainElementConatiner'[,options]);
        });
	</li>
</ol>
Options:
<ul>
	<li>'elementsSelector', main element selector, default: '.sowar-element'</li>
	<li>wrapperSelector, main wrapper selector, default: '#sowar-wrapper'</li>
    <li>pagingContainerSelector, paging conatiner selector, default: '#paging-conatiner'</li>
    <li>pagingElementsClass,  paging elements selector, default: 'paging-element'</li>
    <li>slideShowDelay, default: 3000</li>
    <li>transition, default: 'bounce:out'</li>
    <li>transitionDelay, default: 'normal'</li>
    <li>direction, right or left, default: 'left'</li>
	<li>elementsWidth, width the elements</li>
</ul>

Screenshots
-----------

![Screenshot](http://www.developer.ps/moo/Sowar/images/sc1.jpg)
![Screenshot](http://www.developer.ps/moo/Sowar/images/sc2.jpg)

