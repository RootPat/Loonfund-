# Loonfund-
Loonfund is a peer-to-peer fundraising platform dedicated exclusively to charitable giving. Loonfund uses a decentralized, crowdfunding model that allows users to send payments online without the interference of any 3rd parties. Traditional fundraising services and crowdfunding platforms collect some sort of transaction charge. Kickstarter, for example, charges a 5% transaction fee plus an additional 3-5% for payment processing. GoFundMe's fee is 5% from each donation you receive plus a payment processor fee of 2.9% + $0.30 per donation.
Loonfund is an open source, non profit aimed at providing the seamless transfer of money to needing individuals and causes. There are 0 transaction fees and the funds are transferrered directly to the cause. 
The user can create a fundraiser for either a charity or an individual cause:
1) If they opt for a charity, they can create a campaign to raise funds for a registered 501c3 non profit. For this option, the funds are   transferred directly to the charity organization.
  All funds raised from Certified Charity campaigns are sent directly to the charity and donors receive tax deductible receipts for their   donations.
2) If they opt for an individual cause, they can raise money for a private cause. This could include medical bills, a friend’s tuition, a group volunteer trip or any personal cause acceptable on GoFundMe. For this option, the funds are transferred directly to the party organizing the fundraiser.  
----
Loonfund  Architecture

Loonfund consists of (a) a web interface, and (b) a
network of Ethereum nodes. The web interface is used to interact with the smart
contracts, using a javascript compatible api Web3. A user is assigned a public key in the web interface which will allow them to identify themselves.
The web interface communicates with an Ethereum node running on the same
machine. This requires the user to have a private key stored in the node, and to
initially unlock their account by entering a password at the node.

Since it is build on Ethereum, loonfund does not rely on traditional client-server architecture. The conventional backend -say php or mysql- is replaced with the ethereum blockchain. The web intereface then only includes client-side code. The back end is comprised of the smart contract.

There are two categories of users on Loonfund:

- Borrower. A user who borrows money from another user. A person in  need of capital who launches a fundraiser.
– Lender. A user who lends money to a borrower. Normally, this would be
a person with access to excess capital, motivated by philantropy.


Advantages of LoonFund 
 The main advantage of Loonfund is that it provides an unalterable history of previous transactions. This includes users’ lending history, as well as the history of all project. The transparent nature of the system will make Loonfund more attractive than its centralized competitors. 
