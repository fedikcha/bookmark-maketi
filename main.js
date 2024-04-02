const modifiers = {
  tabItemActive: `tabs__item--active`,
  tabTabPAnel: `tabpanels__item--active`,
  tabAccordiItem: `accordion__item--open`
}

const elsTabsItem = document.querySelectorAll(`.tabs__item`);
const elsTabsPanel = document.querySelectorAll(`.tabpanels__item`);
const elsTabLink = document.querySelectorAll(`.js-tab-link`);

const elsAccordiItem = document.querySelectorAll(`.accordion__item`);
const elsAccordiItemToggler = document.querySelectorAll(`.accordion__item-toggler`);


// funksiyaga o'rab qo'yib kerak bo'lganda ishlatgani bitta so'z bilan chaqirib ishlatish
function deactivateTabItems () {
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove(modifiers.tabItemActive);
  });
}

function deactivateTabPanels () {
  elsTabsPanel.forEach(function (elTabPanel) {
    elTabPanel.classList.remove(modifiers.tabTabPAnel);
  });
}

// What is Bookmark joytini bosganda cho'zilib kichkinalashtirilidigon qildik
function closeAccardionItems () {
  elsAccordiItem.forEach(function (elAccordiItem) {
    elAccordiItem.classList.remove(modifiers.tabAccordiItem)
  })
}

// link bosilganda pasga sakrak tushib ketmaslik uchun yoziladi
elsTabLink.forEach(function (elTabLink){
  elTabLink.addEventListener('click', function (evt){
    // Prevent page move
    evt.preventDefault();

    // Remove active class form tabs__item Elements
    deactivateTabItems();


    // Add active class to current tabs__item
    elTabLink.parentElement.classList.add(modifiers.tabItemActive);

    // Remove active class from tabs__panel elements
    deactivateTabPanels();

    // Show active tab panel
    // const elTargetPanel = document.querySelector(`#${elTabLink.href.split(`#`)[1]}`);
    const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
    // htmlda data-tab-target orqali limklarni ag'dan baqa o'tqazishni oson usuli
    elTargetPanel.classList.add(modifiers.tabTabPAnel);
  });
});

// What is Bookmark joytini bosganda cho'zilib kichkinalashtirilidigon qildik
elsAccordiItemToggler.forEach(function (elAccordiItemToggler) {
  elAccordiItemToggler.addEventListener(`click`, function (){
    closeAccardionItems();

    elAccordiItemToggler.closest(`.accordion__item`).classList.add(modifiers.tabAccordiItem)
  });
});