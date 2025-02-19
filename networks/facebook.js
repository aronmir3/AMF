
function do_fb_page_like(){

	state = _STATE_WAIT_TO_CLOSE;
	wait_time = generateRandom(0, 7);

	var div = document.querySelector('div[aria-label="Remove Like"]');
	if(div) { return; }
	
	var div = document.querySelector('div[aria-label="Like"]');
	if(!div) { return; }
	div.click();

	const btns = document.getElementsByTagName("div");
	if (!btns) {
		return false;
	}

	if (btns.length < 1) {
		return false;
	}

	for (let i = 0; i < btns.length; i++) {

		if (btns[i].textContent === "Following") {
			click(btns[i]);
			// return true;
		}

		if (btns[i].textContent === "Follow") {
			click(btns[i]);
			return true;
		}
	}
}

function do_fb_share(){

	state = _STATE_WAIT_TO_CLOSE;
	wait_time = generateRandom(0, 4);

	const btns = document.getElementsByTagName("button");
	if (!btns) {
		return false;
	}

	if (btns.length < 1) {
		return false;
	}

	for (let i = 0; i < btns.length; i++) {
		console.log(btns[i].textContent)
		if (btns[i].textContent === "Post to Facebook") {
			click(btns[i]);
			return true;
		}
	}

	return false;
}

function do_fb_follow(){

	state = _STATE_WAIT_TO_CLOSE;
	wait_time = generateRandom(0, 7);

	const btns = document.getElementsByTagName("span");
	if (!btns) {
		return false;
	}

	if (btns.length < 1) {
		return false;
	}

	for (let i = 0; i < btns.length; i++) {

		if (btns[i].textContent === "Following") {
			click(btns[i]);
			// return true;
		}

		if (btns[i].textContent === "Follow") {
			click(btns[i]);
			return true;
		}
	}

	return false;

}

function do_fb_post_like(){

	state = _STATE_WAIT_TO_CLOSE;
	wait_time = generateRandom(0, 7);

	var div = document.querySelector('div[aria-label="Remove Like"]');
	if(div) { return; }

	var div = document.querySelector('div[aria-label="Like"]');
	if(!div) { return; }
	div.click();
}

function do_fb_post_share(){

	state = _STATE_WAIT_TO_CLOSE;
	wait_time = generateRandom(0, 10);

	const btns = document.getElementsByTagName("span");
	if (!btns) {
		return false;
	}

	if (btns.length < 1) {
		return false;
	}

	for (let i = 0; i < btns.length; i++) {
		if (btns[i].textContent === "Share") {
			click(btns[i]);
			break;
			// return true;

		}
	}

	const btns_next = document.getElementsByTagName("span");
	if (!btns_next) {
		return false;
	}

	if (btns.length < 1) {
		return false;
	}

	for (let i = 0; i < btns_next.length; i++) {
		if (btns_next[i].textContent === "Share now (Friends)") {
			click(btns_next[i]);
			return true;
		}
	}

	return false;
}

var facebook_done = false;

function do_facebook(){
	
	// wait for 5 seconds
	if(tick_count < 2) { return; }
	
	if(tick_count > _TIMEOUT_IN_SECS) {
		// timeout
		window.close();
	}

	if(facebook_done) { return; }
	facebook_done = true;
	
	console.log("do_facebook");
	console.log("config.actionType = "+config.actionType);
	
	if (config.actionType === _ACTION_TYPE_FACEBOOK_PAGE_LIKE) {
		
		console.log("do_fb_page_like");
		do_fb_page_like();
		return;
	}

	if (config.actionType === _ACTION_TYPE_FACEBOOK_SHARE) {

		console.log("do_fb_share");
		do_fb_share();
		return;
	}

	if (config.actionType === _ACTION_TYPE_FACEBOOK_FOLLOW) {

		console.log("do_fb_follow");
		do_fb_follow();
		return;
	}

	if (config.actionType === _ACTION_TYPE_FACEBOOK_POST_LIKE) {

		console.log("do_fb_post_like");
		do_fb_post_like();
		return;
	}

	if (config.actionType === _ACTION_TYPE_FACEBOOK_POST_SHARE) {
		console.log("do_fb_post_share");
		do_fb_post_share();
		return;
	}
}
