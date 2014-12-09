# Xinting's HTML CSS JS #

<link rel="stylesheet" href="x.css" />
<script src="x.js"></script>

## JS tricks ##

### Stars Rain ###
    
White shooting stars streak across the background which should be dark with 45 degree towards left-bottom.
    
    x.starsRain();
	
### Rain ###
	
Raining
    
    x.rain();
		
### Progress Bar ###
	
A white progress bar
    
	x.process( options );
        
	default 'options' is { 
		h: 3,
		top: '40px',
		left: '40px',
		range: 300,
		background: '#000000',
		forground: '#ffffff',
		begin: { x: 0, y: 1 },
		end: { x: 300, y: 1},
		time: 2000,
		step: 2
	} should be changed as you wish.
		
### Alert Label ###

A alert dialog
    
	x.alert( options );
	default 'options' is {
		h: 20,
		left: '200px',
		top: '200px',
		time: 2000,
		background: '#000000',
		forground: '#ffffff',
		text: '提示'
	} should be changed as you wish.

## Buttons GitHub-Like ##

Example: [necolas.github.io/css3-github-buttons/](http://necolas.github.io/css3-github-buttons/)

The "buttons" can be created by adding `class="button"` to any appropriate `<a>`, `<button>`, or `<input>` element. Add a further class of `pill` to create a button pill-like button. Add a further class of `primary` to emphasise more important actions.

    <a href="#" class="button">Post comment (link)</a>
    <input class="button" type="submit" value="Post comment (input)">
    <button class="button" type="submit">Post comment (button)</button>

## Buttons with dangerous actions ##

If you have a button that triggers a dangerous action, like deleting data, this can be indicated by adding the class `danger`.

    <a href="#" class="button danger">Delete post</a>

## Big buttons ##

If you wish to emphasize a specific action you can add the class `big`.

    <a href="#" class="button big">Create Project</a>

## Grouped buttons ##

Groups of buttons can be created by wrapping them in an element given a class of `button-group`. A less important group of buttons can be marked out by adding a further class, `minor-group`.

    <div class="button-group minor-group">
        <a href="#" class="button primary">Dashboard</a>
        <a href="#" class="button">Inbox</a>
        <a href="#" class="button">Account</a>
        <a href="#" class="button">Logout</a>
    </div>

## Mixed groups ##

Displaying a mixture of grouped and standalone buttons, as might be seen in a toolbar, can be done by adding another wrapping element with the class `button-container`.

    <div class="actions button-container">
        <a href="#" class="button primary">Compose new</a>

        <div class="button-group">
            <a href="#" class="button primary">Archive</a>
            <a href="#" class="button">Report spam</a>
            <a href="#" class="button danger">Delete</a>
        </div>

        <div class="button-group minor-group">
            <a href="#" class="button">Move to</a>
            <a href="#" class="button">Labels</a>
        </div>
    </div>

## Buttons with icons ##

A range of icons can be added (only for links and buttons) by adding a class of `icon` and any one of the provided icon classes.

    <a href="#" class="button icon search">Search</a>

## Browser compatibility ##

Firefox 3.5+, Google Chrome, Safari 4+, IE 8+, Opera 10+.

Note: Some CSS3 features are not supported in older versions of Opera and versions of Internet Explorer prior to IE 8. The use of icons is not supported in IE 6 or IE 7.

## License ##

Public domain: [http://unlicense.org](http://unlicense.org)

## Acknowledgements ##

Inspired by [Michael Henriksen](http://michaelhenriksen.dk)'s [CSS3 Buttons](http://github.com/michenriksen/css3buttons). Icons from [Iconic pack](http://somerandomdude.com/projects/iconic/).
