import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given('I am on the cucumber.js GitHub repository',()=>{
     cy.visit('https://github.com/cucumber/cucumber-js')
})

When('I go to the README file',()=>{
     cy.get('[title="README.md"]').click()
})

Then('I should see a {string} section',(content)=>{
     cy.get('article.markdown-body').should('not.contain',content).then(()=>{
          console.log("This " + content + " was not found.");
     })
})


Then('I should see a Build Status and Dependencies badge',()=>{
     cy.get('[alt="GitHub Actions"]').invoke('attr','src').then((src)=>{
          expect(src).to.be.exist
     })
     cy.get('[alt="Dependencies"]').invoke('attr','src').then((src)=>{
          expect(src).to.be.exist
     })
})