const heroSection = document.querySelector('#hero');
const aboutMeSection = document.querySelector('#about');
const skills = document.querySelector('#skills');
const projects = document.querySelector('#projects');
const contacts = document.querySelector('#contacts');

const animationMap = {
    'hero': {
        animationName: 'fadeUp',
        children: [
            {
                id: 'hero-social-media-icons',
                animationName: 'fadeLeft'
            },
        ]
    },
    'about': {
        animationName: 'fadeUp',
        children: [
            {
                id: 'about-me-photo',
                animationName: 'fadeLeft',
            },
        ]
    },
    'skills': {
        animationName: 'fadeUp',
        children: [
            {
                id: 'skill',
                animationName: 'scaleIn',
            },
        ]
    },
    'projects': {
        animationName: 'fadeUp',
        children: [
            {
                id: 'rent-hand',
                animationName: 'fadeLeft',
            },
            {
                id: 'nivanova',
                animationName: 'fadeLeft',
            },
        ]
    },
    'contacts': {
        animationName: 'fadeUp',
        children: []
    }
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting === true) {

                const currentId = animationMap[entry.target.id];

                entry.target.style.animationName = currentId.animationName

                currentId.children.forEach(child => {
                    if (child.id === 'skill') {
                        document.querySelectorAll(`.${child.id}`).forEach(skill => {
                            skill.style.animationName = child.animationName
                        })
                    } else {
                        document.querySelector(`#${child.id}`).style.animationName = child.animationName
                    }
                })
            }
        })
    },
    { threshold: 0.25 }
);

[heroSection, aboutMeSection, skills, projects, contacts].forEach(section => observer.observe(section))