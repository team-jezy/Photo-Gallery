function template(picture) { 
    return /*html*/`
    <li>
        <h2>${picture.title}</h2>
        <img src="${picture.url}">
        <p>${picture.description}</p>
    </li>
`;
}

export default template;