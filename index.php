<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/2000/REC-xhtml1-20000126/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Sowar - Image Rotator</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link href="css/global.css" rel="stylesheet" type="text/css" media="screen" />
        <link href="css/Sowar.css" rel="stylesheet" type="text/css" media="screen" />
        <script type="text/javascript" src="Source/mootools-core-1.3.1.js"></script>
        <script type="text/javascript" src="Source/Sowar.js"></script>
        <script type="text/javascript">
            window.addEvent('domready', function(){
                var sowar1 = new Sowar('sowar-container');
            });
        </script>
    </head>
    <body>
        <form id="frmMain" action="">
            <div id="main-container">
                <div id="sowar-container">
                    <div id="sowar-wrapper">
                        <div class="sowar-element">
                            <div class="sowar-element-text">
                                Red
                            </div>
                            <div class="sowar-element-image">
                                <img src="images/Slides/p1.jpg" alt="" />
                            </div>
                        </div>
                        <div class="sowar-element">
                            <div class="sowar-element-text">
                                Green
                            </div>
                            <div class="sowar-element-image">
                                <img src="images/Slides/p2.jpg" alt="" />
                            </div>
                        </div>
                        <div class="sowar-element">
                            <div class="sowar-element-text">
                                White
                            </div>
                            <div class="sowar-element-image">
                                <img src="images/Slides/p3.jpg" alt="" />
                            </div>
                        </div>
                        <div class="sowar-element">
                            <div class="sowar-element-text">
                                Black
                            </div>
                            <div class="sowar-element-image">
                                <img src="images/Slides/p4.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
                <div id="paging-conatiner">                    
                </div>
            </div>
        </form>
    </body>
</html>