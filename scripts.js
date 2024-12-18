const container = document.getElementById('container');

const items = [
  {
    icon: 'fa-solid fa-location-dot',
    title: 'Report Incidents',
    description:
      'Easily report and share road construction, bike lane blockages, and other obstacles affecting cyclists in real-time.',
  },
  {
    icon: 'fa-solid fa-map',
    title: 'Interactive Map',
    description:
      'View all reported incidents on our interactive map to stay informed about current conditions along your planned route.',
  },
  {
    icon: 'fa-solid fa-route',
    title: 'Smart Route Planning',
    description:
      'Plan your intelligent routing system that considers bike lanes and helps you find the safest path to your destination.',
  },
];

function createNavElement() {
  const header = document.createElement('header');
  header.classList.add(
    'fixed',
    'top-0',
    'z-10',
    'flex',
    'h-20',
    'w-full',
    'items-center',
    'justify-between',
    'bg-emerald-800',
    'px-12',
    'text-white',
  );

  let logo = document.createElement('h1');
  logo.innerText = 'Cyclable';
  logo.classList.add('text-lg', 'font-extrabold');

  let icon = document.createElement('div');
  icon.classList.add('cursor-pointer', 'text-white', 'hover:text-gray-300');

  let menuIcon = document.createElement('i');
  menuIcon.classList.add('fa-solid', 'fa-bars', 'text-xl');
  
  icon.appendChild(menuIcon)
  header.append(logo, icon);
  container.append(header);
}

function createHeroElement() {
  let newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'hero');
  newDiv.classList.add('mx-auto', 'max-w-6xl', 'px-4', 'pt-40', 'text-center');

  let h1 = document.createElement('h1');
  h1.innerHTML =
    'Navigate NYC, <span class="text-emerald-800">Safer & Smarter</span>';
  h1.classList.add('mb-6', 'text-5xl', 'font-bold', 'text-gray-900');

  let p = document.createElement('p');
  p.innerText =
    'Real-time bike route planning with community-driven updates on road conditions and bike lane accessibility in New York City.';
  p.classList.add('mx-auto', 'mb-8', 'max-w-2xl', 'text-xl', 'text-gray-600');

  let link = document.createElement('a');
  link.innerText = 'Join the Community';
  link.classList.add(
    'inline-flex',
    'items-center',
    'rounded-full',
    'bg-emerald-800',
    'px-8',
    'py-4',
    'text-lg',
    'font-medium',
    'text-white',
    'shadow-lg',
    'transition-all',
    'hover:bg-emerald-700',
    'hover:shadow-xl',
  );

  newDiv.append(h1, p, link);
  container.appendChild(newDiv);
}

function createFeaturesElement() {
  let features = document.createElement('div');
  features.classList.add('mx-auto', 'max-w-6xl', 'px-4', 'py-24');

  let header = document.createElement('div');
  header.classList.add('mb-16', 'text-center');

  let h2 = document.createElement('h2');
  h2.innerText = 'Everything you need for safer cycling';
  h2.classList.add('mb-4', 'text-3xl', 'font-bold', 'text-gray-900');

  let p = document.createElement('p');
  p.innerText =
    'Cyclable combines real-time community reports with smart route planning to help you navigate the city safely and efficiently';
  p.classList.add('mx-auto', 'max-w-2xl', 'text-lg', 'text-gray-600');

  let featureGrid = document.createElement('div');
  featureGrid.classList.add(
    'grid',
    'gap-8',
    'md:grid-cols-2',
    'lg:grid-cols-3',
  );

  // call a feature element for each item
  items.forEach((item) => {
    let featureElement = createFeatureElement(item);
    featureGrid.appendChild(featureElement);
  });

  header.append(h2, p);
  features.append(header, featureGrid);
  container.appendChild(features);
}

function createFeatureElement(item) {
  let feature = document.createElement('div');
  feature.classList.add(
    'rounded-lg',
    'bg-white',
    'p-6',
    'shadow-lg',
    'transition-all',
    'hover:shadow-xl',
  );

  let iconContainer = document.createElement('div');
  iconContainer.classList.add(
    'mb-4',
    'flex',
    'h-12',
    'w-12',
    'items-center',
    'justify-center',
    'rounded-full',
    'bg-emerald-100',
  );

  let icon = document.createElement('i');
  icon.className = item.icon;
  icon.classList.add('text-emerald-800', 'text-lg');

  let h3 = document.createElement('h3');
  h3.innerText = item.title;
  h3.classList.add('mb-3', 'text-xl', 'font-semibold', 'text-gray-900');

  let p = document.createElement('p');
  p.innerText = item.description;
  p.classList.add('text-gray-600');

  iconContainer.appendChild(icon);
  feature.append(iconContainer, h3, p);

  return feature;
}

document.addEventListener('DOMContentLoaded', () => {
  // add gradient to the container div
  container.classList.add(
    'min-h-screen',
    'bg-gradient-to-b',
    'from-emerald-50',
    'to-white',
  );

  // create the navbar
  createNavElement();

  // create the hero element
  createHeroElement();

  // create the features element
  createFeaturesElement();
});
