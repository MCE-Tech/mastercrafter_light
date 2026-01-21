# Video diplayed on artist portfolio

## Flow details

### Noraml flow
- User should be displayed with most viewed videos (5 only, if client want to see more, he will have option to get redirected)

### With filter
- Videos will be filtered on the basis of user filter provided 
- Same as normal flow

## Implementation
For storing purpose, since we are not able to find any youtube API which serves our purpose well, we will store the data in DB for faster access and retrival.
- There will be a table which will store the data for each artist videos and filtered data as well to give the best response to the client
- 