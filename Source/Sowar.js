/*
---
description:     Sowar: a Javascript class for Mootools framework that creates an images rotator

authors:
  - Dirar Abu Kteish (http://www.developer.ps)

license:
  - MIT-style license

requires:
  core/1.2.5:   [Core, Browser, Native, Array, Function, Number, String, Hash, Event, Class, Class.Extras, Element, Element, Element.Event, Element.Style, Element.Dimensions, Selectors, Fx, Fx.CSS, Fx.Tween, DomReady]

provides:
  - Sowar
...
*/
// 
// Sowar 1, Copyright (c) 2011 Dirar Abu Kteish <dirar@zanstudio.com>, MIT Style License
var Sowar = new Class({
    Implements: [Events, Options],
    initialize: function(element, options) {
        this.setOptions({
            elementsSelector: '.sowar-element'
            , wrapperSelector: '#sowar-wrapper'
            , pagingContainerSelector: '#paging-conatiner'
            , pagingElementsClass: 'paging-element'
            , slideShowDelay: 3000
            , transition: 'bounce:out'
            , transitionDelay: 'normal'
            , direction: 'left' //right
        }, options);
        this.mainConatiner = (typeOf(element) == 'element') ? element : $(element);
        this.wrapperElement = $(document.body).getElement(this.options.wrapperSelector);
        this.wrapperElement.setStyle(this.options.direction, 0);        
        this.wrapperElement.set('tween', {
                duration: this.options.transitionDelay
                , transition: this.options.transition
                , link: 'cancel'
        }); 
        this.interval = null;
        this.currentElement = 0;
        this.constructRotater();
    },
    constructRotater: function(){
        //console.log($('sowar-container'));
        $$(this.options.elementsSelector).each(function(el, i){
            el.setStyle(this.options.direction, el.getSize().x * i);
            var paging = new Element('div', {'class' : this.options.pagingElementsClass, 'id' : ('soraElement' + i)});
            if(i == 0){paging.addClass('selected');}
            paging.inject($(document.body).getElement(this.options.pagingContainerSelector), 'top');
            paging.addEvent('click', function(){
                this.selectElement(i);
                window.clearInterval(this.interval);
                this.interval = this.nextElement.periodical(this.options.slideShowDelay, this);
                this.currentElement = i;
            }.bind(this));
        }.bind(this));
        this.interval = this.nextElement.periodical(this.options.slideShowDelay, this);
    }
    , nextElement: function(){
        this.currentElement++;
        if(this.currentElement == $$(this.options.elementsSelector).length){this.currentElement = 0;}
        this.selectElement(this.currentElement);
    }
    , selectElement: function(elIndex){
        var lastElement = $(document.body).getElement(this.options.pagingContainerSelector).getElement('.selected');
        if(lastElement){lastElement.removeClass('selected');}
        this.wrapperElement.tween(this.options.direction, $$(this.options.elementsSelector)[elIndex].getSize().x * (-1 * elIndex));
        $('soraElement' + elIndex).addClass('selected');        
    }
}); 
