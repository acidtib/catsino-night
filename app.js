
const team = [
{
  rank: 1,
  name: 'Fritz_HausOfCatz',
  handle: 'fritz_hausofcatz',
  img: 'img/players/1.png',
  kudos: 36,
  sent: 31 },
{
  rank: 2,
  name: 'icky_hausofcatz',
  handle: 'icky_hausofcatz',
  img: 'img/players/2.png',
  kudos: 31,
  sent: 21 },
{
  rank: 3,
  name: 'Agent3540',
  handle: 'agent3540',
  img: 'img/players/3.png',
  kudos: 24,
  sent: 7 },
{
  rank: 4,
  name: 'graveprincess',
  handle: 'graveprincess',
  img: 'img/players/4.png',
  kudos: 22,
  sent: 4 },
{
  rank: 5,
  name: 'GameFlubDojo',
  handle: 'gameflubdojo',
  img: 'img/players/5.png',
  kudos: 18,
  sent: 16 },
{
  rank: 6,
  name: 'Fraelyne',
  handle: 'fraelyne',
  img: 'img/players/6.png',
  kudos: 16,
  sent: 6 },
{
  rank: 7,
  name: 'HinaHanta',
  handle: 'hinahanta',
  img: 'img/players/7.jpeg',
  kudos: 10,
  sent: 21 },
{
  rank: 8,
  name: 'Sonnekonig85',
  handle: 'sonnekonig85',
  img: 'img/players/8.png',
  kudos: 7,
  sent: 46 },
{
  rank: 9,
  name: 'LoominaVT',
  handle: 'loominavt',
  img: 'img/players/9.png',
  kudos: 4,
  sent: 2 },
{
  rank: 10,
  name: 'Lite_Candle',
  handle: 'lite_candle',
  img: 'img/players/10.png',
  kudos: 1,
  sent: 24 }];



const randomEmoji = () => {
  const emojis = ['👏', '👍', '🙌', '🤩', '🔥', '⭐️', '🏆', '💯'];
  let randomNumber = Math.floor(Math.random() * emojis.length);
  return emojis[randomNumber];
};

team.forEach(member => {
  let newRow = document.createElement('li');
  newRow.classList = 'c-list__item';
  newRow.innerHTML = `
		<div class="c-list__grid">
			<div class="c-flag c-place u-bg--transparent">${member.rank}</div>
			<div class="c-media">
				<img class="c-avatar c-media__img" src="${member.img}" />
				<div class="c-media__content">
					<div class="c-media__title">${member.name}</div>
					<a class="c-media__link u-text--small" href="https://twitch.com/${member.handle}" target="_blank">@${member.handle}</a>
				</div>
			</div>
			<div class="u-text--right c-kudos">
				<div class="u-mt--8">
					<strong>${member.kudos}</strong> ${randomEmoji()}
				</div>
			</div>
		</div>
	`;
  if (member.rank === 1) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--yellow');
    newRow.querySelector('.c-kudos').classList.add('u-text--yellow');
  } else if (member.rank === 2) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--teal');
    newRow.querySelector('.c-kudos').classList.add('u-text--teal');
  } else if (member.rank === 3) {
    newRow.querySelector('.c-place').classList.add('u-text--dark');
    newRow.querySelector('.c-place').classList.add('u-bg--orange');
    newRow.querySelector('.c-kudos').classList.add('u-text--orange');
  }
  list.appendChild(newRow);
});

// Find Winner from sent kudos by sorting the drivers in the team array
let sortedTeam = team.sort((a, b) => b.sent - a.sent);
let winner = sortedTeam[0];