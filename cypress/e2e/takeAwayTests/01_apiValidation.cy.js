
it('API GET Validation + Response Time Check',()=>
{
    cy.request('https://jsonplaceholder.typicode.com/posts/1').then((response)=>
    {
        expect(response.status).to.be.eq(200)
        expect(response.body.id).to.be.eq(1)
        expect(response.body.title).to.not.be.empty
        expect(response.body.id).to.be.a('number')        
    })

})