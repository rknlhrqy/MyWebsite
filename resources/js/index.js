import '../../vendors/css/normalize.css';
import '../../vendors/css/Grid.css';
import '../../vendors/css/animate.css';
import '../css/style.css';
import '../css/media_queries.css';

import '../../vendors/img/aaron-huber-542345-unsplash-min.jpg';
import '../../vendors/img/alex-knight-199368-unsplash-min.jpg';
import '../../vendors/img/bence-boros-573486-unsplash-min.jpg';
import '../../vendors/img/calwaen-liew-343557-unsplash-min.jpg';
import '../../vendors/img/clement-h-544786-unsplash-min.jpg';
import '../../vendors/img/donald-giannatti-671274-unsplash-min.jpg';
import '../../vendors/img/fancycrave-530798-unsplash-min.jpg';
import '../../vendors/img/japheth-mast-329255-unsplash-min.jpg';
import '../../vendors/img/peter-conlan-687333-unsplash-min.jpg';
import '../../vendors/img/thought-catalog-580700-unsplash-min.jpg';
import '../../vendors/img/william-iven-19843-unsplash-min.jpg';
import '../../vendors/img/polaromagnet-535800-unsplash-min.jpg';
import '../../vendors/img/redd-angelo-269935-unsplash-min.jpg';
import '../../vendors/img/wes-hicks-497129-unsplash-min.jpg';
import '../../vendors/img/flyingpig.gif';

import { elements } from './views/base';
import * as experienceView from './views/experienceView';

//import * from './jQuery/script';


/*
[elements.experienceWeb, elements.experienceBlockchain].forEach((element) =>{
  element.addEventListener('click', (event) => {
    console.log(event);
    const id = event.target.closest('.section-skill-experience-li').dataset.itemid;
    console.log(id);
    elements.experienceDescription.innerHTML = '';
    experienceView.renderExperience(id);
  });
});
*/

const controlExperienceView = (event) => {
  elements.experienceDescription.innerHTML = '';
  const id = event.target.closest('.section-skill-experience-li').dataset.itemid;
  experienceView.renderExperience(id);
  const icon = document.querySelector(`.section-skill-icon2-${id}`);
  icon.style.opacity = 1;
};

elements.experienceAll.addEventListener('mouseover', controlExperienceView);

//elements.experienceAll.addEventListener('touchstart', controlExperienceView);
//elements.experienceAll.addEventListener('touchmove', controlExperienceView);

elements.experienceAll.addEventListener('mouseout', (event) => {
  elements.experienceDescription.innerHTML = '';
  experienceView.renderExperience('');
  elements.iconPointExperienceAll.forEach((element)=>{
    element.style.opacity = 0;
  });
});

console.log('start...');
