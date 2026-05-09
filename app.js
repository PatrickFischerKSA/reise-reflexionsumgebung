const dropboxBase = 'https://www.dropbox.com/scl/fo/nzihry3rwxfyfcvw3qbkr/h/';
const dropboxKey = 'rlkey=k02mmkzickgsp85ghv0gfwrlb';

const videos = [
  { n: 1, file: 'Ohne Flugzeug um die Welt (1) Vom Schwarzwald nach Moskau.mp4', title: 'Vom Schwarzwald nach Moskau', place: 'Schwarzwald, Osteuropa, Moskau', lens: ['freiheit', 'begegnung'], note: 'Aufbruch: Die Reise beginnt als bewusste Abwendung vom normalen Verkehr und vom touristischen Paket.' },
  { n: 2, file: 'Ohne Flugzeug um die Welt (2) Per Anhalter durch den Ural.mp4', title: 'Per Anhalter durch den Ural', place: 'Ural', lens: ['komfort', 'begegnung'], note: 'Entbehrung und Hilfe: Mobilität entsteht durch Abhängigkeit von anderen.' },
  { n: 3, file: 'Ohne Flugzeug um die Welt (3) Eingeschneit im Pamir-Gebirge.mp4', title: 'Eingeschneit im Pamir-Gebirge', place: 'Pamir', lens: ['komfort', 'bilder'], note: 'Das Abenteuerbild kippt in Körperlichkeit, Kälte und Risiko.' },
  { n: 4, file: 'Ohne Flugzeug um die Welt (4) Auf Dschingis Khans Spuren.mp4', title: 'Auf Dschingis Khans Spuren', place: 'Zentralasien, Mongolei-Bezug', lens: ['bilder', 'begegnung'], note: 'Historische Imaginationen rahmen die Fremde, bevor sie erfahren wird.' },
  { n: 5, file: 'Ohne Flugzeug um die Welt (5) Im Dorf der Hundertjährigen.mp4', title: 'Im Dorf der Hundertjährigen', place: 'Kaukasus', lens: ['bilder', 'begegnung'], note: 'Der Ort wird durch eine Erwartungsfigur lesbar: Mythos, Alter, Authentizität.' },
  { n: 6, file: 'Ohne Flugzeug um die Welt (6) Einsam im georgischen Wald.mp4', title: 'Einsam im georgischen Wald', place: 'Georgien', lens: ['freiheit', 'komfort'], note: 'Rückzug aus Infrastruktur: Freiheit erscheint als freiwillige Reduktion.' },
  { n: 7, file: 'Ohne Flugzeug um die Welt (7) Zwei Freiburger im Iran.mp4', title: 'Zwei Freiburger im Iran', place: 'Iran', lens: ['begegnung', 'bilder'], note: 'Zwischen medialem Bild, Gastfreundschaft und politischer Kontrolle.' },
  { n: 8, file: 'Ohne Flugzeug um die Welt (8) Freiburger Filmpaar traut sich nach Pakistan.mp4', title: 'Freiburger Filmpaar traut sich nach Pakistan', place: 'Iran/Pakistan', lens: ['begegnung', 'bilder'], note: 'Angstbilder werden zum Teil der Reiseerzählung.' },
  { n: 9, file: 'Ohne Flugzeug um die Welt (9) Drei Wochen in Pakistan.mp4', title: 'Drei Wochen in Pakistan', place: 'Pakistan', lens: ['begegnung'], note: 'Verweilen statt Durchreise: Fremdheit wird nicht nur durch Distanz, sondern durch Dauer erzeugt.' },
  { n: 10, file: 'Ohne Flugzeug um die Welt (10) Freiburger stoßen in Indien an Grenzen.mp4', title: 'Freiburger stoßen in Indien an Grenzen', place: 'Indien', lens: ['komfort', 'begegnung'], note: 'Überforderung als Gegenbild zur romantischen Reiseerwartung.' },
  { n: 11, file: 'Ohne Flugzeug um die Welt (11) Zelten im Himalaya.mp4', title: 'Zelten im Himalaya', place: 'Himalaya', lens: ['komfort', 'bilder'], note: 'Das Erhabene ist schön und anstrengend: Bildwert und Körpergrenze gehören zusammen.' },
  { n: 12, file: 'Ohne Flugzeug um die Welt (12) Über Pakistan nach China.mp4', title: 'Über Pakistan nach China', place: 'Pakistan, China', lens: ['freiheit'], note: 'Grenzen und Umwege zeigen, dass Mobilität nie nur individuelle Entscheidung ist.' },
  { n: 13, file: 'Ohne Flugzeug um die Welt (13) Freiburger trampen quer durch China.mp4', title: 'Freiburger trampen quer durch China', place: 'China', lens: ['begegnung', 'bilder'], note: 'Kommunikation, Zeichen und Selbstbild werden selbst zum Reisethema.' },
  { n: 14, file: 'Ohne Flugzeug um die Welt (14) Freiburger Paar lebt unter Nomaden.mp4', title: 'Freiburger Paar lebt unter Nomaden', place: 'Mongolei/Sibirien', lens: ['begegnung', 'komfort'], note: 'Authentizität muss beobachtet werden: Begegnung, Romantisierung, Abhängigkeit.' },
  { n: 15, file: 'Ohne Flugzeug um die Welt (15) Mit dem Schamanen auf dem Geisterberg.mp4', title: 'Mit dem Schamanen auf dem Geisterberg', place: 'Sibirien', lens: ['bilder', 'begegnung'], note: 'Spiritualität als filmische Verdichtung von Ferne.' },
  { n: 16, file: 'Ohne Flugzeug um die Welt (16) Vom sibirischen Winter überrascht.mp4', title: 'Vom sibirischen Winter überrascht', place: 'Sibirien', lens: ['komfort'], note: 'Natur ist kein Prospekt: Sie entzieht sich Planung und Bildkontrolle.' },
  { n: 17, file: 'Ohne Flugzeug um die Welt (17) Der Tokio-Schock.mp4', title: 'Der Tokio-Schock', place: 'Tokio', lens: ['bilder', 'komfort'], note: 'Metropole statt Wildnis: Reise als Konfrontation mit Dichte, Tempo und Konsum.' },
  { n: 18, file: 'Ohne Flugzeug um die Welt (18)  In 14 Tagen über den Pazifik.mp4', title: 'In 14 Tagen über den Pazifik', place: 'Pazifik', lens: ['freiheit', 'komfort'], note: 'Ohne Flugzeug reisen heißt: Zeit wird wieder spürbar.' },
  { n: 19, file: 'Ohne Flugzeug um die Welt (19) Überraschung in Mexiko.mp4', title: 'Überraschung in Mexiko', place: 'Mexiko', lens: ['begegnung', 'rueckkehr'], note: 'Die Reise verändert den Körper und die Zukunftsplanung.' },
  { n: 20, file: 'Ohne Flugzeug um die Welt (20) Melancholie in Mexiko.mp4', title: 'Melancholie in Mexiko', place: 'Mexiko', lens: ['freiheit', 'rueckkehr'], note: 'Reisen als Zwischenzustand: nicht mehr ganz unterwegs, noch nicht angekommen.' },
  { n: 21, file: 'Ohne Flugzeug um die Welt (21) Schwanger im Dschungel.mp4', title: 'Schwanger im Dschungel', place: 'Mittelamerika', lens: ['komfort', 'rueckkehr'], note: 'Das Abenteuer wird familial und verletzlich.' },
  { n: 22, file: 'Ohne Flugzeug um die Welt (22) Zu dritt in Mittelamerika.mp4', title: 'Zu dritt in Mittelamerika', place: 'Mittelamerika', lens: ['freiheit', 'komfort'], note: 'Reisefreiheit trifft Sorgearbeit.' },
  { n: 23, file: 'Ohne Flugzeug um die Welt (23) Bollenhut in Guatemala.mp4', title: 'Bollenhut in Guatemala', place: 'Guatemala', lens: ['bilder', 'rueckkehr'], note: 'Heimatzeichen in der Ferne: Identität wird für andere sichtbar gemacht.' },
  { n: 24, file: 'Ohne Flugzeug um die Welt (24) Der Abschied naht.mp4', title: 'Der Abschied naht', place: 'Amerika/Atlantikroute', lens: ['rueckkehr'], note: 'Das Ende der Ferne wird selbst zum dramatischen Motiv.' },
  { n: 25, file: 'Ohne Flugzeug um die Welt (25) Zurück nach Europa.mp4', title: 'Zurück nach Europa', place: 'Europa', lens: ['rueckkehr'], note: 'Rückkehr prüft, ob die Reise mehr war als ihre Erzählung.' },
  { n: 26, file: 'Ohne Flugzeug um die Welt (26) Zu Fuß durch Europa.mp4', title: 'Zu Fuß durch Europa', place: 'Europa', lens: ['freiheit', 'komfort'], note: 'Langsamkeit wird als letzte Gegenpraxis zur beschleunigten Mobilität gesetzt.' },
  { n: 27, file: 'Ohne Flugzeug um die Welt (27) Die letzte Etappe.mp4', title: 'Die letzte Etappe', place: 'Europa, Deutschland', lens: ['rueckkehr'], note: 'Die Heimkehr nähert sich: Was bleibt vom Versprechen der Ferne?' },
  { n: 28, file: 'Ohne Flugzeug um die Welt (28) Der Kreis schließt sich.mp4', title: 'Der Kreis schließt sich', place: 'Schwarzwald', lens: ['rueckkehr', 'freiheit'], note: 'Die Reise wird rund: Anfang und Ende erzeugen Sinn.' }
].map((video) => ({
  ...video,
  type: 'main',
  url: dropboxUrl(video.file),
  streamUrl: dropboxUrl(video.file, 'raw=1')
}));

