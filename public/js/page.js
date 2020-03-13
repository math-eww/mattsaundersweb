// (c) Matt Saunders, 2020

// Cards animation
// Observer callback, fired when element enters or exits viewport (and on page load)
function onCardEntry(entry) {
    entry.forEach((change) => {
        if (change.intersectionRatio > 0) {
            // change.target.classList.add('shake-horizontal');
            change.target.children[0].classList.add('scale-up-center');
        } else {
            // change.target.classList.remove('shake-horizontal');
            change.target.children[0].classList.remove('scale-up-center');
        }
    });
}
// Threshold option set to fire event when element exits fully or when 80% inside viewport
let cardOptions = {
    threshold: [0, 0.8]
};
// Card Intersection Observer
let cardObserver = new IntersectionObserver(onCardEntry, cardOptions);
// List of all .card elements
let elements = document.querySelectorAll('.card');
// Begin observing all elements
for (let elm of elements) {
    cardObserver.observe(elm);
}

// Skills section animation
// Observer callback, fired when element enters or exits viewport (and on page load)
function onSkillEntry(entry) {
    entry.forEach((change) => {
        if (change.intersectionRatio > 0) {
            // change.target.classList.add('scale-up-center');
            // console.log(change.target.getAttribute('aria-valuenow') + "%");
            change.target.style.width = change.target.getAttribute('aria-valuenow') + "%"; //"80%";
        } else {
            // change.target.classList.remove('scale-up-center');
            change.target.style.width = "1%";
        }
    });
}
// Threshold option set to fire event when element exits fully or when 50% inside viewport
let skillOptions = {
    threshold: [0, 0.5]
};
// Skill Intersection Observer
let skillObserver = new IntersectionObserver(onSkillEntry, skillOptions);
// List of all .progress elements
elements = document.querySelectorAll('.progress-bar');
// Begin observing all elements
for (let elm of elements) {
    skillObserver.observe(elm);
}

// Links section animation
// Observer callback, fired when element enters or exits viewport (and on page load)
function onLinkEntry(entry) {
    entry.forEach((change) => {
        if (change.intersectionRatio > 0) {
            change.target.classList.add('jello-horizontal');
        } else {
            change.target.classList.remove('jello-horizontal');
        }
    });
}
// Threshold option set to fire event when element exits fully or when 50% inside viewport
let linkOptions = {
    threshold: [0, 0.5]
};
// Skill Intersection Observer
let linkObserver = new IntersectionObserver(onLinkEntry, linkOptions);
// List of all .progress elements
elements = document.querySelectorAll('.bottom-link');
// Begin observing all elements
for (let elm of elements) {
    linkObserver.observe(elm);
}