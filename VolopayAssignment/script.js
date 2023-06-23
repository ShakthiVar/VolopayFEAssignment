// Mock API data
const mockData = [{
  name: 'Mixmax',
  budget_name: 'Software subscription',
  owner_id: 1,
  spent: {
    value: 100,
    currency: 'SGD'
  },
  available_to_spend: {
    value: 1000,
    currency: 'SGD'
  },
  card_type: 'burner',
  expiry: '9 Feb',
  limit: 100,
  status: 'active'
},
{
  name: 'Quickbooks',
  budget_name: 'Software subscription',
  owner_id: 2,
  spent: {
    value: 50,
    currency: 'SGD'
  },
  available_to_spend: {
    value: 250,
    currency: 'SGD'
  },
  card_type: 'subscription',
  limit: 10,
  status: 'active'
},
{
  name: 'Netflix',
  budget_name: 'Software subscription',
  owner_id: 2,
  spent: {
    value: 50,
    currency: 'SGD'
  },
  available_to_spend: {
    value: 250,
    currency: 'SGD'
  },
  card_type: 'subscription',
  limit: 30,
  status: 'active'
},
{
  name: 'Amazon Prime',
  budget_name: 'Software subscription',
  owner_id: 2,
  spent: {
    value: 50,
    currency: 'SGD'
  },
  available_to_spend: {
    value: 250,
    currency: 'SGD'
  },
  card_type: 'burner',
  limit: 50,
  status: 'active'
},
{
  name: 'Hotstar',
  budget_name: 'Software subscription',
  owner_id: 2,
  spent: {
    value: 50,
    currency: 'SGD'
  },
  available_to_spend: {
    value: 250,
    currency: 'SGD'
  },
  card_type: 'subscription',
  limit: 40,
  status: 'active'
},
{
  name: 'Offsite Event',
  budget_name: 'Software subscription',
  owner_id: 2,
  spent: {
    value: 50,
    currency: 'SGD'
  },
  available_to_spend: {
    value: 250,
    currency: 'SGD'
  },
  card_type: 'burner',
  limit: 200,
  status: 'active'
},
{
  name: 'LinkedIn',
  budget_name: 'Software subscription',
  owner_id: 2,
  spent: {
    value: 50,
    currency: 'SGD'
  },
  available_to_spend: {
    value: 250,
    currency: 'SGD'
  },
  card_type: 'burner',
  limit: 10,
  status: 'active'
},
{
  name: 'Zee5',
  budget_name: 'Software subscription',
  owner_id: 2,
  spent: {
    value: 50,
    currency: 'SGD'
  },
  available_to_spend: {
    value: 250,
    currency: 'SGD'
  },
  card_type: 'subscription',
  limit: 20,
  status: 'active'
},
{
  name: 'Volopay',
  budget_name: 'Software subscription',
  owner_id: 2,
  spent: {
    value: 50,
    currency: 'SGD'
  },
  available_to_spend: {
    value: 250,
    currency: 'SGD'
  },
  card_type: 'burner',
  limit: 15,
  status: 'active'
},
{
  name: 'Travel Allowance',
  budget_name: 'Software subscription',
  owner_id: 2,
  spent: {
    value: 50,
    currency: 'SGD'
  },
  available_to_spend: {
    value: 250,
    currency: 'SGD'
  },
  card_type: 'subscription',
  limit: 60,
  status: 'active'
},
{
  name: 'Rental',
  budget_name: 'Software subscription',
  owner_id: 2,
  spent: {
    value: 50,
    currency: 'SGD'
  },
  available_to_spend: {
    value: 250,
    currency: 'SGD'
  },
  card_type: 'burner',
  limit: 40,
  status: 'active'
},
];

// Function to render cards
function renderCards(cards) {
  const cardList = document.getElementById('card-list');
  cardList.innerHTML = '';

  if (cards.length === 0) {
    const noResults = document.createElement('p');
    noResults.textContent = 'No results found.';
    cardList.appendChild(noResults);
  } else {
    const cardElements = cards.map(card => createCardElement(card));
    cardElements.forEach(cardElement => {
      cardList.appendChild(cardElement);
    });
  }
}