const textCards = [
  {
    title: 'Enzensberger: Tourismus als Fluchtbewegung',
    body: 'Der Essay liest Tourismus nicht nur als lächerliche Massenpraxis, sondern als Symptom: Menschen fliehen aus einer Wirklichkeit, die ihnen zu eng wird. Die Flucht bleibt aber an Markt, Komfort, Rückfahrkarte und Prestige gebunden.',
    question: 'Wo wirkt die Filmreise wie ein Ausbruch aus Warenförmigkeit, wo produziert sie neue Ware: Bilder, Story, Marke?',
    source: 'Hans Magnus Enzensberger, Vergebliche Brandung der Ferne, 1958'
  },
  {
    title: 'Groebner: Ferienmüde',
    body: 'Groebner beobachtet Reisen im Zustand der Erschöpfung: schlechtes Gewissen, austauschbare Orte, Bildermachen, Konsum als Antikonsum und die Sehnsucht, am richtigen Ort endlich richtig zu fühlen.',
    question: 'Welche Szenen zeigen Reisemüdigkeit, Überforderung oder den Verdacht, dass alles schon als Bild vorhanden war?',
    source: 'Valentin Groebner, Ferienmüde. Als das Reisen nicht mehr geholfen hat, 2020'
  },
  {
    title: 'Groebner: Abgefahren',
    body: 'Abgefahren fragt nach Reisen zum Vergnügen im Zeitalter informierter Erwartungen: Man reist selten unvorbereitet, sondern mit Vorwissen, Sehnsucht, Screens und Vergleichsbildern.',
    question: 'Wann entdecken die Reisenden wirklich etwas, und wann bestätigen sie, was sie vorher schon über den Ort wissen konnten?',
    source: 'Valentin Groebner, Abgefahren. Reisen zum Vergnügen, 2025'
  },
  {
    title: 'Bilder als Beweis',
    body: 'Enzensberger beschreibt Souvenir und Foto als Beweisstücke der Rückkehr. Groebner verschärft diese Frage für Gegenwart und Digitalkultur: Das Bild ist nicht Nachtrag, sondern oft Anlass des Reisens.',
    question: 'Welche Kameramomente wirken beobachtend, welche wirken wie die Herstellung eines späteren Beweises?',
    source: 'Vergleichslinse'
  },
  {
    title: 'Komfort, Askese, Privileg',
    body: 'Die Reise ohne Flugzeug und mit wenig Geld tritt als Gegenmodell zum Pauschaltourismus auf. Zugleich bleibt sie auf Pässe, Zeit, mediale Technik und die Hilfe anderer angewiesen.',
    question: 'Ist freiwillige Entbehrung eine Kritik am Tourismus oder ein neues Distinktionsmerkmal?',
    source: 'Vergleichslinse'
  },
  {
    title: 'Rückkehr',
    body: 'Touristische Freiheit ist bei Enzensberger durch die Rückfahrkarte begrenzt. In der Filmreihe wird Rückkehr zum Sinnversprechen: Erst daheim lässt sich die Weltreise als ganze Geschichte erzählen.',
    question: 'Was wäre an der Reise anders, wenn sie nicht als Kreis, sondern als offenes Ende erzählt würde?',
    source: 'Vergleichslinse'
  }
];

