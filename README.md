Components:

-App - holds the list of US States and their information, such as
name, region, number of votes, and political leaning. Passes this list
into FilteredList.

-FilteredList - contains all the methods for filtering, sorting, and 
keeping track of the total number of votes in the Vote Counter.
Also controls the display of other components in the app and holds the
flexbox Container.
Passes a filtered and sorted list into DisplayList, along with an add
US State function in order to add a State to the aggregator if the 
button is clicked. 
Passes an aggregate list of states chosen by the user into DisplayAggregator,
along with a remove US State function to remove it from the aggregator
if the button is clicked.

-DisplayList - displays the filtered and sorted list in the display, 
and the user list in the Vote Counter. Receives a filtered and sorted
list and a function to call to add a state to the aggregator.
When this function is called, it passes in the state that the user clicked
on and the number of electoral votes it has.

-DisplayAggregator - displays the user list in the Vote Counter
Receives a list of states the user clicked on and a function to call to 
remove a state from the aggregator.
When this function is called, it passes in the state that the user clicked
on and the number of electoral votes it has.


How the user triggers state changes:
States:
(for filtering)
-color - is changed when user clicks on different filter options for
political leaning of US States
-region - is changed when user clicks on different filter options for
region of US States

(for sorting)
-sortCondition - is changed when user clicks on different sort options
for number of electoral votes for US States

(for aggregator)
-votesToAdd - is changed when user clicks the button on a US State card
to either add or remove it from the aggregator
-totalVotes - is changed when user clicks the button on a US State card
to either add or remove it from the aggregator

