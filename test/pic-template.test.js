const test = QUnit.test;

test('pic template test', assert => {
    //arrange
    const picture = {
        url: 'https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80',
        title: 'lego',
        description: 'Lego description'
    };
    const expected = /*html*/`
    <li>
        <h2>Lego</h2>
        <img src="https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80" alt="">
        <p>Lego description</p>
    </li>
`;

    //act

    const html = template(picture);
    //assert
    assert.htmlEqual(html, expected);

});