const list = document.querySelector('#videoList');
const textGrid = document.querySelector('#textCards');
const searchInput = document.querySelector('#searchInput');
const modeSelect = document.querySelector('#modeSelect');
const lensSelect = document.querySelector('#lensSelect');
const notes = document.querySelector('#notes');
const featuredPlayer = document.querySelector('#featuredPlayer');

function dropboxUrl(file, mode = 'dl=0') {
  return `${dropboxBase}${encodeURIComponent(file)}?${dropboxKey}&${mode}`;
}

function renderVideos() {
  const query = searchInput.value.trim().toLowerCase();
  const mode = modeSelect.value;
  const lens = lensSelect.value;
  const filtered = videos.filter((video) => {
    const matchesMode = mode === 'all' || video.type === mode;
    const matchesLens = lens === 'all' || video.lens.includes(lens);
    const haystack = `${video.title} ${video.place} ${video.note}`.toLowerCase();
    return matchesMode && matchesLens && haystack.includes(query);
  });

  list.innerHTML = filtered.map((video) => `
    <article class="video-card">
      <button class="thumb" type="button" data-video="${video.n}" aria-label="Teil ${video.n} im Player laden">
        <span class="badge">Teil ${video.n}</span>
        MP4
      </button>
      <div>
        <h3>${video.title}</h3>
        <div class="video-meta">
          <span>${video.place}</span>
          ${video.lens.map((tag) => `<span class="tag">${labelFor(tag)}</span>`).join('')}
        </div>
        <p>${video.note}</p>
        <div class="video-actions">
          <a href="${video.url}" target="_blank" rel="noreferrer">Dropbox-Link öffnen</a>
          <a href="${video.streamUrl}" target="_blank" rel="noreferrer">Direkte MP4-Quelle</a>
        </div>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('[data-video]').forEach((button) => {
    button.addEventListener('click', () => {
      const selected = videos.find((video) => String(video.n) === button.dataset.video);
      if (selected) loadFeatured(selected);
    });
  });
}

function renderTextCards() {
  textGrid.innerHTML = textCards.map((card) => `
    <article class="text-card">
      <h3>${card.title}</h3>
      <p>${card.body}</p>
      <p><strong>Arbeitsfrage:</strong> ${card.question}</p>
      <p class="source">${card.source}</p>
    </article>
  `).join('');
}

function labelFor(tag) {
  return {
    freiheit: 'Freiheit/Flucht',
    bilder: 'Bilder',
    komfort: 'Komfort',
    begegnung: 'Begegnung',
    rueckkehr: 'Rückkehr'
  }[tag] || tag;
}

searchInput.addEventListener('input', renderVideos);
modeSelect.addEventListener('change', renderVideos);
lensSelect.addEventListener('change', renderVideos);
document.querySelector('#printBtn').addEventListener('click', () => window.print());
document.querySelector('#clearNotes').addEventListener('click', () => {
  if (confirm('Arbeitsjournal wirklich löschen?')) {
    notes.value = '';
    localStorage.removeItem('reise-reflexion-notes');
  }
});

notes.value = localStorage.getItem('reise-reflexion-notes') || '';
notes.addEventListener('input', () => localStorage.setItem('reise-reflexion-notes', notes.value));

renderTextCards();
renderVideos();
loadFeatured(videos[0]);

function loadFeatured(video) {
  featuredPlayer.src = video.streamUrl;
  featuredPlayer.title = `Teil ${video.n}: ${video.title}`;
  featuredPlayer.setAttribute('aria-label', `Teil ${video.n}: ${video.title}`);
}
