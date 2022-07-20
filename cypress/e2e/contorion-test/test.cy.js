describe('Testing searching on Contorion', () => {
	it('I can search something', () => {
		cy.visit('https://www.contorion.de/');
		cy.xpath("//button[@id='popin_tc_privacy_button']").click()
		cy.get("div[data-class='hover'] a span").click()
		cy.get("input[data-qa='login[email]']").type('loleva5000@tebyy.com')
		cy.get("input[data-qa='login[password]']").type('Cat0707.').type('{enter}')
		cy.get("input[name='q']").type('Hammer').type('{enter}')
		cy.contains('HOLEX Schlosserhammer')
	});
})