// Function to create a card element
function createCardElement(card) {
  const { name, budget_name, card_type, expiry, limit, status } = card;

  const cardElement = document.createElement('div');
  cardElement.className = 'card mb-3';

  const cardHeader = document.createElement('div');
  cardHeader.className = 'card-header';
  cardHeader.textContent = name;

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const cardType = document.createElement('div');
  cardType.className = 'card-type';
  cardType.textContent = card_type;

  const cardDetails = document.createElement('div');
  cardDetails.className = 'card-details';
  cardDetails.innerHTML = `
    <p><strong>Budget:</strong> ${budget_name}</p>
    <p><strong>Status:</strong> ${status}</p>
  `;

  const cardInfo = document.createElement('div');
  cardInfo.className = 'card-info';

  if (card_type === 'burner') {
    const cardExpiry = document.createElement('p');
    cardExpiry.innerHTML = `<strong>Expiry:</strong> ${expiry}`;
    cardInfo.appendChild(cardExpiry);
  } else if (card_type === 'subscription') {
    const cardLimit = document.createElement('p');
    cardLimit.innerHTML = `<strong>Limit:</strong> ${limit}`;
    cardInfo.appendChild(cardLimit);
  }

  cardBody.appendChild(cardType);
  cardBody.appendChild(cardDetails);
  cardBody.appendChild(cardInfo);

  cardElement.appendChild(cardHeader);
  cardElement.appendChild(cardBody);

  return cardElement;
}

// Function to filter cards by name
function filterCardsByName(cards, query) {
  return cards.filter(card => card.name.toLowerCase().includes(query.toLowerCase()));
}

// Function to handle tab clicks
function handleTabClick(event) {
  const selectedTab = event.target;
  const tabs = document.querySelectorAll('.tab-button');

  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  selectedTab.classList.add('active');

  // Perform filtering based on the selected tab
  const filter = selectedTab.textContent.toLowerCase();
  let filteredCards = [];

  if (filter === 'your') {
    filteredCards = mockData.filter(card => card.owner_id === 1);
  } else if (filter === 'all') {
    filteredCards = mockData;
  } else if (filter === 'blocked') {
    filteredCards = mockData.filter(card => card.status === 'blocked');
  }

  renderCards(filteredCards);
}

// Function to handle search
// Function to handle search
function handleSearch() {
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value.trim().toLowerCase();

  const filteredCards = mockData.filter(card => card.name.toLowerCase().includes(query));
  renderCards(filteredCards);
}


// Function to handle filter checkbox changes
function handleFilterChange() {
  const subscriptionFilter = document.getElementById('subscription-filter');
  const burnerFilter = document.getElementById('burner-filter');

  const isSubscriptionChecked = subscriptionFilter.checked;
  const isBurnerChecked = burnerFilter.checked;

  let filteredCards = mockData;

  if (isSubscriptionChecked && !isBurnerChecked) {
    filteredCards = mockData.filter(card => card.card_type === 'subscription');
  } else if (!isSubscriptionChecked && isBurnerChecked) {
    filteredCards = mockData.filter(card => card.card_type === 'burner');
  }

  renderCards(filteredCards);
}

// Function to initialize the page
function initializePage() {
  const tabs = document.querySelectorAll('.tab-button');
  const searchButton = document.getElementById('search-button');
  const subscriptionFilter = document.getElementById('subscription-filter');
  const burnerFilter = document.getElementById('burner-filter');

  tabs.forEach(tab => {
    tab.addEventListener('click', handleTabClick);
  });

  searchButton.addEventListener('click', handleSearch);
  subscriptionFilter.addEventListener('change', handleFilterChange);
  burnerFilter.addEventListener('change', handleFilterChange);

  // Render the initial card list
  renderCards(mockData);
}

// Initialize the page
initializePage();
