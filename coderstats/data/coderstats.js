let path = document.location.pathname,
    details,
    login,
    url;

if (m = path.match(/^\/([\w-]+)\??.*?/)) {
    login = m[1].trim();
    if (-1 === ['timeline', 'languages', 'blog', 'explore'].indexOf(login)) {
        url = 'http://coderstats.net/github/' + login + '/';
        details = document.getElementsByClassName('vcard-details');
        if (details.length > 0) {
            addLink();
        }
    }
}


function addLink() {
    let li = document.createElement('li');
    li.setAttribute('id', 'coderstats');
    li.setAttribute('class', 'vcard-detail pt-1');
    li.setAttribute('itemprop', 'url');

    let span = document.createElement('span');
    span.setAttribute('class', 'octicon');
    span.setAttribute('style', 'margin-top:-2px;');
    span.textContent = "📊";
    li.appendChild(span)

    let a = document.createElement('a');
    a.setAttribute('href', url);
    a.textContent = "CoderStats('" + login + "')";

    li.appendChild(a);
    details[0].appendChild(li);
}